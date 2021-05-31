import React from "react";
import AppHeader from "./AppHeader";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div className="container is-max-desktop">
      <AppHeader />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
