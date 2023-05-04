import { buscarEspecies } from "../services/consultar.js"
 
let fila=document.getElementById("fila")

buscarEspecies()
.then(function(respuesta){
    console.log(respuesta)

    respuesta.results.forEach(function(especies){

        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let name=document.createElement("h4")
        name.classList.add("tex-center","fw-bold")
        name.textContent=species.name

        let language=document.createElement("h4")
        language.classList.add("tex-center","fw-bold")
        language.textContent=species.language

        let hair_colors=document.createElement("h4")
        hair_colors.classList.add("tex-center","fw-bold")
        hair_colors.textContent=species.hair_colors

        let skin_colors=document.createElement("h4")
        skin_colors.classList.add("tex-center","fw-bold")
        skin_colors.textContent=especies.skin_colors

    })
})