import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function ProfessionalExperience() {
  return (
    <div>
      <h1 class="text-2xl font-bold mt-16">Professional Experience</h1>
      <section class="grid grid-cols-2 mb-20">
        <Card className="mt-10 w-50 mr-6 bg-sky-500 hover:bg-sky-700">
          <CardBody>
            <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4" />
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Professional Experience
            </Typography>
            <Typography>
              Because it's about motivating the doers. Because I'm here to
              follow my dreams and inspire others.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="#" className="inline-block">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2"
              >
                Learn More
                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
              </Button>
            </a>
          </CardFooter>
        </Card>
        <Card className="mt-10 w-50 ml-6 bg-sky-500 hover:bg-sky-700">
          <CardBody>
            <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4" />
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Professional Experience
            </Typography>
            <Typography>
              Because it's about motivating the doers. Because I'm here to
              follow my dreams and inspire others.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="#" className="inline-block">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2"
              >
                Learn More
                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
              </Button>
            </a>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
