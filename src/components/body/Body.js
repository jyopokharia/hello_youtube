import React from "react";
import Sidebar from "./sidebar/Sidebar";
import MainContainer from "./mainContainer/MainContainer";

const Body = () => {
  return (
    <div className="flex px-4 gap-1">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
