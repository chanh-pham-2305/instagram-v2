import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/sign-in',
  },
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.png).*)'],
};
