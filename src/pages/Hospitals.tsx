import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Search as SearchIcon } from "lucide-react";
import { useState } from "react";

interface Hospital {
  id: number;
  name: string;
  location: string;
  phone: string;
  distance: string;
}

const Hospitals = () => {
  const [hospitals] = useState<Hospital[]>([
    {
      id: 1,
      name: "City General Hospital",
      location: "123 Medical Ave, New York, NY",
      phone: "(555) 123-4567",
      distance: "0.8 miles away"
    },
    {
      id: 2,
      name: "Metropolitan Blood Center",
      location: "456 Health St, New York, NY",
      phone: "(555) 987-6543",
      distance: "1.2 miles away"
    }
  ]);

  return (
    <div className="pb-20 animate-fade-in">
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold">Find Hospitals</h1>
        
        <div className="flex gap-2">
          <Input placeholder="Search hospitals" className="flex-1" />
          <Button className="bg-primary hover:bg-red-700">
            <SearchIcon className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-4 mt-6">
          {hospitals.map((hospital) => (
            <Card key={hospital.id} className="p-4">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold">{hospital.name}</h3>
                  <p className="text-sm text-gray-500">{hospital.distance}</p>
                </div>
                
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{hospital.location}</span>
                </div>
                
                <div className="flex items-center text-gray-500">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">{hospital.phone}</span>
                </div>
                
                <Button className="w-full bg-primary hover:bg-red-700">Get Directions</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hospitals;