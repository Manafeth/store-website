import React, { useEffect } from 'react'
import EditAccount from '../../components/EditAccount'
import { useProfileModal } from '../../contexts/ProfileContext'
import MainLayout from '../../layouts/MainLayout'
import ProfileLayout from '../../layouts/ProfileLayout'

const settingAccount = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { fetchCustomerProfileData, customerData } = useProfileModal();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchCustomerProfileData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MainLayout>
      <ProfileLayout>
        <EditAccount customerData={customerData} />
      </ProfileLayout>
    </MainLayout>
  )
}

export default settingAccount 
