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
    mainImageFilePath?: {
    orignialUrl: string,
    thumbUrl: string,
    },
    checkOutAttributes: [],
    attributes: null
}


export type CartModalState = {
    fetchCartProducts: () => Promise<void>,
    cartData:productData[],
  
  }