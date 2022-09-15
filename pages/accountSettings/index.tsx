import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
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
   const [state, setState] = useState<customerData>(initialState);
     // eslint-disable-next-line react-hooks/rules-of-hooks
   const [isSubmitted, setIsSubmitted] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { fetchCustomerProfileData, customerData,updateProfileData,updateStatus } = useProfileModal();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchCustomerProfileData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function isFormValid() {
    return (
      state.fullName
      && state.email
      && state.phoneNumber
      && state.countryId
    );
  }
  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if(isFormValid()) {
      const payload = {
        ...state,
      }
      updateProfileData(payload).then(()=>{
        setState((prevState) => ({
            ...prevState,
            image: null
        }));
      }).catch(()=>{
      })
    } else {
      setIsSubmitted(true);
    }
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
          isSubmitted={isSubmitted}
        />
      </ProfileLayout>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(locale && await serverSideTranslations(locale, ['settings', 'common', 'cart', 'auth']))
    },
    revalidate: 10,
  }
}

export default settingAccount 
