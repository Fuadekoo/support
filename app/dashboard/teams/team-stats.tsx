import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PieChartIcon, StarIcon, UserCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import cm from "@/public/image/cm.jpg";
import rl from "@/public/image/rl.jpg";
import tf from "@/public/image/tf.jpg";
import TeamDistributionGraph from "./team-distribution-graph";
import TeamDistributionPieChat from "./team-dictribution-piechart";

export default function TeamStats() {
  const total_teams = 55;
  const teamPercent = 52;
  const teamLeaders = [
    { firstName: "fuad", lastName: "abdurahman", avatar: cm },
    { firstName: "said", lastName: "abdurahman" },
    { firstName: "imran", lastName: "abdurahman" },
    { firstName: "jamal", lastName: "kalid", avatar: rl },
    { firstName: "fenet", lastName: "abdurahman" },
    { firstName: "fufu", lastName: "kalid", avatar: tf },
    { firstName: "amina", lastName: "yusuf" },
    { firstName: "mohamed", lastName: "ali" },
    { firstName: "sara", lastName: "mohamed" },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4 m-2">
        {/* CARD1 */}
        <Card>
          <CardHeader>
            <CardTitle>Total Teams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <UserCheck />
                <span>100</span>
              </div>
              <div>
                <Button size={"sm"}>hello</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* CARD 2 */}
        <Card>
          {" "}
          <CardHeader>
            <CardTitle>
              <div className="flex justify-between gap-4">
                <span>team leaders</span>
                <span className="text-yellow-600">
                  <StarIcon />
                </span>
              </div>{" "}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            {teamLeaders.map((teamLeader) => (
              <TooltipProvider
                key={`${teamLeader.firstName} ${teamLeader.lastName}`}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar>
                      {!!teamLeader.avatar && (
                        <Image
                          src={teamLeader.avatar}
                          alt={teamLeader.firstName}
                        />
                      )}
                      <AvatarFallback>
                        {teamLeader.firstName[0]} {teamLeader.lastName[0]}{" "}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {teamLeader.firstName} {teamLeader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>
        {/* card3 */}
        <Card>
          {" "}
          <CardHeader>
            <CardTitle>
              <div className="flex justify-between gap-4">
                <div>team distribution</div>
                <div>
                  <PieChartIcon />
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TeamDistributionPieChat />
          </CardContent>
        </Card>
      </div>
      <Card>
        {" "}
        <CardHeader>
          <CardTitle>hy</CardTitle>
        </CardHeader>
        <CardContent>
          <TeamDistributionGraph />
        </CardContent>
        <CardFooter>this is a footer</CardFooter>
      </Card>
    </>
  );
}
