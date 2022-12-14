import { ProductData } from "./products"
import { PaymentProvidersData } from "./cart"

export type CountryData = {
    code: string,
    countryPrefix: string,
    flag: string,
    id: number,
    name: string,
    nameAr: string,
    nameEn: string,
}

export type StoreInfoData = {
    id?: number,
    name: string,
    mainImageFilePath?: {
        orignialUrl: string,
        thumbUrl: string
    },
    complaintNumber: string,
    supportEmail: string,
    instagram: string,
    facebook: string,
    twitter: string,
    snapchat: string,
    tikTok: string,
    youtube: string,
    linkedin: string,
    telegram: string,
    description: string,
    backgroundColor: string,
    producTitelColor: string,
    priceColor: string,
    buttonColor: string,
    buttonTitelColor: string,
    footerColor: string,
    headerColor: string,
    isTabbyActive: boolean,
    buttonHoverColor: string,
    categoryTitleColor: string,
    sectionTitleColor: string,
    categoryCardColor: string,
    contactUsImagePath: {
        orignialUrl: string,
        thumbUrl: string
    },
    providers: PaymentProvidersData[]
}

export type SlideData = {
    id: number,
    code: string,
    desicrption: string,
    date: string,
    discountValue: number,
    discountType: number,
    mainImageFilePath: {
      orignialUrl: string,
      thumbUrl: string,
    }
}

export type BannerData = {
    titel: string,
    description: string,
    imageFilePath: {
        orignialUrl: string,
        thumbUrl: string
    }
}

export type CommonContextState = {
    storeInfo: StoreInfoData,
    fetchStoreInfo: () => Promise<void>,
    mostPurchasedProducts: ProductData[],
    fetchMostPurchasedProducts: (params: { page: number, pageSize: number, generalSearch: string | string[] | undefined }) => Promise<void>,
    bannerData: BannerData,
    fetchBannerData: () => Promise<void>,
    storeNotFound: boolean
}



export type AlertType = 'error' | 'success' | 'info' | 'warning' | undefined;

export type AlertState = {
  message?: string;
  type?: AlertType;
  sendAlert: (message: string, type: AlertType) => void;
};
