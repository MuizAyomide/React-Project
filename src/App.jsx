import { useState } from "react";
import Navbar from "./Components/Navbar";
import FirstConponent from "./Components/FirstComponent";

const  App = () => {


const [x,setx] = useState(0);

const btnClick = () => {
console.log('Hello');
console.log(x);

setx(x+1);
}
  return ( 
    <div>
<h1>Hello</h1>
<button onClick={
  
  () => {btnClick()}
  }>Click me</button>
 

<FirstComponent data={x}/>

  </div>
  );
  
}
 
export default App;