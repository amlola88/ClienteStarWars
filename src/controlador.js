import { buscarEspecies } from "../services/consultarEspecies.js"
import { buscarPlanetas } from "../services/consultarPlanetas.js"
 
let fila=document.getElementById("fila1")

buscarEspecies()
.then(function(respuestaE){
   

    respuestaE.results.forEach(function(especies){

        let columna=document.createElement("div")
        columna.classList.add("col","mb-3")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let name=document.createElement("h4")
        name.classList.add("tex-center","fw-bold")
        name.textContent=especies.name

        let language=document.createElement("p")
        language.classList.add("tex-center","fw-bold")
        language.textContent= `Idioma: ${especies.language}`

        let hair_colors=document.createElement("p")
        hair_colors.classList.add("tex-center","fw-bold")
        hair_colors.textContent= `Color de cabello: ${especies.hair_colors}`

        let skin_colors=document.createElement("p")
        skin_colors.classList.add("tex-center","fw-bold")
        skin_colors.textContent= `Color de piel: ${especies.skin_colors}`
       
        tarjeta.appendChild(name)
        tarjeta.appendChild(language)
        tarjeta.appendChild(hair_colors)
        tarjeta.appendChild(skin_colors)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        
    })
        

    console.log(respuestaE)
})

let fila1=document.getElementById("fila2")

buscarPlanetas()
.then(function(respuestaP){
   

    respuestaP.results.forEach(function(planetas){

        let columna=document.createElement("div")
        columna.classList.add("col","mb-3")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let name=document.createElement("h4")
        name.classList.add("tex-center","fw-bold")
        name.textContent=planetas.name

        let poblacion=document.createElement("p")
        poblacion.classList.add("tex-center","fw-bold")
        poblacion.textContent= `Población: ${planetas.population}`

        let clima=document.createElement("p")
        clima.classList.add("tex-center","fw-bold")
        clima.textContent= `Clima: ${planetas.climate}`

        let superficie=document.createElement("p")
        superficie.classList.add("tex-center","fw-bold")
        superficie.textContent=`Superficie: ${planetas.terrain}`
       
        tarjeta.appendChild(name)
        tarjeta.appendChild(poblacion)
        tarjeta.appendChild(clima)
        tarjeta.appendChild(superficie)
        columna.appendChild(tarjeta)
        fila1.appendChild(columna)
        
    })
        

    console.log(respuestaP)
})