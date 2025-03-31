import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardActions, Button, Typography } from "@mui/material";

const TermsOfUse = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "5px", minHeight: "50vh" }}>
      <Card sx={{ maxWidth: 500, width: "100%", padding: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Términos y Condiciones
          </Typography>

          {/* Sección 11 */}
          <Typography variant="h6">11. Compensaciones ante caída de servicios</Typography>
          <Typography variant="body2" paragraph>
            Si la disponibilidad es menor al 99%, se realizará un descuento proporcional en la facturación del mes siguiente.
          </Typography>

          {/* Sección 12 */}
          <Typography variant="h6">12. Respaldos</Typography>
          <Typography variant="body2" paragraph>
            Se realizan respaldos periódicos de la información del CLIENTE para restauraciones en caso de pérdida de datos.
          </Typography>

          {/* Sección 13 */}
          <Typography variant="h6">13. Almacenamiento de información</Typography>
          <Typography variant="body2" paragraph>
            Taskflow Inventory almacenará la información del CLIENTE durante 3 años desde la fecha de contratación del servicio.
          </Typography>

          {/* Sección 14 */}
          <Typography variant="h6">14. Mal uso de la plataforma</Typography>
          <Typography variant="body2" paragraph>
            Está prohibido realizar acciones que alteren o afecten la operación normal de <b>Taskflow Inventory</b>.
          </Typography>

          {/* Sección 15 */}
          <Typography variant="h6">15. Limitación de garantía y responsabilidad</Typography>
          <Typography variant="body2" paragraph>
            Taskflow Inventory no es responsable por:
            Virus o malware en los dispositivos del CLIENTE.
            Problemas técnicos en la red del CLIENTE.
            Errores en datos ingresados por el CLIENTE.
          </Typography>

          {/* Sección 16 */}
          <Typography variant="h6">16. Propiedad intelectual</Typography>
          <Typography variant="body2" paragraph>
            La plataforma Taskflow Inventory es propiedad de <b>Cuatro R Labs SpA</b>.
          </Typography>

          {/* Sección 17 */}
          <Typography variant="h6">17. Confidencialidad y privacidad</Typography>
          <Typography variant="body2" paragraph>
            Toda la información del CLIENTE será tratada de manera confidencial y no será divulgada a terceros.
          </Typography>

          {/* Sección 18 */}
          <Typography variant="h6">18. Término de contrato</Typography>
          <Typography variant="body2" paragraph>
            Para finalizar el servicio, el CLIENTE debe avisar con 30 días de anticipación al correo contacto@cuatrorlabs.cl.
          </Typography>

          {/* Sección 19 */}
          <Typography variant="h6">19. Jurisdicción y normativa legal</Typography>
          <Typography variant="body2" paragraph>
            Este documento se rige bajo las leyes de la República de Chile.
          </Typography>

          {/* Sección 20 */}
          <Typography variant="h6">20. Domicilio</Typography>
          <Typography variant="body2" paragraph>
            El domicilio de Cuatro R Labs SpA es Gladis 1153, comuna de San Miguel, Región Metropolitana, Chile.
          </Typography>
        </CardContent>

        {/* Botón para volver a TermsUse.js */}
        <CardActions sx={{ justifyContent: "center" }}>
          <Button variant="contained" color="primary" onClick={() => navigate("/TermsOfUse")}>
            Atrás
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default TermsOfUse;
