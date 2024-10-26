import React from 'react';

export const Loader = () => {
  console.log('render loader');
  return (
    <div className="border-gray-300 h-5 w-5 animate-spin rounded-full border-4 border-t-blue-600" />
  );
};
