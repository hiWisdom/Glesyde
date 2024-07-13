"use client";
import Image from "next/image";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import './style.css';

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>

  
    
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">

              <h1 className="typewrite flex special-text-2 text-[42px] font-[900]">
              👋
                <Typewriter
                  options={{
                    strings: [
                      "echo Welcome! To 'Glesyde' ",
                      ", We Code your Web App Solution.",
                      ", We Code your Mobile App Solution.",
                      ", We Code your WordPress Solution.",
                      ", We Code your Custom Enterprise Resource Planning System Solution.", 
                      ", We Code and Create  your Website Presentation and Solution.", 
                      ", We Code and Create  your Mobile Application Development Solution and Presentation.",
                      ", We Code and Create  your WordPress for Enterprise Solution and Presentation.",
                      ", We Code and Create your Online Shops & E-Commerce.",
                      ", You can Scroll to check more of our services.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
            </h1>

              <p>
                At Glesyde, We build world-class web and mobile technology solutions for forward-thinking enterprises from startup launch, including - Authentication, Database management, Blog management, Custom Software Solutions, Website Pages and More with the best state-of-art modern technologies.
              </p>

              <div className="mt-10">
                {/* <form onSubmit={handleSubmit}> */}
                  <div className="flex flex-wrap gap-5">
                    {/* <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    /> */}
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Contact us
                    </button>
                  </div>
                {/* </form> */}

              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              {/* <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div> */}

              <Image
                src="/images/hero/CodingProgramming_Hero.svg"
                alt="shape"
                width={706}
                height={246}
                // className="-top-10"
              />
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
