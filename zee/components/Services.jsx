

import React from "react";
import Cards from "./Cards";
import Blur2 from "./Blur2";

const Services = () => {
  return (
    <div id="services" className="serviceBG  py-20 sm:p-[100px]  z-20 relative pb-[100px]">
      <div className=" ">
        <h1 className="font-bold  text-white sm:text-7xl text-5xl  text-center  ">
          Services
        </h1>
        <div className="  p-8 sm:p-0 flex flex-col sm:flex-row items-center sm:items-start justify-center mt-20 gap-10 ">
          <Cards
            number={"01"}
            heading={"Frontend Development"}
            description={
              "We bring your designs to life by creating sleek, high-performance websites. From Figma, XD, or any tool, we ensure top-tier standards for organized, visually stunning user experiences."
            }
          />
          <Cards
            number={"02"}
            heading={"Backend\u00A0 Development"}
            description={"Elevate your web applications with our robust backend solutions. We ensure seamless data handling and scalability, tailoring solutions to meet your unique needs.             "}
          />
          <Cards
            number={"03"}
            heading={"Fullstack Web Development"}
            description={"Embark on a complete web journey with our fullstack expertise. seamlessly integrating frontend and backend capabilities for cohesive user experiences. From concept to execution, we deliver versatile and precise web solutions that elevate your digital presence."}
          />
        </div>
        <div className="  p-8 sm:p-0  flex flex-col sm:flex-row items-center sm:items-start justify-center mt-10 sm:mt-20 gap-10">
          <Cards
            number={"04"}
            heading={"Desktop Applications"}
            description={"We create Desktop Applications according to your requirements. Our expertise lies in creating high-performance solutions, guaranteeing intuitive usability and cutting-edge features. "}
          />
          <Cards
            number={"05"}
            heading={"API Development"}
            description={"We specialize in crafting efficient and secure APIs for seamless data exchange between applications. Our team prioritizes performance and flexibility, leveraging cutting-edge technologies to optimize your digital ecosystem. "}
          />
          <Cards
            number={"06"}
            heading={"AI / Machine Learning"}
            description={"Our AI/ML services provide businesses with intelligent solutions, leveraging advanced algorithms for data-driven decision-making. From predictive analytics to natural language processing, we offer adaptable solutions tailored to enhance operations. Embrace the future of technology with our streamlined AI/ML services.            "}
          />
        </div>
      </div>

      <div className="absolute top-[26%] left-[0%] -z-10  right-auto bottom-auto">
        <Blur2 height="h-[15rem]" width="w-[20rem] sm:w-[40rem]" />
      </div>
      <div className="absolute top-auto left-auto -z-50  right-0 bottom-0">
        <Blur2 height="h-[10rem]" width="w-[40rem]" />
      </div>
    </div>
  );
};

export default Services;
