"use client";
import React, { useState, ReactNode } from "react";

interface ITabData {
  title: string;
  value: string;
  component: ReactNode;
}

export const TabComponent = ({ tabData }: { tabData: ITabData[] }) => {
  const [activeTab, setActiveTab] = useState(tabData[0]?.value);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="w-full h-screen">
      {/* Tab Headers */}
      <div className="h-[6vh] bg-gray-400 flex justify-center gap-4 items-center flex-wrap w-full">
        {tabData.map((tab) => (
          <button
            key={tab.value}
            className={`px-4 py-2 border-b-2 capitalize ${
              activeTab === tab.value
                ? "border-b-2 border-blue-500"
                : "border-transparent"
            }`}
            onClick={() => handleTabClick(tab.value)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="overflow-y-scroll h-[94vh] p-8">
        {tabData.map(
          (tab) =>
            activeTab === tab.value && (
              <div key={tab.value}>{tab.component}</div>
            )
        )}
      </div>
    </div>
  );
};
