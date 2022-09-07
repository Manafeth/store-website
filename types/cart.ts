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


export type CartModalState = {
    fetchCartProducts: () => Promise<void>,
    fetchShipmentsProviders:(id:number) => Promise<void>,
    fetchPaymentProviders:(id:number) => Promise<void>,
    cartData:productData[],
    shipmentData:shipmentsProvidersData[],
    paymnetData:paymentProvidersData[],
  
  }