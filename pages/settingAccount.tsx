import React from 'react'
import EditAccount from '../components/EditAccount'
import MainLayout from '../layouts/MainLayout'
import SettingLayout from '../layouts/SettingLayout'

const settingAccount = () => {
  return (
    <MainLayout>
      <SettingLayout>
     <EditAccount />
        </SettingLayout>
    </MainLayout>
  )
}

export default settingAccount 
