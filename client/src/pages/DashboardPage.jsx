import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function DashboardPage() {
  return (
    <Container sx={{ mt: 8, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Task Manager 🚀
      </Typography>

      <Typography variant="h6" color="text.secondary" gutterBottom>
        Manage your tasks efficiently, one step at a time.
      </Typography>

      <Box mt={4}>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/register"
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
}

export default DashboardPage;
