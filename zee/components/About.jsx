import React from "react";

const About = () => {
  return (
    <div id="about" className="p-10 sm:p-0 max-w-[1100px] m-auto">
      <h1 className="font-bold  text-white  sm:text-7xl text-5xl sm:text-start text-center ">About Me</h1>
      <p className="text-normal text-white  mt-14 text-xl" >
        I am Danial Aziz, a seasoned web developer and programmer holding a
        Bachelor's degree in <span>Software Engineering</span> from{" "}
        <span>Capital University of Science and Technology</span> . I specialize
        in architecting streamlined and user-centric web solutions, consistently
        staying at the forefront of evolving industry paradigms.
      </p>
      <p className="text-xl text-white lead-tight mt-5">
        My commitment to excellence is unequivocal, manifested in my adeptness
        at seamlessly translating intricate concepts into pragmatic
        applications. Thriving in collaborative ecosystems, I bring a dynamic
        skill set to every project. Let us together elevate your digital
        presence to unprecedented heights.
      </p>
    </div>
  );
};

export default About;
