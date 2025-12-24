import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/authApi";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await registerUser(form);
      // navigate("/login")
    } catch (error) {
      setError(error.response?.data?.message || "Registeration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8}>
        <Typography sx={{ color: "black" }} variant="h4" gutterBottom>
          Register
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            margin="normal"
            value={form.name}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            margin="normal"
            value={form.email}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            margin="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 3 }}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Register;
