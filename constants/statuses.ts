export const orderStatusEnums = [
    { label: 'New', labelAr: 'جديد', color: 'orderStatus.new', value: 1 },
    { label: 'UnderPreparation', labelAr: 'تحت الإعداد', color: 'orderStatus.underPreparation', value: 2 },
    { label: 'ReadyForShipping', labelAr: 'جاهز للشحن', color: 'orderStatus.readyForShipping', value: 3 },
    { label: 'Shipped', labelAr: 'تم الشحن', color: 'orderStatus.shipped', value: 4 },
    { label: 'Delivered', labelAr: 'تم توصيل الطلب', color: 'orderStatus.delivered', value: 5 },
    { label: 'CancelledByStore', labelAr: 'إلغائها من قبل التاجر', color: 'orderStatus.cancelledByStore', value: 6 },
    { label: 'CancelledByCustomer', labelAr: 'إلغائها من قبل العميل', color: 'orderStatus.cancelledByCustomer', value: 7 },
    { label: 'AutoCancelled', labelAr: 'إلغاء تلقائي', color: 'orderStatus.autoCancelled', value: 8 },
    { label: 'Completed', labelAr: 'مكتمل', color: 'orderStatus.completed', value: 9 },
  ];

  export const invoiceStatusEnums = [
    { label: 'Draft', labelAr: 'غير مدفوعة', color: 'paymentStatus.draft', value: 0 },
    { label: 'Post', labelAr: 'قيد التنفيذ', color: 'paymentStatus.post', value: 1 },
    { label: 'Paid', labelAr: 'مدفوعة', color: 'paymentStatus.paid', value: 2 },
  ];