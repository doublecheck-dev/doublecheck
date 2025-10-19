-- Enable UUID generator
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Images store
CREATE TABLE IF NOT EXISTS images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL,
  alt text,
  caption text,
  width int,
  height int,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Social networks (header/footer links)
CREATE TABLE IF NOT EXISTS social_networks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  url text NOT NULL,
  icon_image_id uuid REFERENCES images(id) ON DELETE SET NULL,
  "order" int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Pages
CREATE TABLE IF NOT EXISTS pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text,
  meta_title text,
  meta_description text,
  is_published boolean DEFAULT false,
  locale text DEFAULT 'en',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz
);

-- Header settings (single row per project or multiple if you want versions)
CREATE TABLE IF NOT EXISTS header_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  logo_image_id uuid REFERENCES images(id) ON DELETE SET NULL,
  show_cta boolean DEFAULT false,
  cta_text text,
  cta_url text,
  nav_settings jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Footer settings
CREATE TABLE IF NOT EXISTS footer_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  logo_image_id uuid REFERENCES images(id) ON DELETE SET NULL,
  copyright_text text,
  footer_links jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Navigation links (can point to pages or external URLs)
CREATE TABLE IF NOT EXISTS nav_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  label text NOT NULL,
  url text,
  page_id uuid REFERENCES pages(id) ON DELETE SET NULL,
  parent_id uuid REFERENCES nav_links(id) ON DELETE CASCADE,
  "order" int DEFAULT 0,
  open_in_new_tab boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Page sections (hero, services section, plans section, footer, header override, etc.)
CREATE TABLE IF NOT EXISTS page_sections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id uuid REFERENCES pages(id) ON DELETE CASCADE,
  type text NOT NULL, -- e.g. 'hero', 'services', 'plans', 'testimonial', 'text', 'gallery', 'header', 'footer'
  settings jsonb DEFAULT '{}'::jsonb, -- layout-specific settings (background, layout, styles)
  position int DEFAULT 0,
  locale text DEFAULT 'en',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz
);

-- Content blocks inside sections (text blocks, images, cards, CTAs)
CREATE TABLE IF NOT EXISTS content_blocks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id uuid REFERENCES page_sections(id) ON DELETE CASCADE,
  block_type text NOT NULL, -- 'text', 'image', 'service_card', 'plan_card', 'cta', etc.
  title text,
  subtitle text,
  body text,
  image_id uuid REFERENCES images(id) ON DELETE SET NULL,
  link text,
  extra jsonb DEFAULT '{}'::jsonb, -- arbitrary structured data (e.g., features array)
  subject_type text, -- optional polymorphic reference type ('plan','service', etc.)
  subject_id uuid,   -- optional polymorphic reference id
  locale text DEFAULT 'en',
  position int DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz
);

-- Services master table (can be referenced by content_blocks)
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE,
  description text,
  icon_image_id uuid REFERENCES images(id) ON DELETE SET NULL,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz
);

-- Plans master table (pricing)
CREATE TABLE IF NOT EXISTS plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE,
  price numeric(12,2),
  currency text DEFAULT 'USD',
  billing_interval text, -- 'monthly', 'yearly', etc.
  features jsonb DEFAULT '[]'::jsonb,
  cta_text text,
  cta_url text,
  rank int DEFAULT 0,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz
);

-- Site-wide settings (single row expected, extensible)
CREATE TABLE IF NOT EXISTS site_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  site_name text,
  domain text,
  default_locale text DEFAULT 'es',
  contact_email text,
  contact_phone text,
  address jsonb DEFAULT '{}'::jsonb,
  theme jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz
);

-- Contact points (support, sales, press, etc.)
CREATE TABLE IF NOT EXISTS contact_infos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL, -- 'support', 'sales', 'press'
  email text,
  phone text,
  hours text,
  created_at timestamptz DEFAULT now()
);

-- Testimonials used on pages
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name text,
  author_title text,
  body text,
  author_image_id uuid REFERENCES images(id) ON DELETE SET NULL,
  "order" int DEFAULT 0,
  locale text DEFAULT 'es',
  created_at timestamptz DEFAULT now()
);

-- Partners / logos shown on homepage
CREATE TABLE IF NOT EXISTS partners (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  website text,
  logo_image_id uuid REFERENCES images(id) ON DELETE SET NULL,
  "order" int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Blog posts / resources
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE,
  title text,
  excerpt text,
  body text,
  cover_image_id uuid REFERENCES images(id) ON DELETE SET NULL,
  published_at timestamptz,
  is_published boolean DEFAULT false,
  locale text DEFAULT 'es',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz
);

-- Case studies
CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE,
  title text,
  excerpt text,
  body text,
  cover_image_id uuid REFERENCES images(id) ON DELETE SET NULL,
  published_at timestamptz,
  is_published boolean DEFAULT false,
  locale text DEFAULT 'es',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz
);

-- Collaborators / team members
CREATE TABLE IF NOT EXISTS collaborators (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  role text,
  bio text,
  photo_image_id uuid REFERENCES images(id) ON DELETE SET NULL,
  social_links jsonb DEFAULT '[]'::jsonb, -- e.g. [{"network":"LinkedIn","url":"..."}]
  skills jsonb DEFAULT '[]'::jsonb,       -- e.g. ["Risk","Backend","Product"]
  featured boolean DEFAULT false,
  "order" int DEFAULT 0,
  locale text DEFAULT 'es',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz
);

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  service text,
  message text NOT NULL,
  status text DEFAULT 'new', -- 'new', 'read', 'replied', 'closed'
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_pages_locale ON pages(locale);
CREATE INDEX IF NOT EXISTS idx_sections_page ON page_sections(page_id);
CREATE INDEX IF NOT EXISTS idx_blocks_section ON content_blocks(section_id);
CREATE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
CREATE INDEX IF NOT EXISTS idx_plans_slug ON plans(slug);
CREATE INDEX IF NOT EXISTS idx_site_settings_domain ON site_settings(domain);
CREATE INDEX IF NOT EXISTS idx_testimonials_locale ON testimonials(locale);
CREATE INDEX IF NOT EXISTS idx_partners_order ON partners("order");
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_case_studies_slug ON case_studies(slug);
CREATE INDEX IF NOT EXISTS idx_collaborators_order ON collaborators("order");
CREATE INDEX IF NOT EXISTS idx_collaborators_locale ON collaborators(locale);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created ON contact_submissions(created_at);
