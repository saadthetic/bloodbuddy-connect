import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Award, Calendar, MapPin } from "lucide-react";
import { useState } from "react";

interface Profile {
  name: string;
  bloodType: string;
  location: string;
  lastDonation: string;
  totalDonations: number;
  isAvailable: boolean;
  nextAvailableDate: string;
}

const Profile = () => {
  const [profile] = useState<Profile>({
    name: "John Doe",
    bloodType: "O+",
    location: "New York City",
    lastDonation: "March 15, 2024",
    totalDonations: 5,
    isAvailable: true,
    nextAvailableDate: "April 15, 2024"
  });

  const [isAvailable, setIsAvailable] = useState(profile.isAvailable);

  return (
    <div className="pb-20 animate-fade-in">
      <div className="p-4 space-y-6">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-500 dark:text-gray-400">
              {profile.name.charAt(0)}
            </span>
          </div>
          <h1 className="text-2xl font-bold dark:text-white">{profile.name}</h1>
          <p className="text-gray-500 dark:text-gray-400">{profile.location}</p>
        </div>

        <Card className="p-4 dark:bg-gray-800">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Blood Type</p>
              <p className="text-xl font-bold text-primary">{profile.bloodType}</p>
            </div>
            <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Donations</p>
              <p className="text-xl font-bold text-primary">{profile.totalDonations}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold dark:text-white">Donor Availability</h3>
            <Switch
              checked={isAvailable}
              onCheckedChange={setIsAvailable}
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isAvailable ? "Available for donation" : "Not available for donation"}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Next available date: {profile.nextAvailableDate}
          </p>
        </Card>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold dark:text-white">Edit Profile</h2>
          
          <div className="space-y-3">
            <Input placeholder="Full Name" defaultValue={profile.name} className="dark:bg-gray-800 dark:border-gray-700" />
            
            <Select defaultValue={profile.bloodType}>
              <SelectTrigger className="dark:bg-gray-800 dark:border-gray-700">
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
            
            <Input placeholder="Location" defaultValue={profile.location} className="dark:bg-gray-800 dark:border-gray-700" />
          </div>

          <Button className="w-full bg-primary hover:bg-red-700">Save Changes</Button>
        </div>

        <Card className="p-4 dark:bg-gray-800">
          <h3 className="font-semibold mb-4 dark:text-white">Donation History</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <div>
                <p className="font-medium dark:text-white">Last Donation</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{profile.lastDonation}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <div>
                <p className="font-medium dark:text-white">Total Donations</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{profile.totalDonations} times</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <div>
                <p className="font-medium dark:text-white">Preferred Location</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{profile.location}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;