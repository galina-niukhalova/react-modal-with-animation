import React from "react";

function Title({ children }: TitleProps) {
  return <h1>{children}</h1>;
}

interface TitleProps {
  children: string | React.ReactNode,
}

export default Title;
