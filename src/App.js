import React from "react";
import Intro from "./components/Intro";
import Socials from "./components/Socials";
import CommunityWork from "./components/CommunityWork";
import ProfessionalExperience from "./components/ProfessionalExperience";

function App() {
  return (
    <>
      <div class="fixed bg-gradient-to-r from-white to-blue-500">
        <Intro />
      </div>
      <div class="ml-4 mr-20 mt-20 absolute left-1/2 bg-transparent">
        <div>
          <Socials />
        </div>
        <div>
          <CommunityWork />
        </div>
        <div>
          <ProfessionalExperience />
        </div>
      </div>
    </>
  );
}

export default App;

//no need to wrtite css script for js files when using tailwind, just write the class name in the tag and it will work
