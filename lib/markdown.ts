import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeSanitize from 'rehype-sanitize';

/**
 * renderMarkdown
 * - Accepts markdown or HTML in input.
 * - Processes markdown -> rehype -> sanitizes -> stringifies to safe HTML.
 */
export async function renderMarkdown(input: string) {
  // If empty, return empty string
  if (!input) return '';

  // Unified pipeline: markdown -> rehype -> sanitize -> html
  const file = await unified()
    .use(remarkParse) // parse markdown
    .use(remarkRehype, { allowDangerousHtml: true }) // convert to rehype (keep embedded HTML)
    .use(rehypeSanitize) // sanitize output (default schema)
    .use(rehypeStringify, { allowDangerousHtml: false })
    .process(input);

  return String(file);
}
