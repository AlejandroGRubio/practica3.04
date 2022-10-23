import React from "react";
//Importamos el .JSON.
import pelis from "./Ejercicio2.json";
import Elenco from "./Elenco";
import Pelicula from "./Pelicula";



function Peliculas(props) {
    
    


    //Importamos los datos del .JSON y lo recorremos para pasar los datos de las películas.
    return(

       <React.Fragment>

        {pelis.peliculas.map((peli) => {
            
            return (
            
            <React.Fragment>
            <Pelicula id = {peli.id} nombre = {peli.nombre} director = {peli.director} clasificacion = {peli.clasificacion} cartelera = {peli.cartelera} nota = {peli.nota}>
                {peli.resumen}
            </Pelicula>

            <Elenco>{peli.elenco}</Elenco>
            </React.Fragment>
            )
        })}






       </React.Fragment>




    );


}


export default Peliculas;