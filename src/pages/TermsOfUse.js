import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardActions, Button, Typography } from "@mui/material";

const TermsOfUse = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px", minHeight: "50vh" }}>
      <Card sx={{ maxWidth: 500, width: "100%", padding: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Términos y Condiciones
          </Typography>

          <Typography variant="body1" paragraph>
            El presente documento describe los términos y condiciones relacionados con la utilización del servicio ofrecido por <b>Taskflow Inventory</b> SpA.
          </Typography>

          {/* Sección 1 */}
          <Typography variant="h6">1. Uso adecuado</Typography>
          <Typography variant="body2" paragraph>
            No puedes utilizar nuestra aplicación para actividades ilegales o prohibidas. Nos reservamos el derecho de suspender cuentas que incumplan estas normas.
          </Typography>

          {/* Sección 2 */}
          <Typography variant="h6">2. Privacidad</Typography>
          <Typography variant="body2" paragraph>
            Respetamos tu privacidad y protegemos tus datos conforme a nuestra política de privacidad.
          </Typography>

          {/* Sección 3 */}
          <Typography variant="h6">3. Responsabilidad</Typography>
          <Typography variant="body2" paragraph>
            No nos hacemos responsables por daños derivados del uso de nuestra aplicación.
          </Typography>

          {/* Sección 4 */}
          <Typography variant="h6">4. Modificaciones del acuerdo</Typography>
          <Typography variant="body2" paragraph>
            <b>Taskflow Inventory</b> podrá modificar estos términos y condiciones, notificando los cambios por sus canales oficiales.
          </Typography>

          {/* Sección 5 */}
          <Typography variant="h6">5. Soporte a clientes</Typography>
          <Typography variant="body2" paragraph>
            Nuestra empresa cuenta con soporte 24/7 vía plataforma de tickets y asistencia telefónica en horario laboral.
          </Typography>

          {/* Sección 6 */}
          <Typography variant="h6">6. Disponibilidad del servicio</Typography>
          <Typography variant="body2" paragraph>
            Garantizamos un <b>99% de disponibilidad</b> del servicio. En caso de mantenimiento planificado, notificaremos con 3 días de anticipación.
          </Typography>

          {/* Sección 7 */}
          <Typography variant="h6">7. Seguridad y almacenamiento de datos</Typography>
          <Typography variant="body2" paragraph>
            Los datos del CLIENTE serán almacenados por un período de 3 años desde la fecha de contratación del servicio.
          </Typography>

          {/* Sección 8 */}
          <Typography variant="h6">8. Propiedad intelectual</Typography>
          <Typography variant="body2" paragraph>
            La plataforma y todos sus componentes son propiedad de <b>Taskflow Inventory SpA</b>. Se prohíbe la modificación, copia o reproducción sin autorización.
          </Typography>

          {/* Sección 9 */}
          <Typography variant="h6">9. Término de contrato</Typography>
          <Typography variant="body2" paragraph>
            Para cancelar el servicio, el CLIENTE debe avisar con 30 días de anticipación. En caso de facturas pendientes, estas deben ser pagadas antes de finalizar el servicio.
          </Typography>

          {/* Sección 10 */}
          <Typography variant="h6">10. Jurisdicción y normativa legal</Typography>
          <Typography variant="body2" paragraph>
            Este acuerdo se rige bajo las leyes de la República de Chile. Cualquier disputa será resuelta en los tribunales de Santiago.
          </Typography>
        </CardContent>

        {/* Botón para Volver */}
        <CardActions sx={{ justifyContent: "center" }}>
          <Button variant="contained" color="primary" onClick={() => navigate("/TermsOfUse2")}>
            Siguiente
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default TermsOfUse;
