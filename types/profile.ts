export type AttributesOptionData = {
  id?: number,
  name: string | null,
}
export type AttributesData = {
  id?: number,
  name: string | null,
  nameEn: string | null,
  nameAr: string | null,
  options: AttributesOptionData[],
  type: number
}
export type wishListData = {
  id: number,
  name: string,
  salePrice: number,
  isInWishList: boolean,
  imagesFilePath?: {
    orignialUrl: string,
    thumbUrl: string,
  },
  type: number,
  category: string,
  attributes: AttributesData[],
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
export type AddressData = {
  id?:number,
  type:number,
  address:string,
  cityId:number,
  street: string,
  latitude: number,
  longitude: number,
  countryId?: number,
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

export type customerData = {
  imageFilePath?:{
    orignialUrl: string,
    thumbUrl: string,
  },
  imageFile?: File|null,
    fullName: string,
    email: string,
    countryId: number,
    phoneNumber: string,
    countryForLocationId: null,
    cityId: null,
    gender: null | number,
    dateOfBirth: null,
  }

  export type emailNotificationData = {
    reminderEmail: boolean,
    reminderPush: boolean,
    activityEmail: boolean,
    activityPush: boolean
  }

export type ProfileModalState = {
  fetchWishListData: () => Promise<void>,
  fetchActiveOrderData: () => Promise<void>,
  fetchArchiveedOrderData:() => Promise<void>,
  fetchAllAddressData:() => Promise<void>,
  updateAddressData: (data:AddressData) => Promise<void>,
  fetchAllCityData:(params?: { page?: number; pageSize?: number; searchKey?: string; countryId?: number }) => Promise<void>,
  fetchAllCountryData:() => Promise<void>,
  triggerCreateAddress: (data:AddressData) => Promise<void>,
  deleteAddressData: (id:number) => Promise<void>,
  getAddressDetails:(id:number) => Promise<void>,
  fetchCustomerProfileData: () => Promise<void>,
  fetchEmailNotificationData:() => Promise<void>,
  triggerUpdateEmailNotification: (data:emailNotificationData) => Promise<void>,
  updateProfileData: (data: customerData) => Promise<void>,
  clearCitiesStatus: () => void,
  wishListData: wishListData[],
  activeOrderData:activeOrderData[],
  archiveedOrderData:activeOrderData[],
  addressData:AddressData[],
  cityData: cityData[],
  countryData:countryData[],
  customerData:customerData,
  addressDetails:AddressData,
  emailNotificationData:emailNotificationData,
  createStatus: string,
  updateStatus:string,
  createAddressStatus:string,
  removeStatus:string,
  updateAddressStatus:string,
  status:string,
  hasMoreCities: boolean,
  citiesStatus: string
}
