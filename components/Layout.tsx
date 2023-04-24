import React, { ReactNode } from "react";

type LayoutProp = {
  children?: ReactNode;
};

function Layout({ children }: LayoutProp) {
  return <div>Layout</div>;
}

export default Layout;
