
import React from "react";
import AcccoutSettingForm from "../components/AccountSettingForm";
import AddressManagment from "../components/Address Managment";

import MainLayout from "../layouts/MainLayout";
import SettingLayout from "../layouts/SettingLayout";

const Setting = () => {
  return (
    <MainLayout>
      <SettingLayout>
      {/* <AcccoutSettingForm/> */}
      <AddressManagment/>
        </SettingLayout>
    </MainLayout>
  );
};

export default Setting;
