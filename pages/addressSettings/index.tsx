
import React, { ChangeEvent, useEffect, useState } from "react";
import AcccoutSettingForm from "../../components/AccountSettingForm";
import { useProfileModal } from "../../contexts/ProfileContext";
import MainLayout from "../../layouts/MainLayout";
import ProfileLayout from "../../layouts/ProfileLayout";


const Setting = () => {
  const { fetchEmailNotificationData,  emailNotificationData} = useProfileModal();
  useEffect(() => {
    fetchEmailNotificationData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainLayout>
      <ProfileLayout>
        <AcccoutSettingForm 
        emailNotificationData ={emailNotificationData}/>
      </ProfileLayout>
    </MainLayout>
  );
};

export default Setting;
