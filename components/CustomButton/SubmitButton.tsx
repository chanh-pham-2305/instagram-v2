'use client';

import { Button, ButtonProps } from '@/components/ui/button';

import { useFormStatus } from 'react-dom';

type IconProps = ButtonProps & {
  children: React.ReactNode;
};

export const SubmitButton = ({ children, ...props }: IconProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      {...props}
    >
      {children}
    </Button>
  );
};
