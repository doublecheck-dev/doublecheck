import { fetchAllBlogPosts } from '../../lib/supabaseClient';
import Link from 'next/link';
import Container from '../../components/atoms/Container';

export default async function BlogPage() {
  const posts = await fetchAllBlogPosts();

  return (
    <main className="py-16">
      <Container>
        <h1 className="text-3xl font-bold mb-6 text-secondary-900">Blog</h1>
        <div className="space-y-6">
          {posts.map((p: any) => (
            <article key={p.id} className="p-6 border border-gray-300 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold">
                <Link href={`/blog/${p.slug}`} className="text-secondary-900 hover:text-green-600 hover:underline transition-colors">{p.title}</Link>
              </h2>
              <p className="text-sm text-secondary-700 mt-2">{p.excerpt}</p>
              <div className="mt-3 text-sm">
                <Link href={`/blog/${p.slug}`} className="text-green-600 hover:text-accent-800 hover:underline font-medium transition-colors">Read more →</Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
