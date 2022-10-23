import React, { useRef } from "react";




function Elenco(props) {
    
    const claseRef = useRef(null);

    const verElenco = (elenco) => {

        elenco.current.classList.toggle(`ver`);

    }; 



    return(
        <React.Fragment>


        <button onClick={() => {
            verElenco(claseRef);
          }}>Elenco</button>
        <p className="oculto" ref={claseRef}>{props.children}</p>



        </React.Fragment>







    );







}


export default Elenco;