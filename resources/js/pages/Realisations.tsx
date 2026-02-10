// resources/js/Pages/Realisations.tsx
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import '../components/gallery.css'

// Tous les imports CSS de LightGallery
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-rotate.css';
import 'lightgallery/css/lg-share.css';

// Plugins LightGallery
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgRotate from 'lightgallery/plugins/rotate';
import lgShare from 'lightgallery/plugins/share';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';
import { useState } from 'react';
import Icons from '@/components/Icons';
import NavBar from '@/components/NavBar';

// ────────────────────────────────────────────────
// Données (à remplacer par tes vraies données ou props Inertia)
// Types
interface Realisation {
  id: number;
  title: string;
  slug: string;
  category: string;
  image_url: string;
  description: string;
}

export default function Realisations({ realisations }: { realisations: { data: Realisation[] } }) {
  const projects = realisations.data;
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'masonry' | 'grid'>('masonry');
  const [sort, setSort] = useState<'recent' | 'oldest' | 'alpha'>('recent');

  // Filtrage par catégorie
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  // Tri (optionnel, car LightGallery ne change pas l'ordre visuel facilement)
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sort === 'alpha') return a.title.localeCompare(b.title);
    if (sort === 'oldest') return a.id - b.id;
    return b.id - a.id; // recent
  });

  const categories = [
    { value: 'all', label: 'Toutes' },
    { value: 'cuisine', label: 'Cuisines' },
    { value: 'porte', label: 'Portes' },
    { value: 'escalier', label: 'Escaliers' },
    { value: 'meuble', label: 'Meubles' },
    { value: 'agencement', label: 'Agencements' },
    { value: 'renovation', label: 'Rénovations' },
  ];

  return (
    <>
      <Head title="Nos Réalisations – Ndjimolux Menuiserie Yaoundé" />

      <NavBar />


      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-950 via-black to-emerald-950/70">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/wood-texture-dark.jpg')] bg-cover mix-blend-overlay pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white mb-4"
          >
            Nos <span className="text-emerald-500">Réalisations</span>
          </motion.h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300">
            <p className="text-lg">
              {sortedProjects.length} projet{sortedProjects.length !== 1 ? 's' : ''}
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setViewMode(viewMode === 'masonry' ? 'grid' : 'masonry')}
                className="px-4 py-2 bg-gray-800 hover:bg-emerald-900/60 rounded-lg text-sm font-medium transition-colors"
              >
                {viewMode === 'masonry' ? 'Vue grille' : 'Vue masonry'}
              </button>

              <select
                value={sort}
                onChange={e => setSort(e.target.value as 'recent' | 'oldest' | 'alpha')}
                className="px-4 py-2 bg-gray-800 border border-emerald-900/50 rounded-lg text-sm text-white"
              >
                <option value="recent">Plus récent</option>
                <option value="oldest">Plus ancien</option>
                <option value="alpha">Alphabétique</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Filtres sticky – exactement comme avant */}
      <div className="sticky top-0 z-20 bg-black/95 backdrop-blur-lg border-b border-emerald-900/40 py-5">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 overflow-x-auto">

          <div className="flex gap-3 sm:gap-4 justify-center min-w-max">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-5 sm:px-7 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all whitespace-nowrap ${filter === cat.value
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-gray-900/70 text-gray-300 hover:bg-emerald-900/60 border border-emerald-900/50'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* La galerie : exactement le style et le comportement de ton composant Gallery */}
      <div className="">

        <h2 className='text-white text-center text-2xl font-bold '>Cliquer pour agrandir l'image</h2>
      </div>
      <section className="py-10 md:py-16 bg-black">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom, lgRotate, lgShare, lgAutoplay, lgFullscreen]}
            thumbnail={true}
            zoom={true}
            rotate={true}
            share={true}
            fullScreen={true}
            autoplay={false}
            download={true}
            counter={true}
          >
            {sortedProjects.map((project) => (
              <a
                key={project.id}
                href={project.image_url}
                className="block"
                // Tu peux ajouter des infos dans la lightbox si tu veux
                data-sub-html={`<h4>${project.title}</h4>`}
              >
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-xl"
                  loading="lazy"
                />
              </a>
            ))}
          </LightGallery>
        </div>
      </section>
      <div className='flex justify-around'>

        <Icons

          links={{
            whatsapp: "https://wa.me/237695748384",
            facebook: "https://facebook.com/tonprofil",
            instagram: "https://instagram.com/tonprofil",
            telegram: "https://t.me/tonprofil",
            twitter: "https://x.com/tonprofil",
            linkedin: "https://linkedin.com/in/tonprofil",
          }} />
      </div>
    </>
  );
}