export type CategoryData =  {
    id: number,
    name: string,
    itemsCount: number,
    bannerFilePath?: {
      orignialUrl: string,
      thumbUrl: string,
    },
    imageFilePath?: {
        orignialUrl: string,
        thumbUrl: string,
    }
}