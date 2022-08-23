import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState, MouseEvent, useEffect } from "react";
import { useProfileModal } from "../../contexts/ProfileModalContext";
import ActiveOrders from "./components/ActiveOrders";
import Tabs from "./components/Tabs/Tabs";

const OrderTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { fetchActiveOrderData, activeOrderData } = useProfileModal();
  const { fetchArchiveedOrderData,  archiveedOrderData } = useProfileModal();
  useEffect(() => {
    fetchActiveOrderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    fetchArchiveedOrderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleTabs(ev: MouseEvent<HTMLButtonElement>) {
    // @ts-ignore
    setActiveTab(+ev.target.value);
  }
  return (
    <Box>
      <Tabs handleTabs={handleTabs} activeTab={activeTab} />
      {activeTab === 1 && (
        <Typography
          sx={{
            fontSize: "13px",
            lineHeight: "16px",
            letterSpacing: "0.2px",
            mb: 2,
          }}
        >
           {activeOrderData?.map((item) => {
            return(
          <ActiveOrders data={item} key={item.id}/>
          );
        })}
        </Typography>
      )}

      {activeTab === 2 && (
        <Typography
          sx={{
            fontSize: "13px",
            lineHeight: "16px",
            letterSpacing: "0.2px",
            mb: 2,
          }}
        >
           {archiveedOrderData?.map((item) => {
            return(
          <ActiveOrders data={item} key={item.id}/>
          );
        })}
        </Typography>
      )}
    </Box>
  );
};

export default OrderTabs;
