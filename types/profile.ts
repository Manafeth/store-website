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

export type ProfileModalState = {
  fetchWishListData: () => Promise<void>;
  wishListData: wishListData[];
};
