import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="bg-black text-white">test Nav bar</nav>
      {children}
    </div>
  );
};

export default DashboardLayout;
