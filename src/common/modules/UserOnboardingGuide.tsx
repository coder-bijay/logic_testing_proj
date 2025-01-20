"use client";

import React, { useEffect, useState } from "react";
import Joyride, { CallBackProps } from "react-joyride";

export const UserOnboardingGuide = () => {
  const [run, setRun] = useState(false); // Control whether the tour runs

  const steps = [
    {
      target: ".my-first-step",
      content: "This is the first step!",
    },
    {
      target: ".my-second-step",
      content: "Here is the second step!",
    },

    {
      target: ".my-third-step",
      content: "Here is the third step!",
    },
    {
      target: ".my-fourth-step",
      content: "Here is the fourth step!",
    },
    {
      target: ".my-fifth-step",
      content: "Here is the fifth step!",
    },
  ];

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;

    // Update the step index when the user navigates
    if (data.action === "next" || data.action === "prev") {
      // setStepIndex(index);
    }

    // Stop the tour when it finishes
    if (status === "finished" || status === "skipped") {
      setRun(false);
    }

    console.log("Joyride callback data:", data);
  };

  // Automatically start the tour when the component mounts
  useEffect(() => {
    setRun(true);
  }, []);
  return (
    <>
      <div className="flex gap-4">
        <h1 className="border border-gray-600 w-fit p-4 my-first-step">
          first step
        </h1>
        <button className="border border-gray-600 w-fit p-4 my-second-step">
          Click me
        </button>
        <h1 className="border border-gray-600 w-fit p-4 my-third-step">
          third step
        </h1>
        <button className="border border-gray-600 w-fit p-4 my-fourth-step">
          Click me
        </button>
        <h1 className="border border-gray-600 w-fit p-4 my-fifth-step">
          fifth step
        </h1>
      </div>
      <div className="h-[200px] w-[1000px] p-4 bg-red-500">Sidebar</div>
      <Joyride
        disableOverlay={false}
        showProgress
        disableOverlayClose
        showSkipButton
        steps={steps}
        run={run}
        continuous
        callback={handleJoyrideCallback}
      />
    </>
  );
};
