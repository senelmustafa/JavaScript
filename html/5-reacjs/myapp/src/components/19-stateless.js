import React,{useState} from 'react'

 const State = () => {
    /* let counter=10 ;
    const artir=()=>{
        counter++;
         }
     */   // document.querySelector("b").innerText=counter; bu örnekte state kullanılmadı
    const[counter, setCounter] =useState(10);
    const artir= () => {

        setCounter (counter+1);
    }
  return (
    <div>
        <b>{counter}</b>
        <button onClick={artir}>Artır</button>
    </div>
  );
};
export default State