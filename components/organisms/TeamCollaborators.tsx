'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '@components/atoms/Container';
import AnimatedSection from '@components/atoms/AnimatedSection';

interface Collaborator {
  id: string;
  full_name: string;
  role: string;
  bio: string;
  photo_image_id: string | null;
  social_links: Array<{ network: string; url: string }>;
  skills: string[];
  featured: boolean;
  order: number;
}

interface TeamCollaboratorsProps {
  collaborators: Collaborator[];
}

const values = [
  {
    icon: '🎯',
    title: 'Enfoque en Resultados',
    description: 'Cada proyecto tiene objetivos claros y métricas de éxito definidas.'
  },
  {
    icon: '💡',
    title: 'Innovación Constante',
    description: 'Adoptamos las últimas tecnologías y tendencias para mantenernos a la vanguardia.'
  },
  {
    icon: '🤝',
    title: 'Colaboración Cercana',
    description: 'Trabajamos como una extensión de tu equipo, no como un proveedor externo.'
  },
  {
    icon: '🔍',
    title: 'Atención al Detalle',
    description: 'Cuidamos cada aspecto del proyecto para garantizar la máxima calidad.'
  }
];

export default function TeamCollaborators({ collaborators }: TeamCollaboratorsProps) {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <Container>
        {/* Header */}
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Conoce a los expertos que hacen posible tu transformación digital. 
              Cada miembro aporta años de experiencia y pasión por la excelencia.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {collaborators.map((member, index) => {
            const linkedinUrl = member.social_links.find(link => link.network === 'LinkedIn')?.url;
            
            return (
              <AnimatedSection 
                key={member.id} 
                animation="fadeInUp" 
                delay={index * 100}
              >
                <div 
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer border border-slate-200 ${
                    selectedMember === member.id ? 'ring-4 ring-blue-300 shadow-2xl border-blue-200' : 'hover:border-slate-300'
                  }`}
                  onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                >
                  {/* Image Container */}
                  <div className="relative h-64 bg-gradient-to-br from-blue-100 to-indigo-100 overflow-hidden">
                    {/* Placeholder for team member photo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                        {member.full_name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* LinkedIn Button */}
                    {linkedinUrl && (
                      <a 
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{member.full_name}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{member.role}</p>
                    
                    {/* Bio (expanded when selected) */}
                    <div className={`transition-all duration-300 ${selectedMember === member.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                      <p className="text-slate-700 text-sm leading-relaxed mb-4">{member.bio}</p>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-xs font-medium rounded-full border border-blue-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Company Values */}
        <AnimatedSection animation="fadeInUp" delay={400}>
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Nuestros Valores
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Los principios que guían nuestro trabajo y definen nuestra cultura empresarial.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <AnimatedSection 
                  key={index} 
                  animation="fadeInUp" 
                  delay={500 + index * 100}
                >
                  <div className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}