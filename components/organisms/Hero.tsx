import Image from 'next/image';
import Container from '@components/atoms/Container';
import Button from '@components/atoms/Button';

export default function Hero({ heading, subheading, image }: { heading?: string; subheading?: string; image?: string | null }) {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900">{heading}</h1>
            <p className="mt-4 text-lg text-gray-600">{subheading}</p>
            <div className="mt-6">
              <Button>Get started</Button>
            </div>
          </div>
          {image && (
            <div className="flex justify-center">
              <div className="relative w-full max-w-md h-96">
                <Image
                  src={image}
                  alt={heading ?? 'hero'}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
