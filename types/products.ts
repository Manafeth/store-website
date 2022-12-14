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

export type checkOutAttributes = {
  descriptionAr: string;
  descriptionEn: string;
  id: number;
  nameAr: string;
  nameEn: string;
  name: string | null,
  price: number;
}

export type ProductData =  {
  id: number,
  productId: number,
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
  attributes: ProductAttributesData[],
  checkOutAttributes: checkOutAttributes[],
  subProducts: {options: number[], mainImageFilePath: { orignialUrl: string, thumbUrl: string}}[],
  total?: number,
  subTotal?: number,
  checkoutAttributsTotal?: number,
  maxQuantity: number
}

export type CartProductData = {
  id: number,
  productId: number,
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
  attributes: ProductAttributesData[],
  checkOutAttributes: {checkOutAttribute: checkOutAttributes, value: string}[],
  subProducts: {options: number[], mainImageFilePath: { orignialUrl: string, thumbUrl: string}}[],
  total?: number,
  subTotal?: number,
  checkoutAttributsTotal?: number,
  maxQuantity: number
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


 export interface Products {
  data: ProductData[],
  totalCount: number,
  totalPages: number,
  page: number,
  pageSize: number,
}

