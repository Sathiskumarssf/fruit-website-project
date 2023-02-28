// function Tutuiernm({taskname,stat,btncolor,raaa}){
//     // const taskname="do to item 1"
//     // const stat ="Done"
//     return(
//         <div>
//           <h3>
//             <span>task:</span>{taskname}
//             </h3>
//           <button style={{color:btncolor,width:raaa}}>{stat} </button>
         
//         </div>
//     )//examle


// }
// export default Tutuiernm;
//  function Tutuiernm({saths,kumar,murali,imag,apaa,amma,poo}){
//     return(
//     <div style={{backgroundColor:apaa,width:amma}}>
//         <div >
//             <img src={imag} style={{width:"100px",height:"100px",WebkitBorderRadius:"50px"}}></img>
//         </div>    
//         <h1><span>name:</span>{saths}  </h1>
//         <h2><span>avrage:</span>{kumar} </h2>
//         <h2><span>ranrate:</span>{murali}</h2>
//         {/* <h3>vaasaa: <span>{poo}</span></h3> */}
//     </div>)
// }
// export default Tutuiernm;
// function mapping(){
//     const list1=[1,2,3,4,5]
//     const listitems =list1.map((number)=>
//     <li>
//         {number}*2={number*2}
//     </li>)
    
//     // const list2 =list1.map((number)=>number*number)//this very important so maind it
//     // console.log(list2)
//     //ol is list order 1. 2. 3. and ul is . . .
//     return(<div>
//         <ul>
//             {/* <li>1</li>
//             <li>2</li>
//             <li>3</li> */}
//             {listitems}
//         </ul>
//     </div>)
// }
// export default mapping;
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