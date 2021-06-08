// import "bulma/css/bulma.min.css";

import React from "react";
import RootLayout from "./src/components/RootLayout";

// THEMES
// element is the page
export const wrapRootElement = ({ element }) => {
  return <RootLayout>{element}</RootLayout>;
};
