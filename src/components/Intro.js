import React from "react";
import me2 from './images/me2.jpg'
export default function Intro() {
  return (
    <section class="ml-20 mt-20 mr-20 w-2/5 flex flex-col justify-around">
      <div>
        <img
          src={me2}
          alt="Me"
          className="w-40 h-40 mb-4 mt-20 rounded-full"
        />
      </div>
      <div>
        <h1 class="text-3xl font-bold">Ishika Punchariya </h1>
        <p align="justify">
          I am a 3rd year Computer Science student at Maharaja Surajmal
          Institute of Technology. I am a Android Developer (Kotlin). I am a
          passionate learner and love to explore new technologies. My tech stack
          also includes Python and C++. Currently doing an internship at SCFBio
          Lab, IIT Delhi.
        </p>
      </div>
    </section>
  );
}

// https://drive.google.com/file/d/1GVPKqF76XAUadRp1c4pf6oKnustaft93/view
