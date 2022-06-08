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
     * Esta funcion muestra un span con un mensaje en caso de que el input este vacío cuando se presiona el boton enviar
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








