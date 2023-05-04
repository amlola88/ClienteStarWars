export async function buscarEspecies(){

    const URL="https://swapi.dev/api/species"
    const PETICION={
        method:"GET",
               
    }  
    let respuesta=await fetch(URL,PETICION)
    let especiesEntregadas=await respuesta.json()
    return especiesEntregadas
}