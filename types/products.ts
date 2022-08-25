export type ProductData =  {
    id: number,
    name: string,
    salePrice: number,
    quantity: number,
    category: string,
    priceAfterDiscount: number,
    shortDescription: string,
    description: string | null,
    pageTitle: string | null,
    metaDescription: string | null,
    isInWishList: boolean,
    mainImageFilePath?: {
      orignialUrl: string,
      thumbUrl: string,
    },
    imagesFilePath: {
      orignialUrl: string,
      thumbUrl: string,
    }[],
    attributes: [],
    checkOutAttributes: [],
    subProducts: []
}