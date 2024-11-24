import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Award, Calendar, MapPin } from "lucide-react";
import { useState } from "react";

interface Profile {
  name: string;
  bloodType: string;
  location: string;
  lastDonation: string;
  totalDonations: number;
}

const Profile = () => {
  const [profile] = useState<Profile>({
    name: "John Doe",
    bloodType: "O+",
    location: "New York City",
    lastDonation: "March 15, 2024",
    totalDonations: 5
  });

  return (
    <div className="pb-20 animate-fade-in">
      <div className="p-4 space-y-6">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-500">
              {profile.name.charAt(0)}
            </span>
          </div>
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <p className="text-gray-500">{profile.location}</p>
        </div>

        <Card className="p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-red-50 rounded-lg">
              <p className="text-sm text-gray-500">Blood Type</p>
              <p className="text-xl font-bold text-primary">{profile.bloodType}</p>
            </div>
            <div className="text-center p-3 bg-red-50 rounded-lg">
              <p className="text-sm text-gray-500">Donations</p>
              <p className="text-xl font-bold text-primary">{profile.totalDonations}</p>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Edit Profile</h2>
          
          <div className="space-y-3">
            <Input placeholder="Full Name" defaultValue={profile.name} />
            
            <Select defaultValue={profile.bloodType}>
              <SelectTrigger>
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
            
            <Input placeholder="Location" defaultValue={profile.location} />
          </div>

          <Button className="w-full bg-primary hover:bg-red-700">Save Changes</Button>
        </div>

        <Card className="p-4">
          <h3 className="font-semibold mb-4">Donation History</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium">Last Donation</p>
                <p className="text-sm text-gray-500">{profile.lastDonation}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium">Total Donations</p>
                <p className="text-sm text-gray-500">{profile.totalDonations} times</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium">Preferred Location</p>
                <p className="text-sm text-gray-500">{profile.location}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;