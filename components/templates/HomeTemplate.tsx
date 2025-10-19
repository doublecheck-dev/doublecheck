import Hero from '@components/organisms/Hero';
import Services from '@components/organisms/Services';
import PricingPlans from '@components/organisms/PricingPlans';
import TeamCollaborators from '@components/organisms/TeamCollaborators';
import ContactSection from '@components/organisms/ContactSection';
import CallToAction from '@components/organisms/CallToAction';
import { supabase, fetchImageById, fetchPlans, fetchCollaborators } from '@lib/supabaseClient';

export default async function HomeTemplate({ data }: { data: any }) {
  // Fetch all data in parallel
  const [
    { data: services },
    plans,
    collaborators
  ] = await Promise.all([
    supabase.from('services').select('*').order('id'),
    fetchPlans(),
    fetchCollaborators()
  ]);

  const heroSection = (data?.sections || []).find((s: any) => s.type === 'hero');
  const heroSettings = heroSection ? heroSection.settings : {};

  // Resolve image id -> url
  let imageUrl: string | undefined = heroSettings?.background_image_url;
  if (!imageUrl && heroSettings?.background_image_id) {
    try {
      const img = await fetchImageById(heroSettings.background_image_id);
      if (img?.url) imageUrl = img.url;
    } catch (err) {
      // ignore resolution errors (fallback to undefined)
    }
  }

  return (
    <>
      <Hero
        heading={heroSettings?.heading}
        subheading={heroSettings?.subheading}
        image={imageUrl}
      />
      <Services items={services || []} />
      <PricingPlans plans={plans || []} />
      <TeamCollaborators collaborators={collaborators || []} />
      <ContactSection />
      <CallToAction />
    </>
  );
}
