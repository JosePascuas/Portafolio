const inputs = document.querySelectorAll(".input");

inputs.forEach( (input) => {
  input.addEventListener("blur", (input) =>{ valida(input.target);
  console.log(input)})
})

function valida(input){
  const tipoDeInput= input.dataset.tipo;

  if (input.validity.valid){
    input.parentElement.classList.remove("input__mensaje__invalido");
    input.parentElement.querySelector(".input__mensaje__error").innerHTML="";

  } else{
    input.parentElement.classList.add("input__mensaje__invalido");
    input.parentElement.querySelector(".input__mensaje__error").innerHTML= mostrarMensajeDeError(tipoDeInput, input);
  }
}

const tipoDeErrores= [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
]

const mensajesDeError= {
  nombre: {
    valueMissing: "Este campo no puede estar vacio",
  },
  email : {
    valueMissing:"Este campo no puede estar vacio",
    typeMismatch:"El correo no es válido",
  },
  contacto :{
    valueMissing: "Este campo no puede estar vacio",
    patternMismatch: "El formato requerido es XXXXXXXXXX 10 números",
  },
  asunto : {
    valueMissing: "Este campo no puede estar vacio",
  },
  mensaje: {
    valueMissing: "Este campo no puede estar vacio",
  },
}

function mostrarMensajeDeError(tipoDeInput, input){
  let mensaje="";
  tipoDeErrores.forEach( (error) =>{
    if(input.validity[error]){
      mensaje=mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje
}



