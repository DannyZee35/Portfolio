"use client";

import React, { useState } from "react";
import projects from "./ProjectData";
import Link from "next/link";
import Image from "next/image";
import Modal from "./Modal";
import Project from "./Project";

const Projects = () => {
    const [modal,setModal] = useState({active:false,index:0})


  return (
    <div className={"flex items-center justify-center h-[100vh] bg-white"}>

    <div className={"w-[1000px] flex flex-col items-center justify-center"}>

      {

        projects.map( (project, index) => {

          return <Project index={index} name={project.name} tag ={project.tag} setModal={setModal} key={index}/>

        })

      }

    </div>

    <Modal modal={modal} projects={projects}/>

  </div>
  );
};

export default Projects;
