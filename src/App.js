import React from 'react';
import Intro from './components/Intro';
import Socials from './components/Socials';
import CommunityWork from './components/CommunityWork';
import ProfessionalExperience from './components/ProfessionalExperience';
// import bgimg from './images/bg.png';
// import './App.css';

function App() {
  return (
    <>
   {/* <Navbar/>
   <Footer/> */}
   <div class="bg-[url('./images/bg.png')] bg-cover bg-center bg-no-repeat">
   <div class="fixed">
    <Intro/>
   </div>
   <div class="ml-4 mr-20 mt-20 absolute left-1/2">
      <div>
        <Socials/>
      </div>
      <div>
        <CommunityWork/>
      </div>
      <div>
        <ProfessionalExperience/>
      </div>
   </div>
   </div>


   {/* <h1 className="text-3xl font-bold underline">
        Ishika Punchariya
   </h1> */}
   </>
  );
}

export default App;



//no need to wrtite css script for js files when using tailwind, just write the class name in the tag and it will work