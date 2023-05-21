"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FirstCard from "@/components/first-card";
import SecondCard from "@/components/second-card";
import ThirdCard from "@/components/third-card";
import Image from "next/image";

export default function Home() {
  const [currentComponent, setCurrentComponent] = useState("FirstCard");

  function renderComponent() {
    switch (currentComponent) {
      case "FirstCard":
        return <FirstCard />;
      case "SecondCard":
        return <SecondCard />;
      case "ThirdCard":
        return <ThirdCard />;
      default:
        return null;
    }
  }

  const handleNavigation = (componentName) => {
    setCurrentComponent(componentName);
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {renderComponent()}
      <div className='flex flex-col gap-3'>
        <button
          onClick={() => handleNavigation("FirstCard")}
          className='py-2 px-4 bg-purple-600 rounded-lg'
        >
          First Card
        </button>
        <button
          onClick={() => handleNavigation("SecondCard")}
          className='py-2 px-4 bg-purple-600 rounded-lg'
        >
          Second Card
        </button>
        <button
          onClick={() => handleNavigation("ThirdCard")}
          className='py-2 px-4 bg-purple-600 rounded-lg'
        >
          Third Card
        </button>
      </div>
    </main>
  );
}
