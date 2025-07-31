import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex justify-center pt-40">
      {/* Render the children here */}
      {children}
    </div>
  );
};

export default AuthLayout;
