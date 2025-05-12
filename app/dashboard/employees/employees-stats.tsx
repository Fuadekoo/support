import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Badge,
  BadgeCentIcon,
  BadgeCheckIcon,
  LaptopIcon,
  PartyPopper,
  User,
  UserCheckIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import Image from "next/image";
import image1 from "@/public/image/cm.jpg";
import image2 from "@/public/image/rl.jpg";
import image3 from "@/public/image/tf.jpg";
import WorkLocationTrends from "./work-location-trends";
export default function EmployeesStats() {
  const totalemployees = 100;
  const presentEmployees = 80;
  const employeesPresentPercentage = (presentEmployees / totalemployees) * 100;
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>total employees</CardTitle>
          </CardHeader>

          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UserIcon />
              <div className="text-5xl font-bold">100</div>
            </div>
            <div>
              <Button size={"xs"} asChild>
                <Link href="/dashboard/employees">view all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* the second card */}
        <Card>
          <CardHeader>
            <CardTitle>employees percent</CardTitle>
          </CardHeader>

          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UserCheckIcon />
              <div className="text-5xl font-bold">{presentEmployees}</div>
            </div>
          </CardContent>
          <CardFooter>
            <span className="test-xs text-green-500 flex items-center gap-2">
              {employeesPresentPercentage > 75 ? (
                <span>
                  <BadgeCheckIcon />
                  80% employes are present
                </span>
              ) : (
                <span className="text-red-500">
                  <User />
                  {employeesPresentPercentage} % employees are present
                </span>
              )}
            </span>
          </CardFooter>
        </Card>
        {/* the third card */}
        <Card className="border-pink-500 flex flex-col gap-2">
          <CardHeader>
            <CardTitle>employees of the month</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-2">
            <Avatar>
              <Image
                src={image1}
                alt="nodata"
                className="rounded-4xl size-10"
              />
              <AvatarFallback>ak</AvatarFallback>
            </Avatar>
            <span className="text-2xl">Colin Murray</span>
          </CardContent>
          <CardFooter className="flex gap-2 item-center text-xs text-muted-foreground mt-auto">
            <PartyPopper className="text-pink-500" />
            <span>Congratulation ,colin!</span>
          </CardFooter>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <LaptopIcon />
            <span> employee wirk location trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* <h1>thi is </h1> */}
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </>
  );
}
