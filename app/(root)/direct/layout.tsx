'use client'
import { MessengerDialog } from '@/components/Messenger/MessengerDialog';
import { MessengerFriends } from '@/components/Messenger/MessengerFriends';
import { useCallback, useState } from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = useCallback(() => {
    setOpen((prev) => !prev);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  return (
    <div className="flex flex-row h-screen w-full">
      <MessengerFriends onOpen={handleClick} />
      {children}
      <MessengerDialog open={open} onOpen={handleClick}/>
    </div>
  );
}
