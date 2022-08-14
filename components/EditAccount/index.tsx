import React, { ChangeEvent } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import profileImage from "../../assets/images/icons/placeHolder-icon.png";
import uploadIcon from "../../assets/images/icons/upload-icon.png";
import Image from "next/image";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

const EditAccount = () => {
  function handleInput(ev: ChangeEvent<HTMLInputElement>) {
    // setState((prevState: any) => ({
    //   ...prevState,
    //   [ev.target.name]: ev.target.value,
    // }));
    console.log(ev.target.name);
  }
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
      }}
    >
      <Typography variant="h1" component="h1" sx={{ mb: 5 }}>
        Edit Account
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          gap: "30px",
          mb: 4,
        }}
      >
        <Image src={profileImage} alt="profileimage" width="100" height="100" />
        <Button
          variant="outlined"
          component="label"
          sx={{ fontSize: "14px", color: "grey.2000", fontWeight: "400" }}
          endIcon={<Image src={uploadIcon} alt="upload Iocn" />}
        >
          Upload Photo (Max 1 Mb)
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </Box>
      <Grid container spacing="40px">
        <Grid item xs={6}>
          <InputLabel shrink sx={{ color: "primary.dark", fontWeight: "500" }}>
            First Name
          </InputLabel>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Ahmed"
            name="firstName"
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel shrink sx={{ color: "primary.dark", fontWeight: "500" }}>
            Last Name
          </InputLabel>

          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Mahmoud"
            name="lastName"
          />
        </Grid>
      </Grid>
      <Typography variant="h1" component="h1" sx={{ mb: 3, mt: 3 }}>
        Contact
      </Typography>
      <InputLabel
        shrink
        sx={{ color: "primary.dark", fontWeight: "500", mt: 2 }}
      >
        Email
      </InputLabel>

      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder="mall@example.com"
        name="email"
        sx={{ mb: 3 }}
      />
      <InputLabel shrink sx={{ color: "primary.dark", fontWeight: "500" }}>
        Phone Number
      </InputLabel>

      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder="+966123456789"
        name="phoneNumber"
        sx={{ mb: 3 }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "space-between", sm: "flex-start" },
          pt: 7,
          pb: 5,
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{
            color: "secondary.contrastText",
            width: "92px",
            height: "44px",
            backgroundColor: " background.grayDisabled",
            mr: "20px",
          }}
        >
          Cancel
        </Button>
        <Button variant="contained" sx={{  width: "144px",
            height: "44px",}} type="submit">
          save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default EditAccount;
