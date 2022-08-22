
import React from "react";
import AcccoutSettingForm from "../../components/AccountSettingForm";
import AddressManagment from "../../components/Address Managment";

import MainLayout from "../../layouts/MainLayout";
import ProfileLayout from "../../layouts/ProfileLayout";

const Setting = () => {
  return (
    <MainLayout>
      <ProfileLayout>
        <AcccoutSettingForm/>
        {/* <AddressManagment/> */}
      </ProfileLayout>
    </MainLayout>
  );
};

export default Setting;
