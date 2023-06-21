import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

export default function CommunityWork() {
  return (
    <div>
      <h1 class="text-2xl font-bold mt-16">Community Work</h1>
      <section class="grid grid-cols-2">
        <Card className="mt-10 w-50 mr-6 bg-sky-500 hover:bg-sky-700">
          <CardHeader floated={false} className="h-40">
            <img src="./images/me.png" alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Hacktoberfest'22
            </Typography>
            <Typography color="blue" className="font-medium" textGradient>
              Delhi NCR
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-2 pt-2 mb-2">
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="pink"
                textGradient
              >
                Twitter
                <i className="fab fa-twitter" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>

        <Card className="mt-10 w-50 mr-6 bg-sky-500 hover:bg-sky-700">
          <CardHeader floated={false} className="h-40">
            <img src="./images/me.png" alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Hacktoberfest'22
            </Typography>
            <Typography color="blue" className="font-medium" textGradient>
              Delhi NCR
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-2 pt-2 mb-2">
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="pink"
                textGradient
              >
                Twitter
                <i className="fab fa-twitter" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>

        <Card className="mt-10 w-50 mr-6 bg-sky-500 hover:bg-sky-700">
          <CardHeader floated={false} className="h-40">
            <img src="./images/me.png" alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Hacktoberfest'22
            </Typography>
            <Typography color="blue" className="font-medium" textGradient>
              Delhi NCR
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-2 pt-2 mb-2">
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="pink"
                textGradient
              >
                Twitter
                <i className="fab fa-twitter" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>

        <Card className="mt-10 w-50 mr-6 bg-sky-500 hover:bg-sky-700">
          <CardHeader floated={false} className="h-40">
            <img src="./images/me.png" alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Hacktoberfest'22
            </Typography>
            <Typography color="blue" className="font-medium" textGradient>
              Delhi NCR
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-2 pt-2 mb-2">
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="pink"
                textGradient
              >
                Twitter
                <i className="fab fa-twitter" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
