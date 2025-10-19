# DoubleCheck — Next.js site

1. Install:
   npm install

2. Ensure env file exists at project root:
   .env.local with:
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   NEXT_PUBLIC_USE_AUTH=false
   NEXT_PUBLIC_DEFAULT_LOCALE=es
   NEXT_PUBLIC_IMAGE_DOMAIN=doublecheck.com.co

3. Run dev:
   npm run dev

Notes:
- The site fetches content from Supabase tables defined in migrations/001_doublecheck_create_schema.sql.
- Blog post bodies are rendered as HTML (dangerouslySetInnerHTML). If your posts are Markdown, add a Markdown renderer and sanitize output.
- If images are stored by id in hero settings, add a small resolver to fetch image.url from images table and pass url to components.
