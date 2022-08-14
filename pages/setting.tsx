
import React from "react";
import AcccoutSettingForm from "../components/AccountSettingForm";

import MainLayout from "../layouts/MainLayout";
import SettingLayout from "../layouts/SettingLayout";

const Setting = () => {
  return (
    <MainLayout>
      <SettingLayout>
      <AcccoutSettingForm/>
        </SettingLayout>
    </MainLayout>
  );
};

export default Setting;
