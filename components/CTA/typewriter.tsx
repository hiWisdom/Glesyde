 "use client";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import './style.css';

const Typewrite = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
 
 
 return (

    <>

<br/>
        <h2 className="typewrite flex justify-center special-text-2 text-[15px] font-[900]">
        Transform your business with our cutting-edge 
        
            <Typewriter
                options={{
                strings: [
                    ", WordPress technology.",
                    ", mobile technology.",
                    ", website technology.",

                ],
                autoStart: true,
                loop: true,
                delay: 5,
                }}
            />
            {/* and . Join the global leaders in innovation and scalability today! */}
        </h2>   
    
<br/>
    </>

 ) 

}

export default  Typewrite;