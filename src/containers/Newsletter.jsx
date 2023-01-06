import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-center gap-9">
        <div>
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="py-2">Sign up to out newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter your email"
            />
            <button className="w-[150px] rounded-md font-medium ml-4 my-6 py-3 px-6 bg-green-400 text-black">
              Notify me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-green-400 underline cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
