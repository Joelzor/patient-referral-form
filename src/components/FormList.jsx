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
  const [patients, setPatients] = useState([1]);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    setData([...data, referral]);
    setReferral(referralData);
  };

  const addPatient = () => {
    if (patients.length === 5) return;

    setPatients([...patients, 1]);
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
        {patients.map((item, index) => {
          return (
            <Form
              key={index}
              referral={referral}
              setReferral={setReferral}
              patientNumber={index + 1}
              show={show}
              setShow={setShow}
            />
          );
        })}
        {/* <Form referral={referral} setReferral={setReferral} />; */}
        <Box textAlign="center">
          <Button sx={{ color: "#0B2B5B" }} onClick={addPatient}>
            + add another patient
          </Button>
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
