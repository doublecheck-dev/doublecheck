'use client';

interface BillingToggleProps {
  billingPeriod: 'monthly' | 'annually';
  onToggle: (period: 'monthly' | 'annually') => void;
}

export default function BillingToggle({ billingPeriod, onToggle }: BillingToggleProps) {
  return (
    <div className="flex items-center justify-center mt-8 bg-white rounded-2xl p-2 shadow-lg max-w-md mx-auto border border-gray-100">
      <button
        onClick={() => onToggle('monthly')}
        className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${
          billingPeriod === 'monthly'
            ? 'bg-gradient-to-r from-green-600 to-green-600 text-white shadow-lg scale-105'
            : 'text-secondary-700 hover:text-green-600 hover:bg-gray-50'
        }`}
      >
        <span className="relative z-10 flex items-center space-x-2">
          <span>📅</span>
          <span>Mensual</span>
        </span>
        {billingPeriod === 'monthly' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        )}
      </button>
      
      <button
        onClick={() => onToggle('annually')}
        className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${
          billingPeriod === 'annually'
            ? 'bg-gradient-to-r from-green-600 to-green-600 text-white shadow-lg scale-105'
            : 'text-secondary-700 hover:text-green-600 hover:bg-gray-50'
        }`}
      >
        <span className="relative z-10 flex items-center space-x-2">
          <span>💰</span>
          <span>Anual</span>
          <span className="ml-2 text-xs bg-green-600 text-white px-3 py-1 rounded-full animate-pulse border border-green-700">
            -20%
          </span>
        </span>
        {billingPeriod === 'annually' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        )}
      </button>
    </div>
  );
}