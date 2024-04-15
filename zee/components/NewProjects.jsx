import React from "react";
import CardComponent from "./CardComponent";

const NewProjects = () => {
  return (
    <div id="projects" className="bg-white p-20 mb-[100px]">
      <h1 className="font-bold  text-black text-center mb-[100px] text-7xl">Projects</h1>
      <div className="flex items-center justify-center gap-20 flex-col" >
      <div className="flex items-center justify-center gap-20 flex-col sm:flex-row">
        <CardComponent image="/swift.png" name={"Swift Raffles"} to={'https://swift-raffles-two.vercel.app/entries'}/>
        <CardComponent image="/terp.png" name={"Terpify Ecommerce Store "} to={'https://gentle-gnome-c5ba70.netlify.app/home'}/>
  
      </div>
      <div className="flex items-center justify-center gap-20 flex-col sm:flex-row">
        <CardComponent image="/nft.png" name={"Project Sea"} to={'https://preeminent-rugelach-9e5ecd.netlify.app'}/>
        <CardComponent image="/travel.png" name={"Tourism Victoria"} to={'https://661d3004ed83eb034df0cd43--unrivaled-rolypoly-32b986.netlify.app'}/>
  
      </div>
      </div>
      
    </div>
  );
};

export default NewProjects;
