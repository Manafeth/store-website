export type ProductData =  {
    id: number,
    name: string,
    salePrice: number,
    quantity: number,
    category: string,
    priceAfterDiscount: number,
    mainImageFilePath?: {
      orignialUrl: string,
      thumbUrl: string,
    }
}