import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const useSEO = ({
  title = 'Tudo de Bom Passeios - Aventuras em Ilhabela | Jeep 4x4 & Lancha',
  description = 'Aventuras inesquecíveis em Ilhabela! Passeios de jeep 4x4 para Castelhanos, Bonete e cachoeiras. Lancha para praias paradisíacas. Segurança garantida há 10+ anos.',
  keywords = 'Ilhabela passeios, jeep 4x4 Ilhabela, lancha Ilhabela, Castelhanos, Praia do Bonete, cachoeiras Ilhabela, turismo Ilhabela',
  image = 'https://tudodebompasseios.com/og-image.jpg',
  url = 'https://tudodebompasseios.com/',
  type = 'website',
}: SEOProps = {}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:card', content: 'summary_large_image' },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (name) meta.name = name;
        if (property) meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      
      meta.content = content;
    });

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

  }, [title, description, keywords, image, url, type]);
};

export default useSEO;
