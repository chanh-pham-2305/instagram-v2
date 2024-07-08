import React from 'react';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';

export const SearchInput = () => {
  return (
    <div className="flex flex-row justify-center items-center w-[364px] h-[40px] mb-6 bg-[#262626] rounded-lg">
      <Input
        placeholder="Search"
        className="h-full rounded-none peer border-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-inherit leading-6 text-base font-semibold rounded-l-[10px]"
        type="text"
      />
      <div className="w-[40px] h-full flex items-center justify-center peer-focus:hidden bg-transparent rounded-r-[10px]">
        <Search />
      </div>
      <div className="w-[40px] h-full items-center justify-center hidden bg-inherit peer-focus:flex rounded-r-[10px]">
        <X />
      </div>
    </div>
  );
};
