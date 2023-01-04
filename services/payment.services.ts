import { axiosInstance } from "./axiosInstance";


function redirectTabbyPayment(payment_id: string | string[]) {
    return axiosInstance.get(
      'Tabby/RedirectTabbyPayment',
      {
        params:{
       payment_id
        },
      }
    );
  }
  function redirectTabbySuccessfullPayment(payment_id: string | string[]) {
    return axiosInstance.get(
      'Tabby/RedirectSuccessfullPayment',
      {
        params:{
       payment_id
        },
      }
    );
  }

  function redirectSuccessfullMobilePayment(payment_id: string | string[]) {
    return axiosInstance.get(
      'Tabby/RedirectSuccessfullMobilePayment',
      {
        params:{
       payment_id
        },
      }
    );
  }



  export {
    redirectTabbyPayment,
    redirectTabbySuccessfullPayment,
    redirectSuccessfullMobilePayment
  }