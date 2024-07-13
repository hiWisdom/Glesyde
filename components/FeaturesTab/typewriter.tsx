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

        <h1 className="typewrite flex special-text-2 text-[42px] font-[900]">
        👋 We Code and Create 
        
            <Typewriter
                options={{
                strings: [
                    // ", Clean User Interface.",
                    // ", Essential Business Pages.", 
                    // ", Fully Functional Integrations.", 
                    ", WordPress Solution.",
                    ", Web App Solution.",
                    ", Mobile App Solution.",
                    ", Customize ERP Solution.", 
                    // ", Custom Website Presentation and Solution.", 
                    // ", Custom Mobile Application Solution.",
                    // ", Custom WordPress Solution and Presentation.",
                    // ", Custom Online Shops & E-Commerce.",
                ],
                autoStart: true,
                loop: true,
                delay: 5,
                }}
            />

        </h1>


        <Typewriter
                options={{
                strings: [
                    "For non Tech savvy's, we have here very simple instructions on how to use the tabs.",
                    "For mobile device(Andriod or IOS), use your finger and click on each tab. For desktop, if it is touch pad use finger and click on each tab, or mouse and click on each tab",
                    "Soiled Technologies.",
                ],
                autoStart: true,
                loop: true,
                delay: 5,
                }}
            />
    
    </>

 ) 

}

export default  Typewrite;