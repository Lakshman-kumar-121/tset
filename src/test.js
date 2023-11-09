import { useState } from "react";

const Rim = () => {
    var [name, setname] = useState ("priya")
    return (  
        <div>
        <button  onClick={ (e)=>{
            setname ("lakshman")
            console.log(e);
        } }>gp</button>

        <p>hey this is { name }</p>
        </div>
    );
}
 
export default Rim;