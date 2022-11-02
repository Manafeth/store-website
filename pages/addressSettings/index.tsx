
import React, { useEffect } from "react";
import AcccoutSettingForm from "../../components/AccountSettingForm";
import { LOADING } from "../../constants";
import { useProfile } from "../../contexts/ProfileContext";
import MainLayout from "../../layouts/MainLayout";
import ProfileLayout from "../../layouts/ProfileLayout";


const Setting = () => {
  const { fetchEmailNotificationData,  emailNotificationData,createStatus} = useProfile();
  useEffect(() => {
    fetchEmailNotificationData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainLayout>
      <ProfileLayout>
        <AcccoutSettingForm 
          emailNotificationData ={emailNotificationData}
          loading={createStatus === LOADING}
        />
      </ProfileLayout>
    </MainLayout>
  );
};

export default Setting;
