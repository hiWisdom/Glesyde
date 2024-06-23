import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page - Soiled",
  description: "This is Support page for Soiled, We build world-class web and mobile solutions for forward-thinking enterprises. Also, we are one of the world biggest WordPress agency.",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
