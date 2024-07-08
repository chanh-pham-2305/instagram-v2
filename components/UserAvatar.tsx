import { Avatar } from '@/components/ui/avatar';
import type { AvatarProps } from '@radix-ui/react-avatar';
import type { User } from 'next-auth';
import { UserWithExtras } from '@/lib/definitions'
import noavatar from '@/public/images/noavatar.png'
import Image from 'next/image';

type Props = Partial<AvatarProps> & {
  userAvatar: User | UserWithExtras | undefined;
}

export const UserAvatar = ({ userAvatar, ...avatarProps }: Props) => {
  const user = userAvatar
  return (
    <Avatar
      className="relative h-8 w-8"
      {...avatarProps}
    >
      <Image
        src={
          user?.image || noavatar
        }
        fill
        sizes='w-8'
        alt={`${user?.name}'s profile picture`}
        className="rounded-full object-cover"
      />
    </Avatar>
  );
};
