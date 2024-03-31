import React, { ReactNode } from "react";

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-[80%] mx-auto py-10">{children}</div>
  );
};

export default Container;
