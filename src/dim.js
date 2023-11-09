import { useEffect, useState } from "react";


const Dim = () => {
    
    var name  = "priya";

    function pp ( abc ) {
        alert(abc);
    
    }

    return ( 
        <div>
            <button onClick ={( ) => {  pp("ureuh") }} > click me</button>
            <p>{name} pgl h</p>
        </div>
        
        
     );
}
 
export default Dim;