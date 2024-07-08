import { Posts } from '@/components/Post/Posts';
import { PostsSkeleton } from '@/components/Skeletons';
import React from 'react';
import { Suspense } from 'react';

const Home = () => {
  return (
    <main className="flex w-full flex-grow">
      <div className="flex flex-col flex-1 gap-y-8 max-w-lg mx-auto pb-20">
        <Suspense fallback={<PostsSkeleton />}>
          <Posts />
        </Suspense>
        {/* <h1>HOME PAGE</h1> */}
      </div>
    </main>
  );
};

export default Home;
