import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { FC, ReactElement  } from "react";
import SideMenuItem from "../../components/SideMenuItem";
interface Props {
    children: ReactElement
}


const SettingLayout: FC<Props> = ({ children }) => {
  return (
      <Box sx={{mt:5}}>
        <Container maxWidth={false} sx={{ maxWidth: 1050 }}>
          <Grid container spacing="40px">
            <Grid item xs={6}>
             <SideMenuItem/>
            </Grid>
            <Grid item xs={6}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </Box>
  );
};

export default SettingLayout;
