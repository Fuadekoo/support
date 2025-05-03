import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[250px_1fr]">
      <div className="bh-muted">sidebar panel</div>
      <div className="border-4 border-amber-400">{children}</div>
      {/* <div className="border-4 border-amber-400">footer page</div> */}
    </div>
  );
}

export default DashboardLayout;
