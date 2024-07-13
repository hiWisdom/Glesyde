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

        <h1 className="typewrite flex justify-center special-text-2 text-[30px] font-[900]">
        👋 Things we are
        
            <Typewriter
                options={{
                strings: [
                    ", really good at.",
                    ", crafting everyday.",
                    ", coding everyday.",
                    ", customizing everyday.", 
                ],
                autoStart: true,
                loop: true,
                delay: 5,
                }}
            />

        </h1>

            <p className="lg:hidden">
                <Typewriter
                    options={{
                    strings: [
                        "Things we are really good at",
                        "Things we are crafting everyday",
                        "Things we are coding everyday.",
                        "Things we are customizing everyday.",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 5,
                    }}
                />
            </p>
   
    
    </>

 ) 

}

export default  Typewrite;