export type ContantData = {
    content: string,
    type: number
}

export type ContantState = {
    ContantData:ContantData,
    getContentDetails:(type:number) => Promise<void>,
    
}
