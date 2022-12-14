const paths = {
  notificationsSettings: '/notificationsSettings',
  editAccount: '/accountSettings',
  whishList: '/wishList',
  profileOrders: '/orders',
  categories: '/categories',
  home: '/',
  contactUs: '/contactUs',
  checkout:'/checkout',
  termsOfUse:'/termsOfUse',
  privacyPolicy:'/privacyPolicy',
  refundPolicy:'/refundPolicy',
  products: '/products',
  productDetails: (id: string | number) => `/products/${id}`,
  categoryDetails: (id: string | number) => `/categories/${id}`,
  orderDetails: (id: string | number) => `/orders/${id}`,
  invoiceDetails: (id: string | number) => `/invoice/${id}`,
  addressesManagement: '/addressManagment'
};
  

export default paths;
