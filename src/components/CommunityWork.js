import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

import Azure from "./images/Azure.jpeg";
import devfest from "./images/devfest.jpeg";
// import azure2 from "./images/azure2.jpeg";
import gdsc from "./images/gdsc.jpg";
import ieee from "./images/ieee.jpeg";
import ispa from "./images/ispa.jpeg";
import gfg from "./images/gfg.jpeg";
import twitter from "./images/twitter.png";
import linkedin from "./images/linkedin.png";

export default function CommunityWork() {
  return (
    <div>
      <h1 class="text-2xl font-bold mt-16">Community Work</h1>
      <section class="grid grid-cols-2">
        <Card className="mt-10 w-50 mr-6 bg-gray-200 hover:bg-white p-6 rounded-xl shadow-lg">
          <CardHeader floated={false} className="h-40">
            <img src={Azure} alt="With Shraddha Didi" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Azure Open Source Day
            </Typography>
            <Typography color="blue" className="font-medium" textGradient>
              Noida
            </Typography>
            <a
              href="https://twitter.com/curious_ishika/status/1634221375526420481?s=20"
              className="inline-block"
            >
              <Avatar
                size="sm"
                variant="circular"
                alt="candice wu"
                className="h-15 w-10 mr-4 mt-4 inline-block mb-0"
                src={twitter}
              />
            </a>
          </CardBody>
        </Card>

        <Card className="mt-10 w-50 ml-6 bg-gray-200 hover:bg-white p-6 rounded-xl shadow-lg">
          <CardHeader floated={false} className="h-40">
            <img src={gfg} alt="With Sandeep Jain Sir" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              GeekTalk by Sandeep Jain Sir
            </Typography>
            <Typography color="blue" className="font-medium" textGradient>
              by GDSC MSIT
            </Typography>
            <a
              href="https://www.linkedin.com/posts/gdsc-msit-delhi_c%E1%B4%8F%E1%B4%85%C9%AA%C9%B4%C9%A2-%C9%AAs-%E1%B4%9B%CA%9C%E1%B4%87-%CA%9F%E1%B4%80%C9%B4%C9%A2%E1%B4%9C%E1%B4%80%C9%A2%E1%B4%87-%E1%B4%8F%EA%9C%B0-%C9%AA%C9%B4%C9%B4%E1%B4%8F%E1%B4%A0%E1%B4%80%E1%B4%9B%C9%AA%E1%B4%8F%C9%B4-%E1%B4%A1%CA%9C%E1%B4%87%CA%80%E1%B4%87-activity-7048648603321475072-BQDM?utm_source=share&utm_medium=member_desktop"
              className="inline-block"
            >
              <Avatar
                size="sm"
                variant="circular"
                alt="candice wu"
                className="h-15 w-10 mr-4 mt-4 inline-block mb-0"
                src={linkedin}
              />
            </a>
          </CardBody>
        </Card>

        <Card className="mt-10 w-50 mr-6 bg-gray-200 hover:bg-white p-6 rounded-xl shadow-lg">
          <CardHeader floated={false} className="h-40">
            <img src={ispa} alt="My Team ISPA" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Volunteer at ISPA
            </Typography>
            <Typography color="blue" className="font-medium" textGradient>
              Indian Space Association
            </Typography>
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:6986568600102821888?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6986568600102821888%29"
              className="inline-block"
            >
              <Avatar
                size="sm"
                variant="circular"
                alt="candice wu"
                className="h-15 w-10 mr-4 mt-4 inline-block mb-0"
                src={linkedin}
              />
            </a>
          </CardBody>
        </Card>

        <Card className="mt-10 w-50 ml-6 bg-gray-200 hover:bg-white p-6 rounded-xl shadow-lg">
          <CardHeader floated={false} className="h-40">
            <img src={devfest} alt="Technical events" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Devfest 2022
            </Typography>
            <Typography color="blue" className="font-medium" textGradient>
              Delhi NCR
            </Typography>
            <a
              href="https://twitter.com/curious_ishika/status/1601812758877843456?s=20"
              className="inline-block"
            >
              <Avatar
                size="sm"
                variant="circular"
                alt="candice wu"
                className="h-15 w-10 mr-4 mt-4 inline-block mb-0"
                src={twitter}
              />
            </a>
          </CardBody>
        </Card>

        <Card className="mt-10 w-50 mr-6 bg-gray-200 hover:bg-white p-6 rounded-xl shadow-lg">
          <CardHeader floated={false} className="h-40">
            <img src={gdsc} alt="Team GDSC MSIT" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Google Developer Student Club
            </Typography>
            <Typography color="blue" className="font-medium" textGradient>
              Team MSIT
            </Typography>
            <a
              href="https://www.linkedin.com/company/gdsc-msit-delhi/mycompany/"
              className="inline-block"
            >
              <Avatar
                size="sm"
                variant="circular"
                alt="candice wu"
                className="h-15 w-10 mr-4 mt-4 inline-block mb-0"
                src={linkedin}
              />
            </a>

            <a
              href="https://twitter.com/GdscMsit?s=20"
              className="inline-block"
            >
              <Avatar
                size="sm"
                variant="circular"
                alt="candice wu"
                className="h-15 w-10 ml-4 mt-4 inline-block mb-0"
                src={twitter}
              />
            </a>
          </CardBody>
        </Card>

        <Card className="mt-10 w-50 ml-6 bg-gray-200 hover:bg-white p-6 rounded-xl shadow-lg">
          <CardHeader floated={false} className="h-40">
            <img src={ieee} alt="Team IEEE MSIT" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Team IEEE MSIT
            </Typography>
            <Typography color="blue" className="font-medium" textGradient>
              Batch: 2022
            </Typography>
            <a
              href="https://www.linkedin.com/company/ieeemsit/"
              className="inline-block"
            >
              <Avatar
                size="sm"
                variant="circular"
                alt="candice wu"
                className="h-15 w-10 mr-4 mt-10 inline-block mb-0"
                src={linkedin}
              />
            </a>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}
