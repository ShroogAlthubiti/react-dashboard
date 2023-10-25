import Chart from "./Chart";
import React from "react";

function Dashboard() {
  return (
    <div className="py-12 px-14 space-y-10 flex flex-col">
      <h2>Dashboard</h2>
      <div className="flex space-x-8">
        <div className="w-2/3 h-[150px] border rounded flex flex-col justify-center p-4 mt-5 text-gray-600">
          <span> Shroog </span>
          <span className="text-gray-500"> Your Balance: SR 30000 </span>
        </div>
        <div className="w-2/3 h-[150px] border  rounded flex flex-col justify-center p-4 mt-5 text-gray-600">
          <span> Shroog </span>
          <span className="text-gray-500"> Your Expenses: SR 20000 </span>
        </div>
      </div>

      <div className="flex flex-col">
        <h2>Expenses Chart</h2>
        <Chart className="w-4/5"/>
        <div className="flex space-x-8">
          <div className="w-2/3 h-[150px] border rounded flex flex-col justify-center p-4 mt-5 text-gray-600">
            <span> Your Activity </span>
            <span className="text-gray-500">
              {" "}
              Your sent SR 3000 to your month{" "}
            </span>
          </div>
          <div className="w-2/3 h-[150px] border  rounded flex flex-col justify-center p-4 mt-5 text-gray-600">
            <span> Pending Bills </span>
            <span className="text-gray-500"> BroadBand Bill: SR 20000 </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
