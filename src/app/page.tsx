import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import Posts from 'entities/posts';

import { getHomepagePosts } from 'shared/queries';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: getHomepagePosts,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next 14</h1>
      <div className="flex flex-col items-center justify-between">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Posts />
        </HydrationBoundary>
      </div>
    </main>
  );
}
