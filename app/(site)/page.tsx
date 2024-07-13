import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Welcome to Glesyde, We build world-class web and mobile solutions for forward-thinking enterprises. Also, we are one of the world biggest WordPress agency.",
  description: "Website Development, Mobile Application Developement, WordPress Development, Secured Payment Integration, Software maintenance, Mobile Application maintenance, Website maintenance, Training and Development  ",
  // other metadata
};

export default function Home() {
  return (
    
    <main>
      <br/>
      <FeaturesTab />
      <Brands />
      <Feature />
      <CTA />
      <FAQ />
      <Contact />

      {/* <About /> */}
      {/* <Integration /> */}
      {/* <Hero /> */}
      {/* <FunFact /> */}
      {/* <FeaturesTab /> */}
      {/* <Blog /> */}
      {/* <Testimonial />
      <Pricing /> */}

    </main>
  );
}
