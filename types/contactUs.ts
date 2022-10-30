export type ContactUsData = {
    name: string,
    email: string,
    message: string,
    storeId: number
}

export type ContactUsState = {
    createLoader: string,
    createContactFunction: (_: ContactUsData) => Promise<void> 
}

