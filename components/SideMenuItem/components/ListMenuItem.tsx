import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import ArrowRight from "../../../assets/images/icons/arrow-right.png";
import { FC } from "react";
import React from "react";
import Menu from "@mui/material/Menu";
import Link from "next/link";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

interface Props {
  data: {
    id: number;
    name: string;
    link: string;
  };
}
const settings = [
  {title: 'Test', link: '/test'},
  {title: 'whishlist', link: '/wishListProduct'},
];

const ListMenuItem: FC<Props> = ({ data }) => {
  const [anchorElStore, setAnchorElStore] = React.useState<null | HTMLElement>(null);

  const handleCloseStoreMenu = () => {
    setAnchorElStore(null);
  };
  const handleOpenStoreMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElStore(event.currentTarget);
  };
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
        <Box onClick={handleOpenStoreMenu}>
          <Image src={ArrowRight} alt="Arrow right" />
        </Box>
        <Menu
                sx={{ mt: '69px' }}
                id="menu-appbar"
                anchorEl={anchorElStore}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElStore)}
                onClose={handleCloseStoreMenu}
              >
                {settings.map(({title, link}) => (
                  <Link key={title} href={link}>
                    <MenuItem  onClick={handleCloseStoreMenu}>
                      <Typography textAlign="center">{title}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
      </ListItemButton>
    </ListItem>
  );
};

export default ListMenuItem;
