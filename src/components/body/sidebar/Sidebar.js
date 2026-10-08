import React from "react";

const Sidebar = () => {
  return (
    <div className="flex shrink-0 p-2 overflow-y-auto h-[calc(100vh-56px)]">
      <div aria-label="Sidebar" className="w-45">
        <ul className="flex flex-col gap-2 p-2 border-b border-gray-200">
          <li className="flex items-center gap-4 p-1 hover:bg-gray-100 ">
            <img className="h-6 w-6" alt="Home" src="/home.png" />
            <span>Home</span>
          </li>
          <li className="flex items-center gap-4 rounded-lg p-1 hover:bg-gray-100">
            <img className="h-6 w-6" alt="Subscriptions" src="/shorts.png" />
            <span>Shorts</span>
          </li>
        </ul>

        <h1 className="font-bold pt-5 p-3">Subscriptions </h1>
        <ul className="flex flex-col gap-2 px-4 border-b border-gray-200">
          <li className="flex items-center gap-4 rounded-lg p-1 hover:bg-gray-100 ">
            <img
              className="h-6 w-6"
              alt="Your Channel"
              src="/your-channel.png"
            />
            <span>Channel 1</span>
          </li>
          <li className="flex items-center gap-4 rounded-lg p-1 hover:bg-gray-100">
            <img
              className="h-6 w-6"
              alt="Your Channel"
              src="/your-channel.png"
            />
            <span>Channel 2</span>
          </li>
          <li className="flex items-center gap-4 rounded-lg p-1 hover:bg-gray-100">
            <img
              className="h-6 w-6"
              alt="Your Channel"
              src="/your-channel.png"
            />
            <span>Channel 3</span>
          </li>
          <li className="flex items-center gap-4 rounded-lg p-1 hover:bg-gray-100">
            <img
              className="h-6 w-6"
              alt="Your Channel"
              src="/your-channel.png"
            />
            <span>Channel 4</span>
          </li>
        </ul>

        <h1 className="font-bold pt-5 p-3">You </h1>
        <ul className="flex flex-col gap-2 px-4 border-b border-gray-200">
          <li className="flex items-center gap-4 rounded-lg p-1 hover:bg-gray-100 ">
            <img
              className="h-6 w-6"
              alt="Your Channel"
              src="/your-channel.png"
            />
            <span>Your channel</span>
          </li>
          <li className="flex items-center gap-4 rounded-lg p-1 hover:bg-gray-100">
            <img className="h-6 w-6" alt="History" src="/history.png" />
            <span>History</span>
          </li>
          <li className="flex items-center gap-4 rounded-lg p-1 hover:bg-gray-100">
            <img className="h-6 w-6" alt="Watch later" src="/watch-later.png" />
            <span>Watch later</span>
          </li>
          <li className="flex items-center gap-4 rounded-lg p-1 hover:bg-gray-100">
            <img className="h-6 w-6" alt="Liked video" src="/like.png" />
            <span>Liked video</span>
          </li>
          <li className="flex items-center gap-4 rounded-lg p-1 hover:bg-gray-100">
            <img className="h-6 w-6" alt="Downloads" src="/download.png" />
            <span>Downloads</span>
          </li>
        </ul>

        <h1 className="font-bold pt-5 p-3">Explore </h1>
        <ul className="flex flex-col gap-2 px-4 border-b border-gray-200">
          <li className="flex items-center gap-4 rounded-lg p-1 hover:bg-gray-100 ">
            <img className="h-6 w-6" alt="Music" src="/music.png" />
            <span>Music</span>
          </li>
          <li className="flex items-center gap-4 rounded-lg p-1 hover:bg-gray-100">
            <img className="h-6 w-6" alt="Movies" src="/movies.png" />
            <span>Movies</span>
          </li>
          <li className="flex items-center gap-4 rounded-lg p-1 hover:bg-gray-100">
            <img className="h-6 w-6" alt="News" src="/news.png" />
            <span>News</span>
          </li>
          <li className="flex items-center gap-4 rounded-lg p-1 hover:bg-gray-100">
            <img className="h-6 w-6" alt="Live" src="/live.png" />
            <span>Live</span>
          </li>
        </ul>
        <h1 className="font-bold pt-5 p-3 border-b border-gray-200">Report </h1>
        <h1 className="font-bold pt-5 p-3">About </h1>
      </div>
    </div>
  );
};

export default Sidebar;
