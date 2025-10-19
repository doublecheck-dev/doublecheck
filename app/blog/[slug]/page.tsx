import { fetchBlogPostBySlug } from '../../../lib/supabaseClient';
import Container from '../../../components/atoms/Container';
import { renderMarkdown } from '../../../lib/markdown';

type Props = { params: { slug: string } };

export default async function BlogPostPage({ params }: Props) {
  const post = await fetchBlogPostBySlug(params.slug);
  if (!post) {
    return (
      <main className="py-16">
        <Container>
          <h1 className="text-2xl font-bold text-secondary-900">Post not found</h1>
        </Container>
      </main>
    );
  }

  const html = await renderMarkdown(post.body || '');

  return (
    <main className="py-16">
      <Container>
        <article className="max-w-3xl">
          <h1 className="text-3xl font-bold mb-4 text-secondary-900">{post.title}</h1>
          <p className="text-sm text-secondary-700 mb-6 font-medium">{post.published_at ? new Date(post.published_at).toLocaleDateString() : ''}</p>
          <div className="prose prose-secondary max-w-none prose-headings:text-secondary-900 prose-p:text-secondary-800 prose-a:text-green-600 hover:prose-a:text-accent-800 prose-strong:text-secondary-900" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </Container>
    </main>
  );
}
