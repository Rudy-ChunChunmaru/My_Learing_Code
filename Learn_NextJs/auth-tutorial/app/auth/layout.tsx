import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div
      className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
      from-sky-400 to-blue-800"
    >
      {children}
    </div>
  );
};

export default AuthLayout;
