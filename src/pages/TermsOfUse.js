import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardActions, Button, Typography } from "@mui/material";


const TermsOfUse = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "40vh" }}>
      <Card sx={{ maxWidth: 500, width: "100%", padding: 0, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Condiciones de Uso
          </Typography>
          <Typography variant="body1" paragraph>
            Bienvenido a nuestra aplicación. Al utilizar nuestra plataforma, aceptas cumplir con los siguientes términos y condiciones.
          </Typography>
          <Typography variant="h6">1. Uso adecuado</Typography>
          <Typography variant="body2" paragraph>
            No puedes utilizar nuestra aplicación para actividades ilegales o prohibidas. Nos reservamos el derecho de suspender cuentas que incumplan estas normas.
          </Typography>
          <Typography variant="h6">2. Privacidad</Typography>
          <Typography variant="body2" paragraph>
            Respetamos tu privacidad y protegemos tus datos conforme a nuestra política de privacidad.
          </Typography>
          <Typography variant="h6">3. Responsabilidad</Typography>
          <Typography variant="body2">
            No nos hacemos responsables por daños derivados del uso de nuestra aplicación.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
            Volver
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default TermsOfUse;