import { cn } from '@/lib/utils';
import { followUser } from '@/lib/actions';

import { buttonVariants } from '@/components/ui/button';
import { SubmitButton } from './SubmitButton';

type FollowButtonProps = {
  profileId: string;
  isFollowing?: boolean;
  className?: string;
  buttonClassName?: string;
};

export const FollowButton = ({
  profileId,
  isFollowing,
  className,
  buttonClassName,
}: FollowButtonProps) => {
  return (
    <form
      action={followUser}
      className={className}
    >
      <input
        type="hidden"
        value={profileId}
        name="id"
      />
      <SubmitButton
        className={buttonVariants({
          variant: isFollowing ? 'secondary' : 'default',
          className: cn('!font-bold w-full', buttonClassName),
          size: 'sm',
        })}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </SubmitButton>
    </form>
  );
};
