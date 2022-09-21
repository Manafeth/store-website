import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState, MouseEvent, useEffect } from "react";
import { useProfile } from "../../contexts/ProfileContext";
import ActiveOrders from "./components/ActiveOrders";
import Tabs from "./components/Tabs/Tabs";

const OrderTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { fetchActiveOrderData, activeOrderData } = useProfile();
  const { fetchArchiveedOrderData,  archiveedOrderData } = useProfile();
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
        <Box
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
        </Box>
      )}

      {activeTab === 2 && (
        <Box
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
        </Box>
      )}
    </Box>
  );
};

export default OrderTabs;
