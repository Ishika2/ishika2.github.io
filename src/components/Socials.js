import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import twitter from "./images/twitter.png";
import google from "./images/GoogleDeveloperProfile.png";

export default function Socials() {
  return (
    <div>
      <h1 class="text-2xl font-bold">Socials</h1>
      <section class="grid grid-cols-2">
        <Card className="mt-10 w-50 mr-6 bg-gray-200 hover:bg-white p-6 rounded-xl shadow-lg">
          <a href="https://github.com/Ishika2" className="inline-block">
            <CardBody>
              <img src={github} alt="Github" className="w-12 h-12 mb-2" />
              {/* <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4" /> */}
              <Typography variant="h3" color="blue-gray" className="mb-2">
                Github
              </Typography>
              <Typography>
                www.github.com
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-2 mt-2 p-0"
                >
                  Ishika2
                  <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                </Button>
              </Typography>
            </CardBody>
          </a>
          <CardFooter className="pt-0">
            <a href="https://github.com/Ishika2" className="inline-block">
              <Button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-md">
                Follow
              </Button>
            </a>
          </CardFooter>
        </Card>

        <Card className="mt-10 ml-6 w-50 bg-gray-200 hover:bg-white p-6 rounded-xl shadow-lg">
          <a
            href="https://www.linkedin.com/in/ishika-punchariya-7a286121b"
            className="inline-block"
          >
            <CardBody>
              <img src={linkedin} alt="LinkedIn" className="w-12 h-12 mb-2" />
              {/* <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4" /> */}
              <Typography variant="h3" color="blue-gray" className="mb-2">
                LinkedIn
              </Typography>
              <Typography>
                www.linkedin.com
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-2 mt-2 p-0"
                >
                  LinkedIn
                  <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                </Button>
              </Typography>
            </CardBody>
          </a>
          <CardFooter className="pt-0">
            <a
              href="https://www.linkedin.com/in/ishika-punchariya-7a286121b"
              className="inline-block"
            >
              <Button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-md">
                Follow
              </Button>
            </a>
          </CardFooter>
        </Card>

        <Card className="mt-16 w-50 mr-6 bg-gray-200 hover:bg-white p-6 rounded-xl shadow-lg">
          <a href="https://twitter.com/curious_ishika" className="inline-block">
            <CardBody>
              <img src={twitter} alt="Twitter" className="w-12 h-12 mb-2" />
              {/* <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4" /> */}
              <Typography variant="h3" color="blue-gray" className="mb-2">
                Twitter
              </Typography>
              <Typography>
                www.twitter.com
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-2 mt-2 p-0"
                >
                  curious_ishika
                  <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                </Button>
              </Typography>
            </CardBody>
          </a>
          <CardFooter className="pt-0">
            <a
              href="https://twitter.com/curious_ishika"
              className="inline-block"
            >
              <Button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-md">
                Follow
              </Button>
            </a>
          </CardFooter>
        </Card>

        <Card className="mt-16 ml-6 w-50 bg-gray-200 hover:bg-white p-6 rounded-xl shadow-lg">
          <a href="https://g.dev/Ishika" className="inline-block">
            <CardBody>
              <img
                src={google}
                alt="Google Developer Profile"
                className="w-12 h-12 mb-2"
              />
              {/* <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4" /> */}
              <Typography variant="h3" color="blue-gray" className="mb-2">
                Google Developer Profile
              </Typography>
              <Typography>
                www.developers.google.com
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-2 mt-2 p-0"
                >g.dev/Ishika
                  <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                </Button>
              </Typography>
            </CardBody>
          </a>
        </Card>
      </section>
    </div>
  );
}
