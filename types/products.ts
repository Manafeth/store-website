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


export type ProductByCategoryParams = {
  categoryId?: number | string | string[],
  priceFrom?: number,
  priceTo?: number,
  options?: number[],
  productStatus?: number,
  generalSearch?: string,
  page?: number,
  pageSize?: number
}


export type ProductAttributesOptionData = {
  id?: number,
  isChecked: boolean,
  name: string | null,
  nameEn: string | null,
  nameAr: string | null,
  productAttributeId: number
}

export type ProductAttributesData = {
  id?: number,
  name: string | null,
  nameEn: string | null,
  nameAr: string | null,
  options: ProductAttributesOptionData[],
  type: number
}