import React from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex justify-center">
      <nav className="mt-4 bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 rounded-4xl w-full max-w-6xl">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-white bg-opacity-30 p-2 rounded-lg backdrop-blur-sm">
                <FileText className="w-6 h-6 text-blue-900" />
              </div>
              <span className="text-xl font-bold text-blue-900">
                ATS Resume Analyzer
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-blue-900 hover:text-blue-700 font-medium transition-colors"
              >
                Home
              </Link>
              <a
                href="#features"
                className="text-blue-900 hover:text-blue-700 font-medium transition-colors"
              >
                Features
              </a>
              <Link to="/upload">
                <Button variant="cta" className="px-6 py-2 text-base">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
