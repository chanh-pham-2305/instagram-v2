import React from 'react';

const authLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid place-items-center h-screen">{children}</div>;
};

export default authLayout;
