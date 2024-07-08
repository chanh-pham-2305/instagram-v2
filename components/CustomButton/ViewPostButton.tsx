import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const ViewPostButton = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex p-3', className)}>
      <Button
        onClick={() => window.location.reload()}
        className="text-sky-500 hover:text-sky-700 font-semibold text-sm"
      >
        View detail post
      </Button>
    </div>
  );
};
