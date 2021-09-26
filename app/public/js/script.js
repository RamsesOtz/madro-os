/*///////////////////////LOGIN Y REGISTER///////////////////////*/
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

let entrar = false;

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");

  if(entrar){
    parrafo.innerHTML = "";
  }

  nombre.value = "";
  email.value = "";
  pass.value = "";
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");

  if(entrar){
    par.innerHTML = "";
  }

  nombreUs.value = "";
  passw.value = "";
});

/*obtenemos los valores que esten dentro de los campos de formRegister*/
const formRegister = document.getElementById('formRegister');
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const parrafo = document.getElementById('warnings');

const formLogin = document.getElementById('formLogin');
const nombreUs = document.getElementById('username');
const passw = document.getElementById('password');
const par = document.getElementById('warning');

//validacion Form Registrar
formRegister.addEventListener("submit", registerUser => {
  registerUser.preventDefault()
  let warnings = "";
  let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  parrafo.innerHTML = "";
  //validacion nombre
  if(nombre.value.length <=0){
    warnings += `* Debes asignar un Nombre de usuario. <br>`
    entrar = true;
  }else if(nombre.value.length <=5){
    warnings += `* Nombre de usuario muy corto. <br>`
    entrar = true;
  }
  
  //validacion correo
  console.log(regexEmail.test(email.value))
  if(!regexEmail.test(email.value)){
    warnings += `* Correo elelctronico no valido. <br>`
    entrar = true;
  }

  //validacion contraseña
  if(pass.value.length <=0){
    warnings += `* Debes asignar una contraseña. <br>`
    entrar = true;
  }else if(pass.value.length <=5){
    warnings += `* Contraseña muy corta. <br>`
    entrar = true;
  }

  //parrafo
  if(entrar){
    parrafo.innerHTML = warnings
  }else{
    //alert("Enviado");
  }

});

//validacion Form Login
formLogin.addEventListener("submit", e => {
  e.preventDefault()
  let warnings = "";
  par.innerHTML = "";
  //validacion nombre
  if(nombreUs.value.length <=0){
    warnings += `* Debes colocar tu Nombre de usuario. <br>`
    entrar = true;
  }else if(nombreUs.value.length <=5){
    warnings += `* Nombre de usuario muy corto. <br>`
    entrar = true;
  }

  //validacion contraseña
  if(passw.value.length <=0){
    warnings += `* Colocar tu contraseña ya existente. <br>`
    entrar = true;
  }else if(passw.value.length <=5){
    warnings += `* Contraseña muy corta. <br>`
    entrar = true;
  }

  //parrafo
  if(entrar){
    par.innerHTML = warnings
  }else{
   // alert("Correcto");
  }
});

/*///////////////////////LOGIN Y REGISTER///////////////////////*/
  /*
  detalleC = document.getElementById('Detalles').innerHTML += 

  '<div class="modal-container">'
   +    '<div class="modal modal-close">'
        +    '<div class="ptxt close">X'+'</div>'
         +   '<div class="headerr">'
            +    '<div href="#" class="ats LogoDetalle">'
              +      '<img src="img/LogoMadroñoDetalle.png">'
              +  '</div>'
          +  '</div>'
            
          +  '<div class="scrol">'
              +  '<div class="contentDetalle">'
                  +  '<div class="imgB">'
                      +  '<img src="img/teni.png" height="50%" width="50%" alt="">'
                  +  '</div>'
                  +  '<div class="t">'
                       + '<div class="h2txt">Nombre'+'</div>'
                      +  '<div class="ptxt">' +
                          +  'sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.'
                           +  'sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.'
                      +  '</div>'
                  +  '</div>'
                  +  '<div class="t">'
                      +  '<div class="h2txt">Nombre'+'</div>'
                      +  '<div class="ptxt">'
                          +  'sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.'
                          +  'sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.'
                      +  '</div>'
                  +  '</div>'
                  +  '<div class="t">'
                      +  '<div class="h2txt">Nombre'+'</div>'
                      +  '<div class="ptxt">'
                        +    'sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.'
                         +   'sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.'
                      +  '</div>'
                  +  '</div>'
              +  '</div>'
          +  '</div>'

      +  '</div><!---->'
  +  '</div>';*/
/*///////////////////////API PARA CONSULTAR LAS TARJETAS DE MADROÑOS Y DETALLES///////////////////////*/

