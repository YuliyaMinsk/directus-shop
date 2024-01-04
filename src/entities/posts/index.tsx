'use client';

import { useQuery } from '@tanstack/react-query';

import { getHomepagePosts } from 'shared/queries';

export default function Posts() {
  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: getHomepagePosts,
  });

  return (
    <>
      {posts?.map((post) => (
        <article key={post.id} className="flex flex-col items-center justify-between">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </>
  );
}
