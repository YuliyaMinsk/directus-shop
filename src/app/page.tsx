import { getHomepagePosts } from 'shared/queries';

export default async function Home() {
  const posts = await getHomepagePosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next 14</h1>
      <div className="flex flex-col items-center justify-between">
        {posts.map((post) => (
          <article key={post.id} className="flex flex-col items-center justify-between">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
