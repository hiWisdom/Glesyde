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
<br/>
        <h1 className="typewrite flex special-text-2 text-[12px] font-[500]">        
            <Typewriter
                options={{
                strings: [
                    
                    `Glesyde ('We', 'us', or 'our') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile applications, and other online products and services (collectively, the 'Services'), or when you interact with us. We may collect various types of information in connection with the operation of our Services, including: Personal information such as your name, email address, and phone number, which you provide to us when registering for our Services or contacting us. Usage data and technical information automatically collected when you interact with our Services, such as your IP address, device information, and browsing activity. 
                    
                    We may use the information we collect for purposes such as: Providing and improving our Services.Communicating with you, including sending you updates and promotional materials.Analyzing trends and usage of our Services. Customizing your experience and content on our website and mobile applications. We may share your information: With our affiliates, partners, and service providers who assist us in operating our Services. When required by law or to protect our rights and interests.
                    
                    We implement reasonable security measures to protect your information from unauthorized access and use. You can choose not to provide certain information, but this may limit your ability to use certain features of our Services. We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website. If you have any questions about this Privacy Policy, please contact us at [hello@glesyde.one].
                    
                    This policy aims to reflect the world-class, forward-thinking approach of Glesyde in providing web and mobile solutions for entrepreneurs and enterprises, including those utilizing WordPress.`,

                ],
                autoStart: true,
                loop: true,
                delay: 7.5,
                }}
            />

        </h1>

    <p className="lg:hidden">
         <Typewriter
                options={{
                strings: [
                    `Glesyde ('We', 'us', or 'our') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile applications, and other online products and services (collectively, the 'Services'), or when you interact with us. We may collect various types of information in connection with the operation of our Services, including: Personal information such as your name, email address, and phone number, which you provide to us when registering for our Services or contacting us. Usage data and technical information automatically collected when you interact with our Services, such as your IP address, device information, and browsing activity. 
                    
                    We may use the information we collect for purposes such as: Providing and improving our Services.Communicating with you, including sending you updates and promotional materials.Analyzing trends and usage of our Services. Customizing your experience and content on our website and mobile applications. We may share your information: With our affiliates, partners, and service providers who assist us in operating our Services. When required by law or to protect our rights and interests.
                    
                    We implement reasonable security measures to protect your information from unauthorized access and use. You can choose not to provide certain information, but this may limit your ability to use certain features of our Services. We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website. If you have any questions about this Privacy Policy, please contact us at [hello@glesyde.one].
                    
                    This policy aims to reflect the world-class, forward-thinking approach of Glesyde in providing web and mobile solutions for entrepreneurs and enterprises, including those utilizing WordPress.`,
                ],
                autoStart: true,
                loop: true,
                delay: 7.5,
                }}
            />
    </p>
   
    
<br/>
<br/>
    </>

 ) 

}

export default  Typewrite;