import React,{useState} from "react";

const Authmodel=({isOpen, onClose, onLogin})=>{
  const [name, setName] =useState("");

  if(!isOpen) return null;
   
  return(
    <div>


    </div>
  )

}

export default Authmodel;