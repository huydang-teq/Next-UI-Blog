import { ILayout } from "@src/Types";
import { Fragment } from "react";
export const BaseLayout: React.FC<ILayout> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};
