import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState, MouseEvent } from "react";
import ActiveOrders from "../ActiveOrders";
import Tabs from "../Tabs/Tabs";

const OrderTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

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
          <ActiveOrders/>
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
          history
        </Typography>
      )}
    </Box>
  );
};

export default OrderTabs;
