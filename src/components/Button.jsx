import React from 'react';
const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button' }) => {
  const baseStyles = 'px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105';
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-white bg-opacity-60 hover:bg-opacity-80 text-blue-900 backdrop-blur-sm',
    cta: 'bg-orange-500 hover:bg-orange-600 text-white'
  };
  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
