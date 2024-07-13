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

        <p className="typewrite flex justify-center special-text-2 text-[24px] font-[900]">
        We are proud of our
            {/* <Typewriter
                options={{
                strings: [
                    ", Case Studies.",
                    ", Work",
                    ", Partners.",
                ],
                autoStart: true,
                loop: true,
                delay: 5,
                }}
            /> */}

            <Typewriter
                options={{
                strings: [
                    ", Case Studies.",
                    ", Work",
                    ", Partners.",
                    ", Clients",
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