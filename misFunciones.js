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
     * Esta funcion muestra un div con un mensaje en caso de que el input este vacío cuando se presiona el boton enviar
     * @method form_cont_error
     * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
     * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
     * @return Valor que retorna
     */
   ```

function form_cont_error(nombre){
  let v = document.getElementById("cont_error");
  var nombre = document.getElementById("cont_nombre_apellido");
  if (nombre===null || nombre=="" ){
   v.style.display = "block";
   }else{
     v.style.display = "none";
  }
}


```/**
     * Esta funcion muestra un div con un mensaje tipo modal o pop up, que agradece al usuario cuando apreta el boton de donar
     * @method mostrar_modal
     * @return Valor que retorna
     */
   ```

function mostrar_modal(){
let m = document.getElementById("modal_donar");
if (m.style.display ==="none"){
    m.style.display = "block";
}    else {
    m.style.display = "none";
}
}
