import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { FC } from "react";
import React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useTranslation } from "next-i18next";

interface Props {
  data: {
    id: number;
    name: string;
  };
}
const ListMenuText: FC<Props> = ({ data }) => {
  const [t] = useTranslation();
  const listButton = (
    <ListItem>
      <ListItemIcon>
        <Box
          sx={{
            width: "12px",
            height: "12px",
            backgroundColor: "black",
            borderRadius: "50%",
          }}
        ></Box>
      </ListItemIcon>
      <ListItemText primary={t(data?.name || '')} sx={{fontSize:'18px',color:'grey.800'}}/>
    </ListItem>
  );
  return <Box>{listButton}</Box>;
};

export default ListMenuText;
