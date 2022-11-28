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

  export {
    redirectTabbyPayment
  }