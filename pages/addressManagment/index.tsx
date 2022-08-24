
import React, { FormEvent, useEffect, useState } from "react";
import AddressManagment from "../../components/AddressManagment";
import { useProfileModal } from "../../contexts/ProfileModalContext";
import MainLayout from "../../layouts/MainLayout";
import ProfileLayout from "../../layouts/ProfileLayout";
import Box from '@mui/material/Box';
import { addressDetailsData } from "../../types/profile";


const Setting = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {triggerCreateAddress} = useProfileModal();
  const [accountAddressData, setAccountAddressData] = useState<addressDetailsData>({
    id: 0,
    cityId: 0,
    address: '',
    street: '',
    type: 0,
    latitude:0,
    longitude:0,
})
function isFormValid() {
  return (
    accountAddressData.address
    && accountAddressData.street
    && accountAddressData.cityId
  );
}
 
  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
   console.log('clicked')
//    if (!isFormValid()) {
//     updateAddressData(accountAddressData).then(() => {
//         setIsSubmitted(false);
//         setAccountAddressData((prevState) => ({
//             ...prevState,
//         }));
//     }).catch(() => {
//         setIsSubmitted(false);
//     })
// } else {
//     setIsSubmitted(true)
// }

// triggerCreateAddress(accountAddressData).then(() => {
//   setIsSubmitted(false);
// }).catch(() => {
//   setIsSubmitted(false);
// });
  }
  return (
    <MainLayout>
      <ProfileLayout>
        <Box>
            <AddressManagment 
            handleSubmit={handleSubmit}
            isSubmitted={isSubmitted}
            accountAddressData={accountAddressData}
            setAccountAddressData={ setAccountAddressData} />
          </Box>
      </ProfileLayout>
    </MainLayout>
  );
};



