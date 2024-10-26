'use client';
import React, { useEffect, useId, useState } from 'react';

import { Post } from './Post';
import { fetchPosts } from '@/lib/data';
import { PostWithExtras } from '@/lib/definitions';
import { Loader } from '../Loader';
import { useInView } from 'react-intersection-observer';
const LoadMore = () => {
  const [posts, setPosts] = useState<PostWithExtras[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);
  const [ref, inView] = useInView();
  const QUANTITY = 2;

  const loadPosts = async () => {
    setLoading(true);
    const moreData = await fetchPosts(count * QUANTITY, QUANTITY);
    setPosts((prev) => [...prev, ...moreData]);
    setCount((prev) => prev + 1);
    setLoading(false);
  };

  useEffect(() => {
    const isEndPage =
      window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 100;
    if (isEndPage && inView) {
      loadPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  console.log(posts);
  return (
    <>
      {posts.length > 0 &&
        posts.map((post: PostWithExtras) => (
          <Post
            key={'' + Math.floor(Math.random() * 1000)}
            post={post}
          />
        ))}
      {loading && <Loader />}
      <div ref={ref}></div>
    </>
  );
};

export default LoadMore;
