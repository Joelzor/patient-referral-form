import React from "react";
import "./Form.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Form = () => {
  return (
    <>
      {/* <section className="form-container">
        <div className="form-header">
          <div className="form-number">
            <p>1</p>
          </div>
          <p>New Referral</p>
        </div>
      </section> */}

      <Box
        sx={{
          width: "780px",
          height: "380px",
          backgroundColor: "#fff",
          margin: "0 auto",
          color: "#3A719B",
        }}
      >
        <Grid container alignItems="center" gap="16px">
          <Box
            sx={{
              height: "64px",
              width: "40px",
              backgroundColor: "#25A575",
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
              1
            </Grid>
          </Box>
          <Typography variant="h5" fontSize="20px" letterSpacing="1px">
            New Referral
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default Form;
