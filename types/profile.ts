export type wishListData = {
  id: number,
  name: string,
  salePrice: number,
  imagesFilePath?: {
    orignialUrl: string,
    thumbUrl: string,
  },
  type: number,
  category: string,
  attributes: null,
}
export type activeOrderData = {
  id: number,
  fromAddress:string,
  toAddress:string,
  products:string,
  total:number,
  status:number,
  createdAt:string,
}
export type addressData = {
  id:number,
  type:number,
  address:string,
  cityId:number,
}
export type addressDetailsData = {
  id: number
  cityId: number,
  address: string,
  street: string,
  type: number,
  latitude: number,
  longitude: number,
}
export type cityData = {
  id: number;
  name?: string,
};
export type countryData = {
  id: number,
  name?: string,
  nameEn:string,
  nameAr:string,
  code:string,
  flag:string,
  countryPrefix:string,
};

export type ProfileModalState = {
  fetchWishListData: () => Promise<void>,
  fetchActiveOrderData: () => Promise<void>,
  fetchArchiveedOrderData:() => Promise<void>,
  fetchAllAddressData:() => Promise<void>,
  updateAddressData: (data:addressDetailsData) => Promise<void>,
  fetchAllCityData:() => Promise<void>,
  fetchAllCountryData:() => Promise<void>,
  triggerCreateAddress: (data:addressDetailsData) => Promise<void>,
  wishListData: wishListData[],
  activeOrderData:activeOrderData[],
  archiveedOrderData:activeOrderData[],
  addressData:addressData[],
  addressLoading: boolean,
  addressDetailsData:addressDetailsData,
  cityData: cityData[],
  countryData:countryData[],
}
