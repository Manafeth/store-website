export type ProductCartData = {
    productId: number,
    quantity: number,
    options: number[],
    checkOutAttributes: {
        checkOutAttributeId: number,
        value: string
    }[]
}

export type productData = {
    id:number,
    nameEn:string,
    nameAr:string,
    salePrice:number,
    quantity: number,
    maxQuantity: number,
    productId:number,
    total: number,
    subTotal:number,
    checkoutAttributsTotal:number,
    mainImageFilePath?: {
    orignialUrl: string,
    thumbUrl: string,
    },
    checkOutAttributes: [],
    attributes: null
}

export type shipmentsProvidersData = {
    id:number,
    name:string,
    imageFilePath?: {
        orignialUrl: string,
        thumbUrl: string,
        },
}

export type paymentProvidersData = {
    id:number,
    name:string,
    providerCategory:number,
    imageFilePath?: {
        orignialUrl: string,
        thumbUrl: string,
        },
}

export type orderChangeLogsData = {
    id:number,
    new:number,
    changeAt:string,
}

export type OrderData = {
    id:number,
    invoiceId:number,
    orderDate:string,
    phoneNumber:string,
    paymentProvider:string,
    paymentStatus:number,
    status:number,
    shipmentProviderImage?: {
        orignialUrl: string,
        thumbUrl: string,
        },
    orderChangeLogs:orderChangeLogsData[]
}

export type CheckoutData = {
    shipmentProviderId: number,
    paymentProviderId: number,
    couponCode: string,
    addressId: number,
    type: number
}

export type CartModalState = {
    fetchCartProducts: () => Promise<void>,
    fetchShipmentsProviders:(id:number) => Promise<void>,
    fetchPaymentProviders: (id:number) => Promise<void>,
    fetchOrderDetails: (id:number) => Promise<void>,
    cartData: productData[],
    shipmentData: shipmentsProvidersData[],
    paymnetData: paymentProvidersData[],
    orderData: OrderData,
    updateCheckoutData: (_:string, v: any) => void,
    createOrderTrigger: () => Promise<void>,
    checkoutData: CheckoutData,
    orderAndInvoice: {
        orderId: number,
        invoiceId: number
    }
  }