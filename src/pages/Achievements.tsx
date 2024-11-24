import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy } from "lucide-react";
import { useState } from "react";

interface Achievement {
  id: number;
  title: string;
  description: string;
  progress: number;
  total: number;
  completed: boolean;
}

const Achievements = () => {
  const [achievements] = useState<Achievement[]>([
    {
      id: 1,
      title: "First Time Donor",
      description: "Complete your first blood donation",
      progress: 1,
      total: 1,
      completed: true
    },
    {
      id: 2,
      title: "Regular Donor",
      description: "Donate blood 5 times",
      progress: 3,
      total: 5,
      completed: false
    },
    {
      id: 3,
      title: "Life Saver",
      description: "Help save 10 lives through donations",
      progress: 6,
      total: 10,
      completed: false
    }
  ]);

  return (
    <div className="pb-20 animate-fade-in">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-2xl font-bold">Achievements</h1>
            <p className="text-sm text-gray-500">Track your donation milestones</p>
          </div>
        </div>

        <div className="space-y-4">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className={`p-4 ${achievement.completed ? 'bg-red-50' : ''}`}>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-sm text-gray-500">{achievement.description}</p>
                  </div>
                  {achievement.completed && (
                    <Trophy className="w-5 h-5 text-primary" />
                  )}
                </div>
                
                <div className="space-y-2">
                  <Progress value={(achievement.progress / achievement.total) * 100} />
                  <p className="text-sm text-gray-500 text-right">
                    {achievement.progress} / {achievement.total}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;