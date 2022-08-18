import React from "react";
import MainLayout from "../../../layouts/MainLayout";
import HeroSection from "../../../components/HeroSection";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';

const CategoryDetails = () => {
  return (
    <MainLayout>
      <>
        <HeroSection />
        <Box component="footer" py={12.5}>
          <Container maxWidth={false} sx={{ maxWidth: 1050 }}>
            <Grid container spacing={3} rowSpacing={3.75}>
              <Grid item xs={4}>
                test
              </Grid>
              <Grid item xs={8}>
              <Box sx={{display: 'flex'}}>
              <Typography
                variant='h6'
                component='h1'
                sx={{ mb: 5, fontWeight:'700', color:'text.primary' }}
              >
               Showing all 12 results

              </Typography>
              <Box>
              <Typography
                variant='h6'
                component='h1'
                sx={{ mb: 5, fontWeight:'700', color:'text.primary' }}
              >
               Views:


              </Typography>
              </Box>

              </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>
    </MainLayout>
  );
};

export default CategoryDetails;
