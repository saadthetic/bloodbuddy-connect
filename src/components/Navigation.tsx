import { Heart, Hospital, Search, Trophy, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 flex justify-around items-center z-50">
      <Link to="/" className={`flex flex-col items-center ${isActive("/") ? "text-primary" : "text-gray-500"}`}>
        <Heart className="w-6 h-6" />
        <span className="text-xs">Requests</span>
      </Link>
      <Link to="/search" className={`flex flex-col items-center ${isActive("/search") ? "text-primary" : "text-gray-500"}`}>
        <Search className="w-6 h-6" />
        <span className="text-xs">Find Donors</span>
      </Link>
      <Link to="/hospitals" className={`flex flex-col items-center ${isActive("/hospitals") ? "text-primary" : "text-gray-500"}`}>
        <Hospital className="w-6 h-6" />
        <span className="text-xs">Hospitals</span>
      </Link>
      <Link to="/achievements" className={`flex flex-col items-center ${isActive("/achievements") ? "text-primary" : "text-gray-500"}`}>
        <Trophy className="w-6 h-6" />
        <span className="text-xs">Achievements</span>
      </Link>
      <Link to="/profile" className={`flex flex-col items-center ${isActive("/profile") ? "text-primary" : "text-gray-500"}`}>
        <User className="w-6 h-6" />
        <span className="text-xs">Profile</span>
      </Link>
    </nav>
  );
};

export default Navigation;