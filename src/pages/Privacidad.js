import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const Privacidad = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "5px", minHeight: "50vh" }}>
      <Card sx={{ maxWidth: 600, width: "100%", padding: 2, boxShadow: 3 }}>
        <CardContent>
          {/* Título Principal */}
          <Typography variant="h4" gutterBottom>
            Política de Privacidad
          </Typography>

          {/* Introducción */}
          <Typography variant="body1" paragraph>
            <strong>Cuatro R Labs SpA</strong> respeta y protege la privacidad de los usuarios de su plataforma.
            Esta Política de Privacidad describe cómo <strong>Cuatro R Labs SpA</strong> maneja la información de los usuarios.
          </Typography>

          {/* Sección 1 */}
          <Typography variant="h6" gutterBottom>1. Generalidades</Typography>
          <Typography variant="body2" paragraph>
            www.cuatrorlabs.cl es propiedad de la empresa Cuatro Rlabs SpA. (en adelante la empresa), la cual trabaja con los más altos estándares de seguridad y toda la información que los usuarios registran en el Sitio se mantiene de forma estrictamente confidencial.
          </Typography>

          {/* Sección 2 */}
          <Typography variant="h6" gutterBottom>2. Medidas de Seguridad</Typography>
          <Typography variant="body2" paragraph>
            Para cumplir los objetivos de seguridad la empresa cuenta con la tecnología SSL (Secure Sockets Layer) que asegura, tanto la autenticidad del Sitio, como el cifrado de toda la información que nos entrega el usuario. Cada vez que el usuario se registra en el Sitio y entrega información de carácter personal, sin importar el lugar geográfico en donde se encuentre, a efectos de comprar un producto, el navegador por el cual ejecuta el acto se conecta al Sitio a través del protocolo SSL que acredita que el usuario se encuentra efectivamente en el Sitio y en nuestros servidores (lo cual se aprecia con la aparición del código HTTPS en la barra de direcciones del navegador). De esta forma se establece un método de cifrado de la información entregada por el usuario y una clave de sesión única. Esta tecnología permite que la información de carácter personal del usuario, como su nombre, dirección y datos de tarjetas bancarias, sean codificadas antes para que no pueda ser leída cuando viaja a través de Internet. Todos los certificados SSL se crean para un servidor particular, en un dominio específico y para una entidad comercial comprobada.
          </Typography>

          {/* Sección 3 */}
          <Typography variant="h6" gutterBottom>3. Certificaciones</Typography>
          <Typography variant="body2" paragraph>
            <strong>Cuatro R Labs SpA</strong> cuenta con certificado de seguridad SSL Positive para proteger la información de los usuarios.
          </Typography>

          {/* Sección 4 */}
          <Typography variant="h6" gutterBottom>4. Declaración de Privacidad</Typography>
          <Typography variant="body2" paragraph>
            La empresa no comunica ni cede a terceros, bajo ninguna circunstancia, los datos de carácter personal registrados por los usuarios en el Sitio. Sin perjuicio de lo anterior, esta información podrá ser tratada por la empresa y sus asociados, para fines estadísticos y/o para obtener una mejor comprensión de los perfiles de los usuarios y, así, mejorar los productos ofrecidos en el Sitio y para cumplir adecuadamente con el despacho y entrega de los productos en el lugar registrado por los usuarios.
          </Typography>

          {/* Sección 5 */}
          <Typography variant="h6" gutterBottom>5. Información del Usuario</Typography>
          <Typography variant="body2" paragraph>
            Al registrarse en el Sitio se le solicitará al usuario solamente aquella información necesaria para entregar información de productos, agendamiento de reuniones o demostraciones de Software. En ningún caso, esta información será comunicada o transmitida a terceros ajenos a la empresa.
          </Typography>

          {/* Sección 6 */}
          <Typography variant="h6" gutterBottom>6. Comunicaciones Promocionales</Typography>
          <Typography variant="body2" paragraph>
            El usuario autoriza el envío de comunicaciones promocionales o publicitarias enviadas por correo electrónico, sin perjuicio de lo anterior, en cualquier tiempo, el usuario podrá solicitar la suspensión de las mismas, haciendo “click” en el link dispuesto para ello. La empresa puede tardar hasta siete días para procesar esta solicitud.
          </Typography>

          {/* Sección 7 */}
          <Typography variant="h6" gutterBottom>7. Otros sitios web</Typography>
          <Typography variant="body2" paragraph>
            A partir de la navegación en el Sitio el usuario pudiese re direccionarse a otros sitios. La empresa no es responsable de las políticas de privacidad y seguridad de dichos sitios.
          </Typography>

          {/* Sección 8 */}
          <Typography variant="h6" gutterBottom>8. Propiedad de la Información</Typography>
          <Typography variant="body2" paragraph>
            Toda la información del Sitio es propiedad de la empresa, por lo tanto, no se puede modificar, copiar, extraer o utilizar de otra manera sin el consentimiento previo, expreso y por escrito. De esta forma, el usuario que accede al Sitio es consciente que el mal uso de esta información puede derivar en la presentación de acciones legales, civiles y penales.
          </Typography>

          {/* Sección 9 */}
          <Typography variant="h6" gutterBottom>9. Datos Personales</Typography>
          <Typography variant="body2" paragraph>
            El usuario registrado podrá ejercer sus derechos de información, modificación, eliminación, cancelación y/o bloqueo de sus datos personales cuando lo estime pertinente, según lo establecido en la Ley Nº 19.628 sobre Protección de la Vida Privada. La empresa pone a disposición del usuario la dirección de correo electrónico contacto@cuatrorlabs.cl para que éste pueda solicitar la modificación y/o corrección de sus datos personales.
          </Typography>

          {/* Sección 10 */}
          <Typography variant="h6" gutterBottom>10. Cookies y Otras Tecnologías</Typography>
          <Typography variant="body2" paragraph>
            <strong>Cuatro R Labs SpA</strong> utiliza cookies y tecnologías similares para mejorar la experiencia del usuario.
            Puedes configurar tu navegador para bloquear cookies si lo deseas.
          </Typography>

          {/* Sección 11 */}
          <Typography variant="h6" gutterBottom>11. Uso de Cookies por Terceros</Typography>
          <Typography variant="body2" paragraph>
            Reconoces y aceptas expresamente que Cuatro Rlabs SpA podrá utilizar un sistema de seguimiento de conducta mediante la utilización de “cookies”, “web beacons” y/u otras tecnologías similares de seguimiento. Estas tecnologías se utilizan con el fin de conocer los intereses y el comportamiento de quienes visitan o son usuarios de nuestro sitio web y, de esa forma, darles un mejor servicio o proveerles información relacionada.
            También usamos la información obtenida a través de cookies para analizar las páginas navegadas por el visitante o usuario, las búsquedas realizadas, mejorar nuestras iniciativas comerciales y promocionales, mostrar publicidad o promociones, banners de interés, noticias sobre Cuatro Rlabs SpA, perfeccionar nuestra oferta de contenidos y artículos, personalizar dichos contenidos, presentación y servicios, así como promover y hacer cumplir las reglas y seguridad del sitio; también las utilizamos para para que el usuario no tenga que introducir su clave tan frecuentemente durante una sesión de navegación, también para contabilizar y corroborar las inscripciones, la actividad del usuario y otros conceptos para acuerdos comerciales, siempre teniendo como objetivo de la instalación de las cookies, el beneficio del usuario que la recibe, y las cuales no serán usadas con fines ajenos a Cuatro Rlabs SpA. Asimismo, almacenamos cookies para poder ofrecer una experiencia más interactiva en el sitio, basada en las acciones del usuario.
            Sus datos personales obtenidos a través de estas tecnologías no serán transferidos a terceros de una manera diferente a las descritas en esta Declaración de Privacidad. Adicionalmente, se pueden encontrar “cookies” u otros sistemas similares instalados por terceros en ciertas páginas de nuestros Sitios Web o utilizados por anunciantes ajenos a Cuatro Rlabs SpA.
            Esta Declaración de Privacidad cubren la utilización de “cookies” por Cuatro Rlabs SpA y no incluyen el uso de “cookies” instaladas por terceros. Debes saber que la instalación, permanencia y existencia de las cookies en tu computadora o dispositivo depende de tu exclusiva voluntad y pueden ser eliminadas cuando usted así lo desees. Para saber cómo quitar las Cookies del sistema es necesario revisar la sección Ayuda (Help) del navegador. En este sentido, puedes en cualquier momento eliminar las cookies almacenadas, configurar el navegador para que solicite aprobación antes de almacenar cookies o directamente evitar que se almacenen cookies. Este procedimiento se realiza de forma diferente en los distintos navegadores y es necesario realizarlo en cada navegador que utilices.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Privacidad;
