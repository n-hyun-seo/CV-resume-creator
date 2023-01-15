import { useState } from "react";

export default function Header() {
   const [name, setName] = useState("Enter your name.");

   return (
      <div className="header">
         <input className="name-input" placeholder={name} onChange={(e) => setName(e.target.value)}></input>
      </div>
   )
}