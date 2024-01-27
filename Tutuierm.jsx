
import './sathi.css'
import { useState } from 'react';
function Tutuiernm({httpphoto,names,greats}){
     const[count,setcount]=useState(3)

     function Increse(){
        setcount(count+1)
     }
     function Decrement(){
        setcount(count-1)
     }

    return(
        <div className="saa" > 
            <div><img src={httpphoto} className="saas"/></div>
            <div>
          <h1>name: <span>{names}</span></h1>
          <h1>great: <span>{greats}</span></h1>
          
          <h1>doular: {count}</h1>
          <button onClick={Increse} className="kumar">Incre</button>
          <button onClick={Decrement} className="vani">Decrese</button>
            </div>
        </div>
    )
}

export default Tutuiernm;
