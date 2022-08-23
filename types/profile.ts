export type wishListData = {
  id: number;
  name: string;
  salePrice: number;
  imagesFilePath?: {
    orignialUrl: string;
    thumbUrl: string;
  };
  type: number;
  category: string;
  attributes: null;
};
export type activeOrderData = {
  id: number;
  fromAddress:string;
  toAddress:string;
  products:string;
  total:number;
  status:number;
  createdAt:string;

}

export type ProfileModalState = {
  fetchWishListData: () => Promise<void>;
  fetchActiveOrderData: () => Promise<void>;
  wishListData: wishListData[];
  activeOrderData:activeOrderData[];
};
