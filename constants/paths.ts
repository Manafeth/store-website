const paths = {
  addressSettings: '/addressSettings',
  editAccount: '/accountSettings',
  whishList: '/wishList',
  profileOrders: '/orders',
  categories: '/categories',
  home: '/',
  contactUs: '/contactUs',
  checkout:'/checkout',
  productDetails: (id: string | number) => `/products/${id}`,
  categoryDetails: (id: string | number) => `/categories/${id}`,
};
  

export default paths;
