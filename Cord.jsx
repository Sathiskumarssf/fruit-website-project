import { useState } from 'react';
import './sathi.css'
function Cord({httpphoto,name1,reta1}){
     const [count,setcount]=useState(1);

    function incrs(){
        setcount(count+1)
     }
   function  decrs(){
        setcount(count-1)
     }

     return(
        
       <div   className="s2" > 
       <div className="backroung">
            <h1 style={{color :'red',fontSize:'50px'}} className="fruit">friuts</h1>
           
           <div className='image'><img src={httpphoto} className='naveen'/></div>
            <h1 style={{color :'yellow'}}>fruit-name: <span>{name1}</span></h1>
            <h2 style={{color :'yellow'}}>rate: <span>{reta1}</span></h2>
            <h1 style={{color :'yellow'}}>predict-dollar:<span></span>{count}</h1>
            <button onClick={incrs} className="increse">incerse </button>
            <button onClick={decrs} className="decrese">decrese</button>
        </div>
     </div>
     )
     
}

export default Cord;