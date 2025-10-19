import Container from '../components/atoms/Container';
import LoadingSpinner from '../components/atoms/LoadingSpinner';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
      <Container>
        <div className="text-center space-y-8 text-white">
          {/* Logo animation */}
          <div className="flex justify-center">
            <div className="relative w-32 h-32 animate-pulse">
              <Image
                src="/logo.png"
                alt="DoubleCheck Logo"
                fill
                sizes="128px"
                className="object-contain filter brightness-0 invert"
                priority
              />
            </div>
          </div>

          {/* Loading text */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">DoubleCheck</h2>
            <p className="text-blue-100">Preparando tu experiencia...</p>
          </div>

          {/* Loading spinner */}
          <LoadingSpinner size="lg" className="border-white/30 border-t-white" />

          {/* Progress dots */}
          <div className="flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-white/50 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}