const focoEnCampos = ()=> {
    const campos = document.querySelectorAll("input")
    for (let campo of campos) {
        if (campo.type != "submit") {
            campo.addEventListener("focus", ()=> campo.className = "fondo-inputs")
            campo.addEventListener("blur", ()=> campo.className = "")
        }
    }
}

submit.addEventListener("mousemove", ()=> {
    submit.title = "Complete los datos antes de ENVIAR"
})

document.addEventListener("submit", (e)=>{
    e.preventDefault()
    alert("Gracias por suscribirte al Newsletter")
})

inputNombre.addEventListener("keyup", (event)=> {
    datosDeInput = event.target.value
    console.log(datosDeInput)
})

inputNombre.addEventListener("keypress", (event)=> {
    if (event.key = "tab") {
        console.log("PresionĂ³ la tecla tab desde", event.target.id)
    }
})

focoEnCampos()