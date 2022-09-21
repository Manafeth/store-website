import { ProductData } from "./products"

export type ProductCartData = {
    productId: number,
    quantity: number,
    options: number[],
    checkOutAttributes: {
        checkOutAttributeId: number,
        value: string
    }[]
}

export type ShipmentsProvidersData = {
    id:number,
    name:string,
    imageFilePath?: {
        orignialUrl: string,
        thumbUrl: string,
        },
}

export type PaymentProvidersData = {
    id:number,
    name:string,
    providerCategory:number,
    imageFilePath?: {
        orignialUrl: string,
        thumbUrl: string,
        },
}

export type OrderChangeLogsData = {
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
    orderChangeLogs: OrderChangeLogsData[]
}

export type CheckoutData = {
    shipmentProviderId: number,
    paymentProviderId: number,
    couponCode: string,
    addressId: number,
    type: number
}
export type InvoiceItems= {
    id: number,
    itemId: number,
    item: string,
    unitPrice: number,
    quantity: number,
    total: number,
}
export type InvocieData = {
    id:number,
    createAt: string,
    date: string,
    total: number,
    vatPercentage: number,
    discount: number,
    netValue: number,
    account?: {
        id:number,
        title:string
    }
    invoiceItems:InvoiceItems[],
}

export type CartModalState = {
    fetchCartProducts: () => Promise<void>,
    fetchShipmentsProviders:(id:number) => Promise<void>,
    fetchPaymentProviders: (id:number) => Promise<void>,
    fetchOrderDetails: (id: number | string | string[]) => Promise<void>,
    fetchInvoiceDetails: (id: number | string | string[]) => Promise<void>,
    cartData: ProductData[],
    shipmentData: ShipmentsProvidersData[],
    paymnetData: PaymentProvidersData[],
    orderData: OrderData,
    updateCheckoutData: (_:string, v: any) => void,
    createOrderTrigger: () => Promise<void>,
    checkoutData: CheckoutData,
    orderAndInvoice: {
        orderId: number,
        invoiceId: number
    }
    createOrderStatus:string,
    invoiceData:InvocieData,
    clearOrderStatus: () => void,
    checkCouponCodeValidation: (_: string) => Promise<void>,
    isCodeValid: boolean
}