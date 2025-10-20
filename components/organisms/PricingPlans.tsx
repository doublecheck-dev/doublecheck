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
    <section className="py-32 bg-gradient-cosmic relative overflow-hidden">
      {/* Modern floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-mesh rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-ocean rounded-full opacity-20 blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-sunset rounded-full opacity-15 blur-2xl animate-pulse-soft"></div>
      </div>

      <Container className="relative z-10">
        <PricingHeader />
        
        <BillingToggle 
          billingPeriod={billingPeriod} 
          onToggle={setBillingPeriod} 
        />

        {/* Plans Grid - Optimized for pricing display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-6 mb-16 mt-16 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const displayPrice = billingPeriod === 'annually' ? plan.price * 0.8 : plan.price;

            return (
              <AnimatedSection 
                key={plan.id} 
                animation="fadeInUp" 
                delay={index * 150}
                className="h-full flex"
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