import { fetchAllBlogPosts } from '../../lib/supabaseClient';
import Link from 'next/link';
import Container from '../../components/atoms/Container';

export default async function BlogPage() {
  const posts = await fetchAllBlogPosts();

  return (
    <main className="py-16">
      <Container>
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <div className="space-y-6">
          {posts.map((p: any) => (
            <article key={p.id} className="p-6 border rounded-md">
              <h2 className="text-xl font-semibold">
                <Link href={`/blog/${p.slug}`} className="text-primary hover:underline">{p.title}</Link>
              </h2>
              <p className="text-sm text-gray-600 mt-2">{p.excerpt}</p>
              <div className="mt-3 text-sm">
                <Link href={`/blog/${p.slug}`} className="text-accent hover:underline">Read more →</Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
