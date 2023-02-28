

//  import Tutuiernm from './Tutuierm';

// function App() {
//   return (
//     <div>
//       <h1>
        
//         {/* <Tutuiernm taskname="task2" stat="todo" btncolor={"green"} raaa={"100px"}></Tutuiernm>
//         <Tutuiernm taskname="task3" stat="rferf"></Tutuiernm>  */}
//         <Tutuiernm saths={"pethun"} kumar={"22.23"} murali={"12.33"} imag={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zkhFZxcc75HM6EmRb-EwzD9JyOAaGdBilZ78Zzmr6Q&s"} apaa={"brown"} amma={"800px"}  an={"(rhb)"}></Tutuiernm>
//         <Tutuiernm saths={"dasun"} kumar={"44.43"} murali={"15.33"} imag={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0PceyzVCftAfAPsp0VDldjKNw8eDDMpkQ1FjSA7O7gO4pdtsphdTXg9RXJAQljo0C3BQ&usqp=CAU"} apaa={"blue"} amma={"800px"} an={"(rhb)"}></Tutuiernm>
//         <Tutuiernm saths={"kumarsangagara"} kumar={"49.33"} murali={"33.32"} imag={"http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ_2Ux4M85G58ev379boOMmZOK7iQZl45MVUvuAodI9m8EQyLr9_ZVmvh1_rOfaXj-S8sKTDYSGx4_Ev_w"} apaa={"pink"} amma={"800px"} an={"(lhb)"}></Tutuiernm>
        
//       </h1>
//     </div>
//   );
// }

// export default App;
/*
import { useState ,useEffect} from "react";
function App() {
  const [bodyText,setbodyText] =useState("users");
  const[subbodyText,setsubbodyText] =useState(0)
useEffect(()=>{
  console.log("useeffect is working")
});

   return (
    <div>
      <button onClick={() => {setbodyText("users")}}>user</button>
      <button  onClick={() => {setbodyText("juuuf")}}>post</button>
      <button  onClick={() => {setbodyText("sathis")}}>aout us</button>
      <button  onClick={() => {setsubbodyText(subbodyText+1)}}>click me</button>
      <h1>{bodyText}</h1>
      <h1>{subbodyText}</h1>
      {/* //this is the idea we can can the values bodyText }
    </div>
  );
}

export default App;
*/

// import { useState } from "react";
// function App (){
//   const[name,setname]=useState("jnhueh");


// return(//practise
//   <div>
//     <button onClick={()=>{setname("ddhhd")}}>butoon</button>
//     <h1>{name}</h1>
//   </div>
// )}
// export default App;
// import card from './cad.jsx';

// function app(){
//   return <div>

//   </div>
// }

// export default app;

// import Tutuierm from './Tutuierm'

// function App(){
//   return(
//     <div><h1>
//       <Tutuierm names={"sathis"} greats={"A"} httpphoto={"https://fs.npstatic.com/userfiles/6727621/image/2016/HeroS-random/google-translate-hero-2-w810h462.jpg"}></Tutuierm>
//       <Tutuierm names={"kumar"} greats={"B"} httpphoto={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXnCe_dkEpNOIDluikJ58EE6TtZ9MBWuFaIMduJOPJzNcqXKflMvydIt1fqwrf5vgOUo&usqp=CAU"}></Tutuierm>
//     </h1>
//     </div>
//   );
// }

// export default App;

import Cord from './Cord'

function App(){
  return(<div>
    <Cord httpphoto={"https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755__340.jpg"} name1={"apple"} reta1={"212"} ></Cord>
    <Cord httpphoto={"https://images.pexels.com/photos/207085/pexels-photo-207085.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200"} name1={"orenge"} reta1={"324"} ></Cord>
    <Cord httpphoto={"https://www.hsph.harvard.edu/wp-content/uploads/sites/30/2018/08/bananas-1354785_1920-768x512.jpg"} name1={"banana"} reta1={"294"} ></Cord>
    <Cord httpphoto={"https://cdn.pixabay.com/photo/2017/07/28/14/23/macarons-2548810__340.jpg"} name1={"rose-barries"} reta1={"324"} ></Cord>
    <Cord httpphoto={"https://www.ashcroftfamilytable.com/wp-content/uploads/2022/04/pineapple-juice-640x457.jpg.webp"} name1={"pain-apple"} reta1={"224"} ></Cord>
    <Cord httpphoto={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8awWp3rxzMZUAP_vXeiyT0Pg5M1ezsrZ_w&usqp=CAU"} reta1={"304"} name1={"mengo"} ></Cord>
        

    </div>
  );
}

export default App;