import { fetchPageBySlug } from '../lib/supabaseClient';
import HomeTemplate from '../components/templates/HomeTemplate';

export default async function Home() {
  const data = await fetchPageBySlug('/');
  return <HomeTemplate data={data} />;
}
