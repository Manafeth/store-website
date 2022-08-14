import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import ArrowRight from "../../../assets/images/icons/arrow-right.png";
import { FC } from "react";
import React from "react";
import Menu from "@mui/material/Menu";
import Link from "next/link";


interface Props {
  data: {
    id: number;
    name: string;
    link: string;
  };
}
const ListMenuItem: FC<Props> = ({ data }) => {
  return (
    <ListItem
      disablePadding
      sx={{
        borderColor: "primary.main",
        width: "70%",
        borderRadius: "8px",
      }}
      key={data.id}
    >
      <ListItemButton disableRipple>
        <ListItemText primary={data.name} sx={{ opacity: 1 }} />        
                  <Link  href={data.link}>
                   <Image src={ArrowRight} alt="Arrow right" />
                  </Link>
             
      </ListItemButton>
    </ListItem>
  );
};

export default ListMenuItem;
