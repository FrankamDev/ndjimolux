// resources/js/Pages/Realisations.tsx
import { Head, Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';
import NavBar from '@/components/NavBar';

// Données (à remplacer par tes vraies données + pagination backend plus tard)
const allProjects = [
  // ... tes projets ici (garder la structure précédente)
  // Je mets juste quelques-uns pour l'exemple
  { id: 1, category: 'cuisine', title: 'Cuisine teck & noir', description: '...', image: 'https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg?w=900', isNew: true },
  { id: 2, category: 'porte', title: 'Porte pivotante massive', description: '...', image: 'https://images.pexels.com/photos/209290/pexels-photo-209290.jpeg?w=900' },
  { id: 3, category: 'escalier', title: 'Escalier suspendu chêne', description: '...', image: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?w=900' },

  { id: 4, category: 'escalier', title: 'Escalier suspendu chêne', description: '...', image: 'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?w=900' },
  { id: 5, category: 'escalier', title: 'Escalier suspendu chêne', description: '...', image: 'https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?w=900' },
  { id: 6, category: 'escalier', title: 'Escalier suspendu chêne', description: '...', image: 'https://images.pexels.com/photos/212721/pexels-photo-212721.jpeg?w=900' },
];





export default function Realisations() {
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'masonry' | 'grid'>('masonry');
  const [sort, setSort] = useState<'recent' | 'oldest' | 'alpha'>('recent');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);
  const [loadingMore, setLoadingMore] = useState(false);

  const lightboxRef = useRef<HTMLDivElement>(null);

  const filtered = filter === 'all'
    ? allProjects
    : allProjects.filter(p => p.category === filter);

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'alpha') return a.title.localeCompare(b.title);
    if (sort === 'oldest') return a.id - b.id;
    return b.id - a.id; // recent par défaut
  });

  const displayed = sorted.slice(0, visibleCount);

  const hasMore = visibleCount < sorted.length;

  const loadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 12);
      setLoadingMore(false);
    }, 800);
  };

  // Gestion clavier dans le lightbox
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex(prev => (prev! + 1) % displayed.length);
      }
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex(prev => (prev! - 1 + displayed.length) % displayed.length);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedImageIndex, displayed.length]);

  const categories = [
    { value: 'all', label: 'Toutes' },
    { value: 'cuisine', label: 'Cuisines' },
    { value: 'porte', label: 'Portes' },
    { value: 'escalier', label: 'Escaliers' },
    { value: 'meuble', label: 'Meubles' },
    { value: 'agencement', label: 'Agencements' },
    { value: 'renovation', label: 'Rénovations' },
  ];

  const currentCount = displayed.length;
  const totalCount = sorted.length;

  return (
    <>
      <Head title="Réalisations – Ndjimolux Menuiserie Douala" />

      {/* Hero */}
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
              {currentCount} projet{currentCount !== 1 ? 's' : ''} sur {totalCount}
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
                onChange={e => setSort(e.target.value as any)}
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

      {/* Filtres */}
      <div className="sticky top-0 z-20 bg-black/95 backdrop-blur-lg border-b border-emerald-900/40 py-5">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="flex gap-3 sm:gap-4 justify-center min-w-max">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => {
                  setFilter(cat.value);
                  setVisibleCount(12); // reset pagination quand on change de filtre
                }}
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

      {/* Galerie */}
      <section className="py-10 md:py-16 bg-black">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`
              ${viewMode === 'masonry'
                ? 'columns-2 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 gap-4 sm:gap-6 space-y-4 sm:space-y-6'
                : 'grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6'
              }
            `}
          >
            {displayed.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group break-inside-avoid cursor-pointer relative"
                onClick={() => setSelectedImageIndex(index)}
              >
                <div className="relative rounded-2xl overflow-hidden border border-emerald-900/30 bg-gray-950 shadow-lg hover:shadow-2xl hover:border-emerald-700/50 transition-all duration-400">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />

                  {/* Badge nouveau */}
                  {item.isNew && (
                    <div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      Nouveau
                    </div>
                  )}

                  {/* Overlay texte */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent
                    flex flex-col justify-end p-4 sm:p-5
                    ${typeof window !== 'undefined' && window.innerWidth < 768 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                    transition-opacity duration-400
                  `}>
                    <h3 className="text-base sm:text-lg md:text-xl font-serif font-bold text-white mb-1.5 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-200 line-clamp-2 md:line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Charger plus */}
          {hasMore && (
            <div className="text-center mt-16 md:mt-20">
              <button
                onClick={loadMore}
                disabled={loadingMore}
                className={`inline-flex px-8 sm:px-10 py-4 sm:py-5 bg-emerald-800/70 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all ${loadingMore ? 'opacity-70 cursor-wait' : 'hover:shadow-xl hover:scale-[1.03]'
                  }`}
              >
                {loadingMore ? 'Chargement...' : 'Charger plus de réalisations'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox amélioré */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImageIndex(null)}
          >
            <motion.div
              ref={lightboxRef}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 22 }}
              className="relative max-w-[95vw] max-h-[95vh] rounded-xl overflow-hidden shadow-2xl bg-gray-950"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={displayed[selectedImageIndex].image}
                alt={displayed[selectedImageIndex].title}
                className="max-w-full max-h-[90vh] object-contain"
              />

              {/* Infos projet dans lightbox */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">
                  {displayed[selectedImageIndex].title}
                </h3>
                <p className="text-gray-200 text-base md:text-lg">
                  {displayed[selectedImageIndex].description}
                </p>
              </div>

              {/* Contrôles */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-colors text-xl"
              >
                ✕
              </button>

              <button
                onClick={() => setSelectedImageIndex(prev => (prev! - 1 + displayed.length) % displayed.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-colors"
              >
                ←
              </button>

              <button
                onClick={() => setSelectedImageIndex(prev => (prev! + 1) % displayed.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-colors"
              >
                →
              </button>

              {/* Partage & téléchargement */}
              <div className="absolute top-4 left-4 flex gap-3">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(displayed[selectedImageIndex].image);
                    toast.success('Lien copié !');
                  }}
                  className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-colors"
                  title="Copier le lien"
                >
                  🔗
                </button>

                <a
                  href={displayed[selectedImageIndex].image}
                  download
                  className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-colors"
                  title="Télécharger l'image"
                >
                  ⬇
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}