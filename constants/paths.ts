const paths = {
  addressSettings: '/addressSettings',
  editAccount: '/accountSettings',
  whishList: '/wishList',
  profileOrders: '/orders',
  categories: '/categories',
  home: '/',
  contactUs: '/contactUs',
  checkout:'/checkout',
  termsOfUse:'/termsOfUse',
  privacyPolicy:'/privacyPolicy',
  products: '/products',
  productDetails: (id: string | number) => `/products/${id}`,
  categoryDetails: (id: string | number) => `/categories/${id}`,
  orderDetails: (id: string | number) => `/orders/${id}`,
  invoiceDetails: (id: string | number) => `/invoice/${id}`,
};
  

export default paths;
