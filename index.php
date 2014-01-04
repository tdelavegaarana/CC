<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="keywords" content="clínica colindres, clínica laredo, clínica cantabria, depilación láser colindres, depilación láser laredo, depilación láser cantabria, ecografí­as colindres, ecografías laredo, ecografías cantabria, ginecologí­a colindres, ginecología laredo, ginecología cantabria, pediatrí­a colindres, pediatría laredo, pediatría cantabria, psicologa colindres, psicologa laredo, psicologa cantabria, ginecólogo colindres, ginecólogo laredo, ginecólogo cantabria, ginecóloga colindres, ginecóloga laredo, ginecóloga cantabria, pediatra colindres, pediatra laredo, pediatra cantabria"/>
  <meta name="description" content="Clínica de ginecología, pediatría, psicología, medicina estética y depilación láser.">
  <meta name="author" content="Tomás de la Vega Arana">
  <title>CLÍNICA COLINDRES</title>
  <!--Google Maps-->
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAH73ciWC7HpP-xDsH6UeUVHWqHIle7QZc&sensor=false"></script>
  <!--Google Fonts-->
  <link href="http://fonts.googleapis.com/css?family=Junge" rel="stylesheet" type="text/css">
  <!---->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/menu.css">
  <link rel="stylesheet" href="css/normalize.css">
  <!--FICHEROS JS-->
  <script type="text/javascript" src="js/js.js"></script>
  <!--CSS JQUERY-UI, (ACCORDION)-->
  <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
  <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
  <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
</head>
<body onload="init()">
  <div id="contenedor">
    <div id="container">
      <img id="cabecera" src="images/cabecera.jpg" alt="Foto cabecera">
    </div>
    <nav id="menuSuperior">
      <!--LLAMAR FICHERO MENU PHP-->
      <?php include("php/menu.php") ?>
    </nav>
    <div id="contenido">
      <!--LLamar fichero inicio PHP-->
    </div>
    <div id="barraLateral">
      <div class="contacto">
        <h3><span class="verde">CONTACTO</span></h3>
        <p><strong><span class="morado">Teléfono: </span></strong>942 651 848<br><strong><span class="morado">email: </span></strong>info@clinicacolindres.es</p>
        <h3><span class="verde">HORARIO</span></h3>
        <p>Horario de Lunes a Viernes</p>
        <p><span class="morado">De 10:00h a 13:30h y de 16:00h a 20:30h</span></p>
        <h3><span class="verde">DIRECCIÓN</span></h3>
        <p>Plaza San Ginés nº 1.<br>Colindres (Cantabria)</p>
        <div id="googleMap"></div>
      </div>
      </div>
    <footer id="pie"></footer>
  </div>
</body>
</html>