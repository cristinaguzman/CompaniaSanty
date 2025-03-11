import React, { useState } from "react";
import { TextField, Button, Typography, Box, Card, CardContent, Link } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Correo:", email);
    console.log("Clave:", password);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
      bgcolor="#f4f6f8"
    >
      <Card sx={{ maxWidth: 500, p: 8, boxShadow: 5 }}>
        <CardContent>
          {/* Logo */}
          <Box textAlign="center" mb={2}>
            <img src="https://i.ibb.co/b5pGpmkF/logoazul1.png" alt="Task Flow" width={120} />
          </Box>

          {/* Título */}
          <Typography variant="h6" fontWeight="bold" textAlign="center" gutterBottom>
            Ingresar
          </Typography>

          {/* Formulario */}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Correo Electrónico"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Clave"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Ingresar
            </Button>
          </form>

          {/* Enlace para recuperar contraseña */}
          <Typography variant="body2" textAlign="center" mt={2}>
            <Link href="/forgot-password" underline="none" color="primary">
              ¿Olvidaste tu contraseña?
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;