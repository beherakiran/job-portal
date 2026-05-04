import React from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';

const filterdata = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    filterType: "Industry",
    array: ["IT", "Finance", "Healthcare", "Education"]
  },
  {
    filterType: "Salary",
    array: ["0-40k", "40k-1lakh", "1lakh-5lakh"]
  }
];

const Filtercard = () => {
  return (
    <div className="p-4 bg-white rounded-md shadow w-full">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3 mb-4" />

      <RadioGroup>
        {filterdata.map((data, index) => (
          <div key={index} className="mb-4">
            
            <h2 className="font-semibold text-lg mb-2">{data.filterType}</h2>

            {data.array.map((item, i) => {
              const id = `${data.filterType}-${i}`;
              return (
                <div key={id} className="flex items-center gap-2 mb-1">
                  <RadioGroupItem value={item} id={id} />
                  <Label htmlFor={id}>{item}</Label>
                </div>
              );
            })}

          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default Filtercard;