const btn_direccionar= document.querySelectorAll(".btn__direccionar")
const botones_header= document.querySelectorAll(`a [href^="#"]`)
const btn_submit=document.querySelector(".btn__enviar")
.addEventListener("click", (e) => e.preventDefault())
  
const redireccionar = (url) => {
  window.open(url, "_blank") 
}

btn_direccionar.forEach((boton) =>{
  boton.addEventListener("click", () =>{
    const url = boton.getAttribute("data-url");
    redireccionar(url)
  })
})

botones_header.forEach(function(botones){
  botones.addEventListener("click",function(event){
    event.preventDefault();
    let ventana= document.querySelector(this.hash)
    let irAVentana= ventana.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: irAVentana,
      behavior: 'smooth'
    });
  })
})

