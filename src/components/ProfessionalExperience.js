import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";

import iit_delhi_logo from "./images/iit_delhi_logo.png";
import Android_Logo from "./images/Android_Logo.png";
import Microsoft_Engage from "./images/Microsoft_Engage.png";
import Microsoft_Logo from "./images/Microsoft_logo.png";
import Kotlin_Icon from "./images/Kotlin_Icon.png";

export default function ProfessionalExperience() {
  return (
    <div>
      <h1 class="text-2xl font-bold mt-16">Professional Experience</h1>
      <section class="grid grid-cols-2 mb-4">
        <Card
          shadow={false}
          className="relative grid h-[20rem] max-w-[20rem] mt-10 items-end justify-center overflow-hidden text-center mr-6"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none"
          >
            <img
              src={iit_delhi_logo}
              alt="Me"
              className="absolute inset-0 m-0 h-full w-full rounded-none"
            />
            {/* <div class="bg-blue-800 hover:bg-transparent absolute inset-0 h-full w-full transition-all duration-300"/> */}
            <div className="to-bg-blue-800 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-900/80 via-blue-500/50" />
            {/* <div class="bg-gradient-to-t from-blue-800/80 via-blue-500/50 to-transparent absolute inset-0 h-full w-full transition-all duration-300" />
            <div class="bg-blue-800 hover:bg-transparent absolute inset-0 h-full w-full transition-all duration-300" /> */}
            {/* <div class=""></div> */}
          </CardHeader>
          <CardBody className="relative py-4 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              Android Development Internship
            </Typography>
            <Typography variant="h5" className="mb-4 text-white">
              SCFBio Lab, IIT Delhi
            </Typography>
            <Avatar
              size="sm"
              variant="circular"
              alt="candice wu"
              className="h-15 w-10 mr-4"
              src={Android_Logo}
            />
            <Avatar
              size="sm"
              variant="circular"
              alt="candice wu"
              className="h-8 w-8 ml-4"
              src={Kotlin_Icon}
            />
          </CardBody>
        </Card>

        <Card
          shadow={false}
          className="relative grid h-[20rem] max-w-[20rem] mt-10 items-end justify-center overflow-hidden text-center ml-6"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none"
          >
            <img
              src={Microsoft_Engage}
              alt="Me"
              className="absolute inset-0 m-0 h-full w-full rounded-none"
            />
            {/* <div class="bg-blue-800 hover:bg-transparent absolute inset-0 h-full w-full transition-all duration-300"/> */}
            <div className="to-bg-blue-800 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-900/80 via-blue-500/50" />
            {/* <div class="bg-gradient-to-t from-blue-800/80 via-blue-500/50 to-transparent absolute inset-0 h-full w-full transition-all duration-300" />
            <div class="bg-blue-800 hover:bg-transparent absolute inset-0 h-full w-full transition-all duration-300" /> */}
            {/* <div class=""></div> */}
          </CardHeader>
          <CardBody className="relative py-4 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              Mentee at Microsoft Engage 2022
            </Typography>
            <Typography variant="h5" className="mb-4 text-white">
              Microsoft
            </Typography>
            <Avatar
              size="sm"
              variant="circular"
              alt="candice wu"
              className="h-10 w-10"
              src={Microsoft_Logo}
            />
          </CardBody>
        </Card>
      </section>
    </div>
  );
}
