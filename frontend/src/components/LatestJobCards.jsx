import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCards = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">Company Name</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Badge variant="outline" className="text-blue-700 border-gray-700 font-bold rounded-lg">
          12 positions
        </Badge>

        <Badge variant="outline" className="text-[#F83002] border-gray-700 font-bold rounded-lg">
          part time
        </Badge>

        <Badge variant="outline" className="text-[#7209b7] border-gray-700 font-bold rounded-lg">
          10 Lpa
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
