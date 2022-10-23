import React, { useRef } from "react";




function Taquilla(props) {
    
    const claseRef = useRef(null);

    const verTaquilla = (taquilla) => {

        taquilla.current.classList.toggle(`ver`);

    }; 



    return(
        <React.Fragment>


        <button onClick={() => {
            verTaquilla(claseRef);
          }}>Taquilla</button>
        <p className="oculto" ref={claseRef}>{props.children}</p>



        </React.Fragment>







    );

        }

    export default Taquilla;
