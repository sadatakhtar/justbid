import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <Box>
      <Typography variant="h2">Dashboard</Typography>
      <Box sx={{ margin: "10px" }}>
        <Button
          onClick={handleLogout}
          sx={{ margin: "10px" }}
          variant="contained"
          color="primary"
        >
          Logout
        </Button>
        <Button onClick={handleLogout} variant="contained" color="primary">
          Back
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
