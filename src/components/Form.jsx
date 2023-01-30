import React from "react";
import { useState } from "react";
import "./Form.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CakeIcon from "@mui/icons-material/Cake";
import TranslateIcon from "@mui/icons-material/Translate";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Form = ({ referral, setReferral, patientNumber, show, setShow }) => {
  const [headerColour, setHeaderColour] = useState("#25A575");
  const handleChange = (e) => {
    const { name, value } = e.target;

    setReferral({
      ...referral,
      [name]: value,
    });
  };

  React.useEffect(() => {
    colourHandler();
  }, []);

  const colourHandler = () => {
    if (patientNumber === 2) {
      setHeaderColour("#2595A5");
    }
    if (patientNumber === 3) {
      setHeaderColour("#3A719B");
    }
    if (patientNumber === 4) {
      setHeaderColour("#254B7A");
    }
    if (patientNumber === 5) {
      setHeaderColour("#142B58");
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "780px",
          height: "380px",
          backgroundColor: "#fff",
          margin: "20px auto",
          color: "#3A719B",
        }}
      >
        <Grid container alignItems="center" gap="16px">
          <Box
            sx={{
              height: "64px",
              width: "40px",
              backgroundColor: headerColour,
              color: "#fff",
              fontSize: "26px",
            }}
          >
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              minHeight="64px"
            >
              {patientNumber}
            </Grid>
          </Box>
          <Typography variant="h5" fontSize="20px" letterSpacing="1px">
            New Referral
          </Typography>
        </Grid>
        <Grid
          container
          sx={{ padding: "12px 36px" }}
          columnSpacing="24px"
          rowSpacing="5px"
          component="form"
        >
          <Grid item xs={6}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircleIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                id="input-with-sx"
                label="First Name"
                variant="standard"
                required
                sx={{ width: "100%" }}
                name="firstName"
                value={referral.firstName}
                onChange={handleChange}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircleIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                id="input-with-sx"
                label="Last Name"
                variant="standard"
                required
                sx={{ width: "100%" }}
                name="lastName"
                value={referral.lastName}
                onChange={handleChange}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <CakeIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Date of Birth"
                variant="standard"
                required
                sx={{ width: "100%" }}
                name="dateOfBirth"
                value={referral.dateOfBirth}
                onChange={handleChange}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <TranslateIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Contact Language"
                variant="standard"
                required
                sx={{ width: "100%" }}
                name="contactLanguage"
                value={referral.contactLanguage}
                onChange={handleChange}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <LocalPhoneIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Phone"
                variant="standard"
                required
                sx={{ width: "100%" }}
                name="phone"
                value={referral.phone}
                onChange={handleChange}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Email"
                variant="standard"
                required
                sx={{ width: "100%" }}
                name="email"
                value={referral.email}
                onChange={handleChange}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="standard-basic"
              label="Address"
              variant="standard"
              required
              name="address"
              sx={{ width: "100%" }}
              value={referral.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="standard-basic"
              label="Notes/Reason"
              variant="standard"
              sx={{ width: "100%" }}
              name="notes"
              value={referral.notes}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Form;
