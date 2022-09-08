import React, { FormEvent, useEffect, useState } from 'react'
import EditAccount from '../../components/EditAccount'
import { LOADING } from '../../constants'
import { useProfileModal } from '../../contexts/ProfileContext'
import MainLayout from '../../layouts/MainLayout'
import ProfileLayout from '../../layouts/ProfileLayout'
import { customerData } from '../../types/profile'

const settingAccount = () => {
  const initialState = {
    imageFile: null,
    fullName: '',
    email: '',
    countryId: 0,
    phoneNumber:'',
    countryForLocationId: null,
    cityId: null,
    gender: null,
    dateOfBirth: null
  
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { fetchCustomerProfileData, customerData,updateProfileData,updateStatus } = useProfileModal();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setState] = useState<customerData>(initialState);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchCustomerProfileData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    updateProfileData(state).then(()=>{
      setState((prevState) => ({
          ...prevState,
          image: null
      }));
    }).catch(()=>{

    })
  }
  return (
    <MainLayout>
      <ProfileLayout>
        <EditAccount 
          customerData={customerData}
          handleSubmit={handleSubmit}
          setState={setState}
          state={state}
          loading={updateStatus === LOADING}
        />
      </ProfileLayout>
    </MainLayout>
  )
}

export default settingAccount 
