export async function buscarPlanetas(){

    const URL="https://swapi.dev/api/planets"
    const PETICION={
        method:"GET"
               
    }  
    let respuestaP=await fetch(URL,PETICION)
    let planetasEntregados=await respuestaP.json()
    return planetasEntregados
}