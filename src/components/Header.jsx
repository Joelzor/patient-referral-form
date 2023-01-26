import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Header = () => {
  return (
    // <header className="header">
    //   <h1 className="primary-heading">Patient Referral Form</h1>
    //   <h2 className="secondary-heading">Hayes Valley Health San Francisco</h2>
    // </header>
    <Box
      sx={{
        width: "100vw",
        height: 140,
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: 140 }}
      >
        <Typography variant="h5" component="h1" fontSize="26px">
          Patient Referral Form
        </Typography>
        <Typography variant="h6" fontSize="24px">
          Hayes Valley Health San Francisco
        </Typography>
      </Grid>
    </Box>
  );
};

export default Header;
