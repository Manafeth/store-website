
import React from "react";
import AcccoutSettingForm from "../../components/AccountSettingForm";
import MainLayout from "../../layouts/MainLayout";
import ProfileLayout from "../../layouts/ProfileLayout";

const Setting = () => {
  return (
    <MainLayout>
      <ProfileLayout>
        <AcccoutSettingForm/>
      </ProfileLayout>
    </MainLayout>
  );
};

export default Setting;
