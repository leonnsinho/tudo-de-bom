import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LazyLoadSection from './components/LazyLoadSection';
import useSEO from './hooks/useSEO';

// Lazy load components that are below the fold
const PacotesPasseios = lazy(() => import('./components/PacotesPasseios'));
const JipeFechado = lazy(() => import('./components/JipeFechado'));
const LugaresEspeciais = lazy(() => import('./components/LugaresEspeciais'));
const Seguranca = lazy(() => import('./components/Seguranca'));
const Depoimentos = lazy(() => import('./components/Depoimentos'));
const Reservas = lazy(() => import('./components/Reservas'));
const Contato = lazy(() => import('./components/Contato'));
const Footer = lazy(() => import('./components/Footer'));
const ChatFAQ = lazy(() => import('./components/ChatFAQ'));

// Loading fallback component
const SectionSkeleton = () => (
  <div className="py-20 animate-pulse">
    <div className="container mx-auto px-4">
      <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-64 bg-gray-200 rounded-2xl"></div>
        ))}
      </div>
    </div>
  </div>
);

function App() {
  // Set up SEO for the main page
  useSEO({
    title: 'Tudo de Bom Passeios - Aventuras em Ilhabela | Jeep 4x4 & Lancha',
    description: 'Aventuras inesquecíveis em Ilhabela! Passeios de jeep 4x4 para Castelhanos, Bonete e cachoeiras. Lancha para praias paradisíacas. Segurança garantida há 10+ anos.',
    keywords: 'Ilhabela passeios, jeep 4x4 Ilhabela, lancha Ilhabela, Castelhanos, Praia do Bonete, cachoeiras Ilhabela, turismo Ilhabela',
    url: 'https://tudodebompasseios.com/',
  });

  return (
    <div className="min-h-screen">
      {/* Above the fold - load immediately */}
      <Header />
      <Hero />
      
      {/* Below the fold - lazy load */}
      <LazyLoadSection>
        <Suspense fallback={<SectionSkeleton />}>
          <PacotesPasseios />
        </Suspense>
      </LazyLoadSection>

      <LazyLoadSection>
        <Suspense fallback={<SectionSkeleton />}>
          <JipeFechado />
        </Suspense>
      </LazyLoadSection>

      <LazyLoadSection>
        <Suspense fallback={<SectionSkeleton />}>
          <LugaresEspeciais />
        </Suspense>
      </LazyLoadSection>

      <LazyLoadSection>
        <Suspense fallback={<SectionSkeleton />}>
          <Seguranca />
        </Suspense>
      </LazyLoadSection>

      <LazyLoadSection>
        <Suspense fallback={<SectionSkeleton />}>
          <Depoimentos />
        </Suspense>
      </LazyLoadSection>

      <LazyLoadSection>
        <Suspense fallback={<SectionSkeleton />}>
          <Reservas />
        </Suspense>
      </LazyLoadSection>

      <LazyLoadSection>
        <Suspense fallback={<SectionSkeleton />}>
          <Contato />
        </Suspense>
      </LazyLoadSection>

      <LazyLoadSection>
        <Suspense fallback={<SectionSkeleton />}>
          <Footer />
        </Suspense>
      </LazyLoadSection>

      {/* Chat FAQ - load last */}
      <LazyLoadSection>
        <Suspense fallback={null}>
          <ChatFAQ />
        </Suspense>
      </LazyLoadSection>
    </div>
  );
}

export default App;