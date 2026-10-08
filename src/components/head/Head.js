import React from "react";

const Head = () => {
  return (
    <header className="grid grid-flow-col h-14 items-center justify-between border-b border-gray-200 px-4">
      <div className="flex col-span-2 w-1/4 min-w-32 items-center gap-4">
        <img className="h-5 w-5" alt="Menu" src="/hamburger-menu-icon.png" />
        <img className="h-7" alt="YouTube" src="/youtube-logo.png" />
      </div>
      <div className="flex col-span-9 justify-center h-10">
        <input
          type="search"
          placeholder="Search"
          aria-label="Search"
          className="w-1/2 border border-gray-300 pl-4 rounded-l-3xl"
        />
        <button
          type="submit"
          aria-label="Search"
          className="flex w-16 items-center justify-center border border-gray-300 bg-gray-50 hover:bg-gray-100 rounded-r-3xl "
        >
          <img className="h-6 w-6" alt="" src="/search-icon.png" />
        </button>
      </div>
      <div className="flex col-span-1 w-1/4 min-w-32 justify-end">
        <img
          className="h-8 w-8 rounded-full"
          alt="User profile"
          src="/user-icon.png"
        />
      </div>
    </header>
  );
};

export default Head;
