import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in environment');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: { headers: { 'x-client-info': 'doublecheck-web/1.0' } }
});

/**
 * Helper: fetch page by slug including sections and content blocks
 */
export async function fetchPageBySlug(slug: string, locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'es') {
  const { data: page, error: pErr } = await supabase.from('pages').select('*').eq('slug', slug).limit(1).maybeSingle();
  if (pErr) throw pErr;
  if (!page) return null;

  const { data: sections, error: sErr } = await supabase
    .from('page_sections')
    .select('*')
    .eq('page_id', page.id)
    .order('position', { ascending: true });

  if (sErr) throw sErr;
  if (!sections || sections.length === 0) return { page, sections: [], blocks: [] };

  const sectionIds = sections.map((s: any) => s.id);
  const { data: blocks, error: bErr } = await supabase
    .from('content_blocks')
    .select('*')
    .in('section_id', sectionIds)
    .order('position', { ascending: true });

  if (bErr) throw bErr;
  return { page, sections, blocks };
}

/* Nav / header helpers */
export async function fetchNavLinks() {
  const { data, error } = await supabase
    .from('nav_links')
    .select('id,label,url,page_id,open_in_new_tab,"order"')
    .is('parent_id', null)
    .order('"order"', { ascending: true });
  if (error) throw error;
  return data || [];
}

export async function fetchHeaderSettings() {
  const { data } = await supabase.from('header_settings').select('*').limit(1).maybeSingle();
  return data || null;
}

/* Blog helpers */
export async function fetchAllBlogPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id,slug,title,excerpt,cover_image_id,published_at')
    .eq('is_published', true)
    .order('published_at', { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function fetchBlogPostBySlug(slug: string) {
  const { data, error } = await supabase.from('blog_posts').select('*').eq('slug', slug).maybeSingle();
  if (error) throw error;
  return data || null;
}

export async function fetchImageById(id: string | null) {
  if (!id) return null;
  const { data, error } = await supabase.from('images').select('*').eq('id', id).maybeSingle();
  if (error) throw error;
  return data || null;
}

// Fetch all pricing plans
export async function fetchPlans() {
  const { data, error } = await supabase
    .from('plans')
    .select('*')
    .order('rank');

  if (error) throw error;
  return data || [];
}

// Fetch all team members/collaborators
export async function fetchCollaborators() {
  const { data, error } = await supabase
    .from('collaborators')
    .select('*')
    .eq('featured', true)
    .order('"order"');

  if (error) throw error;
  return data || [];
}

// Fetch all services with metadata
export async function fetchServices() {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('id');

  if (error) throw error;
  return data || [];
}

// Submit contact form
export async function submitContactForm(formData: {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}) {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([formData])
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Fetch contact info
export async function fetchContactInfo() {
  const { data, error } = await supabase
    .from('site_settings')
    .select('contact_email, contact_phone, address')
    .single();

  if (error) console.error('Error fetching contact info:', error);
  return data || null;
}
