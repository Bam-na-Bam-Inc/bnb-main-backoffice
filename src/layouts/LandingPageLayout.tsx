import React from "react";
import { useOutlet } from "react-router";

const LandingPageLayout = () => {
  const outlet = useOutlet();

  return <div>{outlet}</div>;
};

export default LandingPageLayout;
