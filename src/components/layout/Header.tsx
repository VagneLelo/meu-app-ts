import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string): string => {
    return location.pathname === path
      ? "text-blue-600 border-b-2 border-blue-600"
      : "text-gray-600 hover:text-blue-500";
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Meu App TS
          </Link>
          <div className="space-x-6">
            <Link to="/" className={`font-medium transition ${isActive("/")}`}>
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition ${isActive("/about")}`}
            >
              Sobre
            </Link>
            <Link
              to="/users"
              className={`font-medium transition ${isActive("/users")}`}
            >
              Usuários
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
