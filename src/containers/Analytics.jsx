import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] m-auto grid md:grid-cols-2 items-center">
        <img src={Laptop} alt="laptop" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="text-green-400 font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-green-400">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
