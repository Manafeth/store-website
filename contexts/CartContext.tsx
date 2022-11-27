import { useRouter } from 'next/router';
import React, {
  createContext,
  useContext,
  ReactElement,
  FC,
  useState,
} from 'react';
import { ERROR, LOADING, SUCCESS } from '../constants';
import { checkCouponValidation, createOrder, createPaymentGateway, createPreScoring, deleteProductFromCart, getAllCartProducts, getAllProviders, getBankFiles, getInvoice, getOrder, stcPaymentConfirmation, uploadBankFiles } from '../services/cart.services';
import { CartModalState, CheckoutData, StcPaymentData, InvocieData, OrderData, PaymentData, PaymentProvidersData, ShipmentsProvidersData, BankFilesData } from '../types/cart';
import { ProductData } from '../types/products';
import { useAlert } from './AlertContext';


interface Props {
  children: ReactElement | ReactElement[];
}

const CartModalContext = createContext({} as CartModalState);

export const CartModalProvider: FC<Props> = ({ children }) => {
    const [cartData, setCartData] = useState<ProductData[]>([]);
    const [shipmentData, setShipmentData] = useState<ShipmentsProvidersData[]>([]);
    const [paymnetData, setPaymnetData] = useState<PaymentProvidersData[]>([]);
    const [orderAndInvoice, setOrderAndInvoice] = useState({
      orderId: 0,
      invoiceId: 0
    })
    const initialState = {
      shipmentProviderId: 0,
      paymentProviderId: 0,
      couponCode: "",
      addressId: 0,
      type: 1
    }
    const [checkoutData, setCheckoutData] = useState<CheckoutData>(initialState);

    const [orderData, setOrderData] = useState<OrderData>({
      id:0,
      invoiceId:0,
      orderDate:'',
      phoneNumber:'',
      paymentProvider:'',
      paymentStatus:0,
      status:0,
      rejectionReason: '',
      shipmentProviderImage: {
        orignialUrl:'',
        thumbUrl:'',
      },
      orderChangeLogs:[
        {
          id:0,
          new:0,
          changeAt:'',
        }
      ],
      providerCategory: 0,
      providerType: 0,
      totalCost: 0
    });
    const [invoiceData, setInvoiceData] = useState<InvocieData>({
      id:0,
      createAt:'',
      date: '',
      total: 0,
      vatPercentage:0,
      discount: 0,
      netValue: 0,
      account: {
          id:0,
          title:''
      },
      invoiceItems:[
        {
          id: 0,
          itemId: 0,
          item: '',
          unitPrice: 0,
          quantity: 0,
          total: 0,
        }
      ],
    });


  const [createOrderStatus, setCreateOrderStatus] = useState('');
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [stcPaymentStatus, setStcPaymentStatus] = useState('');
  const [bankFilesStatus, setBankFilesStatus] = useState('');
  const [removeStatus, setRemoveStatus] = useState('');
  const [isTappyEnabled, setIsTappyEnabled] = useState(false);
  const [bankFilesData, setBankFilesData] = useState({
    orignialUrl: "",
    thumbUrl: "",
    fileExtension: ""
  })
  const [paymentRes, setPaymentRes] = useState({
    otpReference: '',
    stcPayPmtReference: '',
  })
  const { sendAlert } = useAlert();

  async function fetchCartProducts() {
    try {
      const response = await  getAllCartProducts();
      setCartData(response.data.data);
    } catch (error) {
      Promise.reject(error);
    }
  }

  async function deleteCartProduct(id: number) {
    setRemoveStatus(LOADING)
    try {
      await  deleteProductFromCart(id);
      setRemoveStatus(SUCCESS)
      fetchCartProducts()
    } catch (error) {
      setRemoveStatus(ERROR)
      Promise.reject(error);
    }
  }

  async function checkTabby() {
    try {
      const subtotal = cartData.reduce((total, currentValue) => total = total + (currentValue.subTotal || 0),0)
      const response = await createPreScoring(subtotal);
      if (response.status === 200) {
        setIsTappyEnabled(true)
      } else {
        setIsTappyEnabled(false)
      }
    } catch(error) {
        setIsTappyEnabled(false)
        Promise.reject(error);
    }
  }
  
  async function fetchShipmentsProviders(id:number) {
    try {
     const response = await  getAllProviders(id);
     setShipmentData(response.data.data.shipmentsProviders)
    } catch(error) {
      Promise.reject(error);
    }
  }

  async function fetchPaymentProviders(id:number) {
    try {
      checkTabby()
      const response = await getAllProviders(id);
      setPaymnetData(response.data.data.paymentProviders)
    } catch(error) {
      Promise.reject(error);
    }
  }

  async function fetchOrderDetails(id: number | string | string[]) {
    try {
     const response = await  getOrder(id);
     setOrderData(response.data.data)
    } catch(error) {
      Promise.reject(error);
    }
  }

  async function createOrderTrigger() {
    setCreateOrderStatus(LOADING)
    try {
      const response = await createOrder(checkoutData);
      setCreateOrderStatus(SUCCESS)
      setOrderAndInvoice(response.data.data);
      sendAlert(response.data?.message, SUCCESS);
      setCheckoutData(initialState);
    } catch(error: any) {
      setCreateOrderStatus(ERROR)
      sendAlert(error.response?.data?.Message, ERROR);
    }
  }

  function updateCheckoutData(name: string, value: any) {
    setCheckoutData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  async function fetchInvoiceDetails(id: number | string | string[]) {
    try {
     const response = await getInvoice(id);
     setInvoiceData(response.data.data)
    } catch(error) {
      Promise.reject(error);
    }
  }

  async function checkCouponCodeValidation(code: string) {
    setIsCodeValid(false)
    try {
      const response = await checkCouponValidation(code);
      if (response.data.isSuccess)
        setIsCodeValid(true)
    } catch(error) {
      setIsCodeValid(false)
    }
  }

  async function createPayment(data: PaymentData) {
    setPaymentStatus(LOADING)
    try {
      const response = await createPaymentGateway(data);
      const result = response.data.data
      if ([1, 2, 4].includes(result.category)) {
        const link = document.createElement("a")
        link.href = result.result
        link.target = "_blank"
        link.click()
        document.removeChild(link)
      }
      setPaymentRes(result.result.directPaymentAuthorizeV4ResponseMessage)
      sendAlert(response.data?.message, SUCCESS);
      setPaymentStatus(SUCCESS)
    } catch(error: any) {
      sendAlert(error.response?.data?.Message, ERROR);
      setPaymentStatus(ERROR)
    }
  }

  async function createStcPayment(data: {otpValue: string, invoiceId: number}) {
    setStcPaymentStatus(LOADING)
    try {
      const response= await stcPaymentConfirmation({
        ...data,
        otpReference: paymentRes.otpReference,
        stcPayPmtReference: paymentRes.stcPayPmtReference
      });
      setStcPaymentStatus(SUCCESS)
      sendAlert(response.data?.message, SUCCESS);
      fetchOrderDetails(orderData.id)
    } catch(error: any) {
      sendAlert(error.response?.data?.Message, ERROR);
      setStcPaymentStatus(ERROR)
    }
  }
  
  async function fetchBankFiles(invoiceId?: number) {
    const response = await getBankFiles(invoiceId || orderData.invoiceId);
    setBankFilesData(response.data.data)
  }

  async function createBankFiles(data: BankFilesData, invoiceId?: number) {
    setBankFilesStatus(LOADING)
    try {
      const response = await uploadBankFiles(data);
      setBankFilesStatus(SUCCESS);
      sendAlert(response.data?.message, SUCCESS);
      fetchBankFiles(invoiceId || orderData.invoiceId)
    } catch(error: any) {
      sendAlert(error.response?.data?.Message, ERROR);
      setBankFilesStatus(ERROR)
    }
  }
  

  

  function clearOrderStatus() {
    setCreateOrderStatus('');
  }

  const state: CartModalState = {
    cartData,
    shipmentData,
    paymnetData,
    orderData,
    checkoutData,
    orderAndInvoice,
    createOrderStatus,
    invoiceData,
    fetchCartProducts,
    fetchShipmentsProviders,
    fetchPaymentProviders,
    fetchOrderDetails,
    updateCheckoutData,
    createOrderTrigger,
    fetchInvoiceDetails,
    clearOrderStatus,
    checkCouponCodeValidation,
    isCodeValid,
    paymentStatus,
    createPayment,
    createStcPayment,
    stcPaymentStatus,
    fetchBankFiles,
    createBankFiles,
    bankFilesStatus,
    bankFilesData,
    deleteCartProduct,
    removeStatus,
    checkTabby,
    isTappyEnabled
  };

  return (
    <CartModalContext.Provider value={state}>
      {children}
    </CartModalContext.Provider>
  );
};

export const useCart = () => useContext(CartModalContext);
