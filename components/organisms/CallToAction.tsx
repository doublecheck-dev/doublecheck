import Container from "@components/atoms/Container";
import Button from "@components/atoms/Button";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-800 via-primary-900 to-accent-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-800/95 to-accent-800/95"></div>
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para revolucionar tu marca y el mundo?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            ¡Permítenos transformar tu visión en una identidad poderosa e inolvidable que impulse el crecimiento y te destaque del resto!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              className="bg-white text-accent-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
            >
              Sobre Nosotros
            </Button>
            <Button 
              variant="secondary" 
              className="border-2 border-white text-white hover:bg-white hover:text-accent-600 font-semibold px-8 py-4 text-lg"
            >
              Contactanos
            </Button>
          </div>
        </div>
      </Container>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/15 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent-700/30 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
    </section>
  );
}