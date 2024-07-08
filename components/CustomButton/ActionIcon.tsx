import { Button, ButtonProps } from '@/components/ui/button';

type ActionProps = Partial<ButtonProps> & {
  children: React.ReactNode;
};

export const ActionIcon = ({ children, ...buttonProps }: ActionProps) => {
  return (
    <Button
      type="submit"
      variant="ghost"
      size="icon"
      className="h-9 w-9"
      {...buttonProps}
    >
      {children}
    </Button>
  );
};
