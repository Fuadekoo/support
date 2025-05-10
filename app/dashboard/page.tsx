import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";
import EmployeesStats from "./components/employees-stats";

function Page() {
  return (
    <Tabs defaultValue="employees">
      <TabsList>
        <TabsTrigger value="employees">Employee status</TabsTrigger>
        <TabsTrigger value="teams">Teams Stats</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">
        <EmployeesStats />
      </TabsContent>
      <TabsContent value="teams">teams tab view</TabsContent>
    </Tabs>
  );
}

export default Page;
