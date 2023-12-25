import React from "react";

const App = () => {
  return (
    <>
      <nav className="fixed left-[50%] top-8 flex w-fit -translate-x-[50%] items-center gap-6 rounded-lg border-[1px] border-neutral-700 bg-neutral-900 p-2 text-sm text-neutral-500">
        <a href="#" className="block overflow-hidden ">
          <div className="h-[20px] hover:-translate-y-5 hover:duration-300 duration-300">
            <span className="flex h-[20px] items-center">Home</span>
            <span className="flex h-[20px] items-center text-neutral-50">
              Home
            </span>
          </div>
        </a>
        <a href="#" className="block overflow-hidden">
          <div className="h-[20px] hover:-translate-y-5 hover:duration-300 duration-300">
            <span className="flex h-[20px] items-center">About</span>
            <span className="flex h-[20px] items-center text-neutral-50">
              About
            </span>
          </div>
        </a>
        <a href="#" className="block overflow-hidden">
          <div className="h-[20px] hover:-translate-y-5 hover:duration-300 duration-300">
            <span className="flex h-[20px] items-center">Pricing</span>
            <span className="flex h-[20px] items-center text-neutral-50">
              Pricing
            </span>
          </div>
        </a>
      </nav>
    </>
  );
};

export default App;
