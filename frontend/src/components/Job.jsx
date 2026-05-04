import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Bookmark } from "lucide-react";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button>
          <Avatar>
            <AvatarImage src="https://cdn-icons-png.flaticon.com/128/5968/5968331.png" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div >
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, 
            reprehenderit cupiditate 
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
         <div className="flex items-center gap-4 mt-4">
        <Button variant='outline'>Details</Button>
        <Button className='bg-[#7209b7]'>Save for later</Button>
         </div>
      </div>
  );
};

export default Job;
