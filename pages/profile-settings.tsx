import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import React from "react";
import AcccoutSettingForm from "../components/AccountSettingForm";
import MainLayout from "../layouts/MainLayout";

const profileSettings = () => {
  return (
    <MainLayout>
      <Box>
        <Container>
          <Grid container spacing="40px">
            <Grid item xs={6}>
              test1
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
