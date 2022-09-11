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
    supportEmail: string
}

export type CommonContextState = {
    storeInfo: StoreInfoData,
    fetchStoreInfo: () => Promise<void>
}


export type AlertType = 'error' | 'success' | 'info' | 'warning' | undefined;

export type AlertState = {
  message?: string;
  type?: AlertType;
  sendAlert: (message: string, type: AlertType) => void;
};
