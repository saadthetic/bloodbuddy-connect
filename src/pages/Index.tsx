import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface BloodRequest {
  id: number;
  bloodType: string;
  location: string;
  urgency: string;
  postedAt: string;
  hospital: string;
}

const Index = () => {
  const navigate = useNavigate();
  const [requests] = useState<BloodRequest[]>([
    {
      id: 1,
      bloodType: "A+",
      location: "New York City",
      urgency: "High",
      postedAt: "2 hours ago",
      hospital: "NYC General Hospital"
    },
    {
      id: 2,
      bloodType: "O-",
      location: "Los Angeles",
      urgency: "Medium",
      postedAt: "5 hours ago",
      hospital: "LA Medical Center"
    }
  ]);

  return (
    <div className="pb-20 animate-fade-in">
      <div className="flex justify-between items-center mb-6 px-4">
        <h1 className="text-2xl font-bold">Blood Requests</h1>
        <Button 
          className="bg-primary hover:bg-red-700"
          onClick={() => navigate("/new-request")}
        >
          <Plus className="w-4 h-4 mr-2" />
          New Request
        </Button>
      </div>
      
      <div className="space-y-4 px-4">
        {requests.map((request) => (
          <Card key={request.id} className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-2 py-1 bg-red-100 text-primary rounded-full text-sm font-semibold">
                  {request.bloodType}
                </span>
                <h3 className="mt-2 font-semibold">{request.hospital}</h3>
                <p className="text-sm text-gray-500">{request.location}</p>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500">{request.postedAt}</span>
                <p className="mt-1 text-sm font-medium text-orange-500">{request.urgency} Priority</p>
              </div>
            </div>
            <Button className="w-full mt-4 bg-primary hover:bg-red-700">Contact</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;