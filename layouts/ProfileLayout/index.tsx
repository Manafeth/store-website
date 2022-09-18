import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { FC, ReactElement  } from "react";
import AuthComponent from "../../components/AuthComponent";
import SideMenu from "../../components/SideMenu";
interface Props {
    children: ReactElement
}


const SettingLayout: FC<Props> = ({ children }) => {
  return (
    <AuthComponent>
      <Box sx={{mt:5}}>
        <Container maxWidth={false} sx={{ maxWidth: 1050 }}>
          <Grid container spacing="40px">
            <Grid item xs={12} md={6}>
             <SideMenu />
            </Grid>
            <Grid item xs={12} md={6}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </AuthComponent>
  );
};

export default SettingLayout;
