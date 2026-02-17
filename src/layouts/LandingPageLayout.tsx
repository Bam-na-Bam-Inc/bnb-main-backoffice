import React from "react";
import { useOutlet } from "react-router";

const LandingPageLayout = () => {
  const outlet = useOutlet();

  return (
    <div className="min-h-screen flex items-center justify-center">
      {outlet}
    </div>
  );
};

export default LandingPageLayout;
