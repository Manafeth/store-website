import { axiosInstance } from "./axiosInstance";


function getContent(type: number) {
    return axiosInstance.get(
      'Content/Get',
      {
        params:{
          type
        },
      }
    );
  }

  export {
    getContent
  }