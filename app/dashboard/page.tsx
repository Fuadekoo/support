import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";
import TeamStats from "./teams/team-stats";
import EmployeesStats from "./employees/employees-stats";

function Page() {
  return (
    <Tabs defaultValue="employees">
      <TabsList className="mb-4">
        <TabsTrigger value="employees">Employee status</TabsTrigger>
        <TabsTrigger value="teams">Teams Stats</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">
        <EmployeesStats />
      </TabsContent>
      <TabsContent value="teams">
        <TeamStats />
      </TabsContent>
    </Tabs>
  );
}

export default Page;
