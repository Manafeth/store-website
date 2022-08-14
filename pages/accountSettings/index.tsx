import React from 'react'
import EditAccount from '../../components/EditAccount'
import MainLayout from '../../layouts/MainLayout'
import ProfileLayout from '../../layouts/ProfileLayout'

const settingAccount = () => {
  return (
    <MainLayout>
      <ProfileLayout>
        <EditAccount />
      </ProfileLayout>
    </MainLayout>
  )
}

export default settingAccount 
