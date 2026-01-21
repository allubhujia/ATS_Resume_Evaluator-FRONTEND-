import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
        Revolutionizing Resume Screening with AI
      </h1>
      <p className="text-lg md:text-xl text-blue-800 mb-10 max-w-3xl mx-auto leading-relaxed">
        ATS-powered insights to help you tailor your resume and increase your chances of landing the job.
      </p>
      <div className="flex sm:flex-row justify-center gap-4">
        <Link to="/upload">
          <Button variant="primary">Upload Your Resume</Button>
        </Link>
        <a href="#learn-more">
          <Button variant="secondary">Learn More</Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;