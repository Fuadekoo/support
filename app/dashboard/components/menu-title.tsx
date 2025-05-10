import React from "react";
import { PersonStandingIcon } from "lucide-react";

function MenuTitle() {
  return (
    <div className=" flex items-center">
      <PersonStandingIcon className="text-primary" size={40} /> SupportMe
    </div>
  );
}

export default MenuTitle;
