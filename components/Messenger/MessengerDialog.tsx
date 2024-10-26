import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from '@/components/ui/dialog';
import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { fetchProfile } from '@/lib/data';
import { User } from '@prisma/client';
import useDebounce from '@/hooks/useDebounce';
type MessengerDialogProps = {
  open?: boolean;
  onOpen: () => void;
};

export const MessengerDialog = ({ open = false, onOpen }: MessengerDialogProps) => {
  const [query, setQuery] = useState<string>('');
  const debouncedSearch = useDebounce(query, 500)
  const [user2, setUser2] = useState<User>({} as User);

  // useEffect(() => {
  //   if(debouncedSearch){
  //     const result = await fetchProfile(debouncedSearch);
  //     setUser2(result);
  //   }``
  // }, [debouncedSearch]);

  // const handleClick = () => {
  //   // const user2 = fetchProfile(input)
  // };

  return (
    <div>
      <Dialog
        open={open}
        onOpenChange={(o) => !o}
      >
        <DialogContent className="w-[558px] h-[664px] flex flex-col items-center rounded-xl overflow-hidden p-0 m-0 gap-y-0">
          <DialogHeader className="w-full h-[72px] flex flex-row justify-between items-center border-b">
            <div className="w-[48px] h-full"></div>
            <DialogTitle className="flex-1 text-md text-center font-bold">New message</DialogTitle>
            <DialogClose>
              <X
                onClick={onOpen}
                className="w-10 h-10 p-1 mr-2"
              />
            </DialogClose>
          </DialogHeader>
          <div className="w-full px-4 flex flex-row items-center ">
            <span className="pr-2">To:</span>
            <Input
              type="string"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <div className="flex flex-1 w-full border-t overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            No match found
          </div>
          <DialogFooter className="p-4 w-full h-[76px]">
            <Button
              // onClick={handleClick}
              disabled={!!query}
              className="h-full flex w-full bg-[#0095F6] hover:bg-[#1877F2] dark:text-white"
            >
              Chat
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
