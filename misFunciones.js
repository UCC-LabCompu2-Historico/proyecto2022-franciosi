```/**
     * Descripción de que hace la función
     * @method Nombre de la función
     * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
     * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
     * @return Valor que retorna
     */
   ```



/*---------------------------------------------------------------- VALIDACION DE DATOS FORMULARIO CONTACTO--------------------------------------------------- */

    ```/**
     * Esta funcion muestra un span con un mensaje en caso de que el input este vacío cuando se presiona el boton enviar en CONTACTO
     * @method form_cont_error
     * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
     * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
     * @return Valor que retorna
     */
   ```

function form_cont_error(){
  let inNombreApellido, inEmail, inTel,inMensaje;
  let errorNombre,errorEmail,errorTel,errorMensaje;

  inNombreApellido = document.getElementById("cont_nombre_apellido").value;
  inEmail = document.getElementById("cont_email").value;
  inTel = document.getElementById("cont_telefono").value;
  inMensaje = document.getElementById("cont_mensaje").value;

  errorNombre=document.getElementById("errorNombre");
  errorTel = document.getElementById("error_telefono_contacto");
  errorEmail = document.getElementById("error_email_contacto");
  errorMensaje = document.getElementById("error_mensaje_contacto");

  if(inNombreApellido===""){
      errorNombre.style.display = "block";
  }  else {
      errorNombre.style.display = "none";
  }
    if(inEmail===""){
        errorEmail.style.display = "block";
    }  else {
        errorEmail.style.display = "none";
    }
    if(inTel===""){
        errorTel.style.display = "block";
    }  else {
        errorTel.style.display = "none";
    }
    if(inMensaje===""){
        errorMensaje.style.display = "block";
    }  else {
        errorMensaje.style.display = "none";
    }

}

```/**
     * Esta funcion muestra un span con un mensaje en caso de que el input este vacío cuando se presiona el boton enviar en AYUDANOS
     * @method form_cont_error
     * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
     * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
     * @return Valor que retorna
     */
   ```
function form_ayudanos_error(){
    let raSimple,raMes,ra10,ra50,ra100,ra1000, inNumTar, inCodigo,inNombre,daFecha;
    let errorSimpleMes,errorCantidad,errorNumTar,errorCodigo,errorNombre,errorFecha;

    raSimple = document.getElementById("una_vez").value;
    raMes = document.getElementById("mensual").value;
    ra10 = document.getElementById("cant10").value;
    ra50 = document.getElementById("cant50").value;
    ra100 = document.getElementById("cant100").value;
    ra1000 = document.getElementById("cant1000").value;
    inNumTar = document.getElementById("numero_de_tarjeta").value;
    inCodigo = document.getElementById("codigo_de_seguridad").value;
    inNombre = document.getElementById("nombre_apellido").value;
    daFecha = document.getElementById("vencimiento").value;



    errorNombre=document.getElementById("error_nombre_ayudanos");
    errorSimpleMes = document.getElementById("error_simplemes_ayudanos");
    errorCantidad = document.getElementById("error_cantidad_ayudanos");
    errorNumTar = document.getElementById("error_tarjeta_ayudanos");
    errorCodigo = document.getElementById("error_codigo_ayudanos");
    errorFecha = document.getElementById("error_vencimiento_ayudanos");


    if(inNumTar===""){
        errorNumTar.style.display = "block";
    }  else {
        errorNumTar.style.display = "none";
    }
    if(inCodigo===""){
        errorCodigo.style.display = "block";
    }  else {
        errorCodigo.style.display = "none";
    }
    if(inNombre===""){
        errorNombre.style.display = "block";
    }  else {
        errorNombre.style.display = "none";
    }
}






```/**
     * Esta funcion muestra un mensaje de tipo alert, que agradece al usuario cuando apreta el boton de donar
     * @method mostrar_modal_donar
     */
   ```

function mostrar_modal_donar(){
alert ("¡Gracias por su donación 💚! Con su contribución ayuda a Naturalia a continuar con su trabajo por un mundo mejor 🌎")
}

```/**
     * Esta funcion dibuja un plano cartesiano en donde se podra visualizar un grafico de lineas
     * @method mostrar_modal
     * @return Valor que retorna
     */
   ```

function dibujarEjes(){
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var alturaMax = canvas.height -50;
var anchoMax = canvas.width -50;

//Lineas Horizontales
    ctx.beginPath();
for (var i=80;i<alturaMax;){
    ctx.moveTo(70,i);
    ctx.lineTo(730,i);
    ctx.strokeStyle = "#afafaf";
    ctx.stroke ();
    i=i+70;
}
    ctx.closePath()

//Lineas Verticales
    ctx.beginPath()
for (var i=70;i<anchoMax;){
    ctx.moveTo(i,70);
    ctx.lineTo(i,360);
    ctx.strokeStyle = "#afafaf";
    ctx.stroke ();
    i=i+65;
}


}

```/**
     * Esta funcion muestra un div con un mensaje tipo modal o pop up, que agradece al usuario cuando apreta el boton de donar
     * @method mostrar_modal
     * @return Valor que retorna
     */
   ```

function dibujarGrafico(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    dibujarEjes();

    ctx.beginPath();
    ctx.lineWidth=4;
    ctx.strokeStyle ="#006400FF"
    ctx.moveTo( 200, 200);
    ctx.lineTo(50,20);
    ctx.lineTo(60,40);


    ctx.closePath();

}








