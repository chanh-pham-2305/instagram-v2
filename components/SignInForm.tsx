'use client';

// import { calSans } from "@/app/fonts";
import { signIn } from 'next-auth/react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import logoGoogleLink from '../public/images/google.png';

import React from 'react';
import Image from 'next/image';

export const SignInForm = () => {
  const { pending } = useFormStatus();
  return (
    <div className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className="mb-3 text-2xl dark:text-black">Please sign in to continue.</h1>
        <div className="flex flex-row justify-between items-center rounded-lg bg-secondary">
          <Image
            src={logoGoogleLink}
            width={32}
            height={32}
            className="object-cover rounded-full ml-4"
            alt="google-icon"
          />
          <Button
            className="w-full font-semibold"
            variant={'secondary'}
            aria-disabled={pending}
            onClick={() => signIn('google', { callbackUrl: '/' })}
          >
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
};
