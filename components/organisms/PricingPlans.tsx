'use client';

import { useState } from 'react';
import Container from '@components/atoms/Container';
import AnimatedSection from '@components/atoms/AnimatedSection';
import PricingHeader from '@components/molecules/PricingHeader';
import BillingToggle from '@components/molecules/BillingToggle';
import PlanCard from '@components/molecules/PlanCard';
import PricingFooter from '@components/molecules/PricingFooter';

interface Plan {
  id: string;
  title: string;
  slug: string;
  price: number;
  currency: string;
  billing_interval: string;
  features: string[];
  cta_text: string;
  cta_url: string;
  rank: number;
  metadata: {
    description: string;
    subtitle: string;
    popular: boolean;
  };
}

export default function PricingPlans({ plans }: { plans: Plan[] }) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('monthly');

  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 via-gray-50 to-accent-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent-300 to-green-300 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-300 to-accent-300 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <PricingHeader />
        
        <BillingToggle 
          billingPeriod={billingPeriod} 
          onToggle={setBillingPeriod} 
        />

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16 mt-16">
          {plans.map((plan, index) => {
            const displayPrice = billingPeriod === 'annually' ? plan.price * 0.8 : plan.price;

            return (
              <AnimatedSection 
                key={plan.id} 
                animation="fadeInUp" 
                delay={index * 150}
                className={`${plan.slug === 'digital-pro-max' ? 'lg:col-span-3 xl:col-span-1' : ''}`}
              >
                <PlanCard
                  plan={plan}
                  isSelected={selectedPlan === plan.id}
                  onSelect={(planId: string) => setSelectedPlan(selectedPlan === planId ? null : planId)}
                  displayPrice={displayPrice}
                  billingPeriod={billingPeriod}
                  index={index}
                />
              </AnimatedSection>
            );
          })}
        </div>

        <PricingFooter />
      </Container>
    </section>
  );
}