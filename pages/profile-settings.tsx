import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import AcccoutSettingForm from "../components/AccountSettingForm";
import SideMenuItem from "../components/SideMenuItem";
import MainLayout from "../layouts/MainLayout";

const profileSettings = () => {
  return (
    <MainLayout>
      <Box sx={{mt:5}}>
        <Container maxWidth={false} sx={{ maxWidth: 1050 }}>
          <Grid container spacing="40px">
            <Grid item xs={6}>
             <SideMenuItem/>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{ mb: 5, fontWeight: "bold" }}
                >
                  Account Setting
                </Typography>
   
            
                  <AcccoutSettingForm/>
               
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </MainLayout>
  );
};

export default profileSettings;
