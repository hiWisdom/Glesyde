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

  
    
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">

              <h1 className="typewrite flex special-text-2 text-[42px] font-[900]">
                <Typewriter
                  options={{
                    strings: [
                      "We are creating SIMS, a student information system and school management information system, It is the most widely used MIS in the primary and secondary sectors.",
                      "Looking for professional & trusted Website?", 
                      "Looking for professional & trusted Mobile Application?", 
                      "Looking for Enterprise Solution Software.",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 5,
                  }}
                />
            </h1>
        </div>
      </section>
    
    </>

 ) 

}

export default  Typewrite;