import React from "react";

type Props = {
  children: React.ReactNode;
};

const Field = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Field;
