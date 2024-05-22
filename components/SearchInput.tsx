import React from 'react';
import { Input } from './ui/input';
import { Search, X } from 'lucide-react';

export const SearchInput = () => {
  return (
    <div className="flex flex-row w-full m-2 rounded-lg bg-secondary/80">
      <Input
        placeholder='Search'
        className="search-input peer"
        type='text'
      />
      <div className='icon-searchInput flex peer-focus:hidden'>
        <Search />
      </div>
      <div className='icon-searchInput hidden peer-focus:flex '>
        <X/>
      </div>
    </div>
  );
};
