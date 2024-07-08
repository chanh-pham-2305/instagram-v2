import { MessengerFriends } from '@/components/Messenger/MessengerFriends';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <MessengerFriends />
      {children}
    </div>
  );
}
