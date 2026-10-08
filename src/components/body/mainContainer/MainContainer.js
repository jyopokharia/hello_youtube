import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./videoContainer/VideoContainer";

const MainContainer = () => {
  return (
    <div className="min-w-0 flex-1 p-2">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
