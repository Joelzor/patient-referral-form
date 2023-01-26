import React from "react";
import Form from "./Form";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const FormList = () => {
  return (
    // <main className="formlist">
    //   <div className="formlist-heading">
    //     <h2 className="tertiary-heading">Referral Patients</h2>
    //     <p>You can add up to five patients at a time</p>
    //   </div>
    //   <Form />
    // </main>
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
        <Form />
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
          >
            send referrals
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FormList;
