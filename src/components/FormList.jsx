import React from "react";
import { useState } from "react";
import Form from "./Form";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { setRef } from "@mui/material";

const referralData = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  contactLanguage: "",
  phone: "",
  email: "",
  address: "",
  notes: "",
};

const FormList = () => {
  const [referral, setReferral] = useState(referralData);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(referral);
    setReferral(referralData);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#cde7ed",
      }}
    >
      <Container>
        <Box padding="26px">
          <Typography sx={{ textAlign: "center", fontSize: "24px" }}>
            Referral Patients
          </Typography>
          <Typography sx={{ textAlign: "center", fontSize: "20px" }}>
            You can add up to five patients at a time
          </Typography>
        </Box>
        <Form referral={referral} setReferral={setReferral} />
        <Box textAlign="center">
          <Button sx={{ color: "#0B2B5B" }}>+ add another patient</Button>
        </Box>
        <Box textAlign="center" padding="32px">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0B2B5B",
              width: "780px",
              height: "48px",
              borderRadius: "16px",
              fontSize: "14px",
            }}
            onClick={handleSubmit}
          >
            send referrals
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FormList;
