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
  id?: number
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
    gender: null,
    dateOfBirth: null
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
  updateAddressData: (data:addressDetailsData) => Promise<void>,
  fetchAllCityData:() => Promise<void>,
  fetchAllCountryData:() => Promise<void>,
  triggerCreateAddress: (data:addressDetailsData) => Promise<void>,
  deleteAddressData: (id:number) => Promise<void>,
  fetchCustomerProfileData: () => Promise<void>,
  fetchEmailNotificationData:() => Promise<void>,
  triggerUpdateEmailNotification: (data:emailNotificationData) => Promise<void>,
  updateProfileData: (data: customerData) => Promise<void>,
  wishListData: wishListData[],
  activeOrderData:activeOrderData[],
  archiveedOrderData:activeOrderData[],
  addressData:addressData[],
  addressLoading: boolean,
  updateAddressLoading: boolean,
  updateEmailLoading:boolean,
  addressDetailsData:addressDetailsData,
  cityData: cityData[],
  countryData:countryData[],
  customerData:customerData,
  emailNotificationData:emailNotificationData,
  createStatus: string,
  updateCustomerLoading: boolean,
  updateStatus:string,
}
