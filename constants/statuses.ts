export const orderStatusEnums = [
    { label: 'common:new', labelAr: 'جديد', color: 'buttons.blueDarker', value: 1 },
    { label: 'common:underPreparation', labelAr: 'تحت الإعداد', color: 'warning.main', value: 2 },
    { label: 'common:readyForShipping', labelAr: 'جاهز للشحن', color: 'buttons.readyDarker', value: 3 },
    { label: 'common:shipped', labelAr: 'تم الشحن', color: 'buttons.shippedDarker', value: 4 },
    { label: 'common:delivered', labelAr: 'تم توصيل الطلب', color: 'success.main', value: 5 },
    { label: 'common:cancelledByStore', labelAr: 'إلغائها من قبل التاجر', color: 'buttons.cancelledDarker', value: 6 },
    { label: 'common:cancelledByCustomer', labelAr: 'إلغائها من قبل العميل', color: 'buttons.cancelledDarker', value: 7 },
    { label: 'common:autoCancelled', labelAr: 'إلغاء تلقائي', color: 'warning.main', value: 8 },
    { label: 'common:completed', labelAr: 'مكتمل', color: 'primary.main', value: 9 },
];

  export const invoiceStatusEnums = [
    { label: 'common:draft', color: 'buttons.blueDarker', value: 0 },
    { label: 'common:post', color: 'warning.main', value: 1 },
    { label: 'common:paid', color: 'buttons.readyDarker', value: 2 },
  ];

  export const addressTagsEnums = [
    { label: 'common:work', value: 1 },
    { label: 'common:homeLabel', value: 2 },
    { label: 'common:others', value: 3 },
  ];