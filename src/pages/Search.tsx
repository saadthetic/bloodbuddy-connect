import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

interface Donor {
  id: number;
  name: string;
  bloodType: string;
  location: string;
  lastDonation: string;
  donations: number;
}

const Search = () => {
  const [donors] = useState<Donor[]>([
    {
      id: 1,
      name: "John Doe",
      bloodType: "O+",
      location: "Brooklyn, NY",
      lastDonation: "2 months ago",
      donations: 5
    },
    {
      id: 2,
      name: "Jane Smith",
      bloodType: "A-",
      location: "Queens, NY",
      lastDonation: "1 month ago",
      donations: 8
    }
  ]);

  return (
    <div className="pb-20 animate-fade-in">
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold">Find Donors</h1>
        
        <div className="flex gap-2">
          <Input placeholder="Search by location" className="flex-1" />
          <Select>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Blood Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A+">A+</SelectItem>
              <SelectItem value="A-">A-</SelectItem>
              <SelectItem value="B+">B+</SelectItem>
              <SelectItem value="B-">B-</SelectItem>
              <SelectItem value="O+">O+</SelectItem>
              <SelectItem value="O-">O-</SelectItem>
              <SelectItem value="AB+">AB+</SelectItem>
              <SelectItem value="AB-">AB-</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-primary hover:bg-red-700">
            <SearchIcon className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-4 mt-6">
          {donors.map((donor) => (
            <Card key={donor.id} className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{donor.name}</h3>
                  <p className="text-sm text-gray-500">{donor.location}</p>
                  <div className="mt-2">
                    <span className="inline-block px-2 py-1 bg-red-100 text-primary rounded-full text-sm font-semibold">
                      {donor.bloodType}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Last donation: {donor.lastDonation}</p>
                  <p className="text-sm font-medium mt-1">
                    {donor.donations} donations
                  </p>
                </div>
              </div>
              <Button className="w-full mt-4 bg-primary hover:bg-red-700">Contact Donor</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;