function init() {
  mapas();
  click_event(0);
}
function mapas() {
  var center = new google.maps.LatLng(43.3949603696751,-3.4535908699035645);
  var mapProp = {
    center: center,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.HYBRID};
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker = new google.maps.Marker({
    position: center,
    animation:google.maps.Animation.BOUNCE
  });
  marker.setMap(map);
}
function quitarFoco(id) {
  elemento = document.getElementById(id);
  elemento.blur();
}
function click_event (argument) {
  // body...
  var url = "";
  switch(argument)
  {
    case 0:
      //Inicio
      url = "php/inicio.php";
    break;
    //case 1:
      //Ginecología y Obstreticia
      //url = "php/ginecologia/ginecologia.php";
    //break;
    case 2:
      //Depilación Láser Médico
      url = "php/dlm/depilacion_laser_medico.php";
    break;
    //case 3:
      //Psicología para adultos
      //url = "php/psicologia/adultos.php";
    //break;
    case 4:
      //Psicología Infanto Juvenil Trastornos de Conducta
      url = "php/psicologia/infanto_juvenil/trastorno_conducta.php";
    break;
    case 5:
      //Psicología Infanto Juvenil Deficit de atención
      url = "php/psicologia/infanto_juvenil/trastorno_deficit_atencion.php";
    break;
    case 6:
      //Psicología Infanto Juvenil Adicción Nuevas Tecnologías
      url = "php/psicologia/infanto_juvenil/adiccion_nuevas_tecnologias.php";
    break;
    case 7:
      //Psicología Infanto Juvenil Trastornos de Ansiedad
      url = "php/psicologia/infanto_juvenil/trastorno_ansiedad.php";
    break;
    case 8:
      //Psicología Infanto Juvenil Trastorno del Estado de Ánimo
      url = "php/psicologia/infanto_juvenil/trastorno_estado_animo.php";
    break;
    case 9:
      //Psicología Infanto Juvenil Trastorno del Control de Esfínteres
      url = "php/psicologia/infanto_juvenil/trastorno_control_esfinteres.php";
    break;
    case 10:
      //Medicina Estética
      url = "php/medicina_estetica/medicina_estetica.php";
    break;
    case 11:
      //Analisis clinicos
      url = "php/ac/analisis_clinicos.php";
    break;
    case 12:
      //Trastornos del Sueño
      url = "php/psicologia/adultos/trastornos_del_sueño.php";
      break;
    case 13:
      //Trastornos de Ansiedad
      url = "php/psicologia/adultos/trastorno_ansiedad.php";
      break;
    case 14:
      //Esquizofrenia y otros trastornos psicóticos
      url = "php/psicologia/adultos/esquizofrenia.php";
      break;
    case 15:
      //Dolor crónico, fibromialgia, estrés, etc.
      url = "php/psicologia/adultos/dolor_cronico.php";
      break;
    case 16:
      //Terapia de pareja y/o sexual
      url = "php/psicologia/adultos/terapia_de_pareja.php";
      break;
    case 17:
      //Trastornos de personalidad/rasgos disfuncionales
      url = "php/adultos/trastornos_de_personalidad.php";
      break;
    case 18:
      url = "php/ginecologia/control_y_seguimiento_embarazo.php";
      break;
    case 19:
      url = "php/ginecologia/ecografias.php";
      break;
    case 20:
      url = "php/ginecologia/analisis_adn.php";
      break;
    case 21:
      url = "php/ginecologia/valoracion_preconcepcional.php";
      break;
    case 22:
      url = "php/ginecologia/anticoncepcion.php";
      break;
    case 23:
      url = "php/ginecologia/menopausia";
      break;
    case 24:
      url = "php/ginecologia/diagnostico_precoz_cancer.php";
      break;
    case 25:
      url = "php/ginecologia/vph.php";
      break;
    case 26:
      url = "php/ginecologia/revision_ginecologica.php";
      break;
  }
  /*
  if(argument === 3 || argument === 1) {
    loadXMLDoc(url, function()
    {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200)
      {
        document.getElementById("contenido").innerHTML = xmlhttp.responseText;
        accordion();
      }
    });
  } else {*/
  loadXMLDoc(url, function()
  {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200)
    {
      document.getElementById("contenido").innerHTML = xmlhttp.responseText;
    }
  });
  //}
  quitarFoco(argument.toString());
}
function loadXMLDoc(url,cfunc) {
  if (window.XMLHttpRequest){
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=cfunc;
  xmlhttp.open("GET",url,true);
  xmlhttp.send();
}
function accordion() {
  $(document).ready(function() {
    $( "#accordion" ).accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });
  });
}
function cvPsico() {
  document.getElementById("contenido").innerHTML = '<iframe class="iframe" src="http://docs.google.com/viewer?url=www.clinicacolindres.es%2Ffiles%2Fcv-psico.pdf&embedded=true"></iframe>';
  quitarFoco("cvp");
}