export interface Image {
  id: string;
  url: string;
  alt?: string | null;
  caption?: string | null;
  width?: number | null;
  height?: number | null;
  metadata?: Record<string, unknown> | null;
  created_at?: string | null;
}

export interface SocialNetwork {
  id: string;
  name: string;
  url: string;
  icon_image_id?: string | null;
  order?: number | null;
  created_at?: string | null;
}

export interface Page {
  id: string;
  slug: string;
  title?: string | null;
  meta_title?: string | null;
  meta_description?: string | null;
  is_published?: boolean | null;
  locale?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface HeaderSettings {
  id: string;
  logo_image_id?: string | null;
  show_cta?: boolean | null;
  cta_text?: string | null;
  cta_url?: string | null;
  nav_settings?: Record<string, unknown> | null;
  created_at?: string | null;
}

export interface FooterSettings {
  id: string;
  logo_image_id?: string | null;
  copyright_text?: string | null;
  footer_links?: unknown[] | null;
  created_at?: string | null;
}

export interface NavLink {
  id: string;
  label: string;
  url?: string | null;
  page_id?: string | null;
  parent_id?: string | null;
  order?: number | null;
  open_in_new_tab?: boolean | null;
  created_at?: string | null;
}

export interface PageSection {
  id: string;
  page_id: string;
  type: string;
  settings?: Record<string, unknown> | null;
  position?: number | null;
  locale?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface ContentBlock {
  id: string;
  section_id: string;
  block_type: string;
  title?: string | null;
  subtitle?: string | null;
  body?: string | null;
  image_id?: string | null;
  link?: string | null;
  extra?: Record<string, unknown> | null;
  subject_type?: string | null;
  subject_id?: string | null;
  locale?: string | null;
  position?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface Service {
  id: string;
  title: string;
  slug?: string | null;
  description?: string | null;
  icon_image_id?: string | null;
  metadata?: Record<string, unknown> | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface Plan {
  id: string;
  title: string;
  slug?: string | null;
  price?: number | null;
  currency?: string | null;
  billing_interval?: string | null;
  features?: unknown[] | null;
  cta_text?: string | null;
  cta_url?: string | null;
  rank?: number | null;
  metadata?: Record<string, unknown> | null;
  created_at?: string | null;
  updated_at?: string | null;
}
