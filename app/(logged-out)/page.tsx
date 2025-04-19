import { Button } from "@/components/ui/button";
import React from "react";
import { PersonStandingIcon } from "lucide-react";

export default function LandingPage() {
  return (
    <>
      <h1 className="flex gap-2 items-center">
        <PersonStandingIcon size={50} className="text-pink-500" /> Support Me
      </h1>
      <p>the best dashboard to manage the custoemr support</p>
      <div className="flex gap-2 items-center">
        <Button>login</Button>
        <Button variant={"outline"}>sign up</Button>
      </div>
    </>
  );
}
