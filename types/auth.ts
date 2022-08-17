export type CodeData = {
    'field-1': string;
    'field-2': string;
    'field-3': string;
    'field-4': string;
}

export type LoginData = {
    phoneNumber: string,
    countryId: number,
    notificationInfo?: {
        deviceID: string,
        type: 1,
        deviceToken: string
    }
};


export type VerifyOtpData = {
    phoneNumber: string,
    countryId: number,
    otp: string,
}

export type ProfileData = {
    fullName: string,
    email: string,
    image?: File | null,
    mainImageFilePath?: {
        orignialUrl: string,
        thumbUrl: string,
    },
}

export type AuthModalState = {
    openAuthModal: boolean,
    sendPhoneNumber: (data: LoginData) => Promise<void>,
    verifyPhoneNumber: (data: VerifyOtpData) => Promise<void>,
    fetchAccountData: () => Promise<void>,
    updateAccountData: (data: ProfileData) => Promise<void>,
    handleOpenAuthModal: () => void,
    handleCloseAuthModal: () => void,
    profileData: ProfileData,
    loginLoading: boolean,
    verifyLoading: boolean,
    updateProfileLoading: boolean,
    logout: () => void,
    isloggedIn: boolean
}
