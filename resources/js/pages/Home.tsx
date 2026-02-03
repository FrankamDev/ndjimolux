import { Head, Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion'; // Assure-toi d'installer framer-motion: npm install framer-motion
import { useState } from 'react';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';


export default function Home({ auth }) {


  // Variants pour animations Framer Motion
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <>
      <Head title="Ndjimolux - Menuiserie d'Excellence à Yaoundé" />
      <meta name="description" content="Ndjimolux : Spécialiste en menuiserie sur mesure à Yaoundé. Meubles, cuisines, portes, escaliers en bois noble. Qualité artisanale et finitions impeccables." />

      {/* Header / Navbar avec transition douce */}
      <NavBar />

      {/* Hero Section avec parallax-like et animations */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-green-950 pt-20 overflow-hidden">
        {/* Texture bois overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('/images/wood-texture.jpg')] bg-cover bg-center mix-blend-multiply pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-extrabold text-white leading-none tracking-tight">
                NDJIMOLUX
                <span className="block text-green-500 mt-4">Artisanat du Bois</span>
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-gray-300 font-sans max-w-2xl leading-relaxed">
                Au cameroun, nous sculptons l'excellence en menuiserie sur mesure : meubles intemporels, cuisines ergonomiques, portes robustes et escaliers élégants en bois nobles.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row gap-6">
                <Link
                  href="/devis"
                  className="inline-flex items-center justify-center px-10 py-5 bg-green-700 hover:bg-green-600 text-white text-lg font-sans font-bold rounded-full transition-all duration-500 shadow-2xl hover:shadow-green-700/50 transform hover:scale-105"
                >
                  Devis Gratuit
                </Link>
                <Link
                  href="/realisations"
                  className="inline-flex items-center justify-center px-10 py-5 border-2 border-green-600 text-green-400 hover:bg-green-900/40 hover:text-green-300 text-lg font-sans font-bold rounded-full transition-all duration-500"
                >
                  Nos Réalisations
                </Link>
              </div>
            </motion.div>

            {/* Image hero avec scale animation */}
            <motion.div
              variants={fadeIn}
              className="hidden md:block relative rounded-3xl overflow-hidden shadow-2xl border border-green-800/30"
            >
              <motion.img
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                alt="Menuiserie Ndjimolux"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section À Propos */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
                À Propos de <span className="text-green-500">Ndjimolux</span>
              </h2>
              <p className="text-lg text-gray-300 font-sans leading-relaxed mb-6">
                Fondée au cameroun, Ndjimolux est une entreprise familiale passionnée par le bois. Nous combinons savoir-faire traditionnel et technologies modernes pour créer des pièces uniques qui durent des générations.
              </p>
              <p className="text-lg text-gray-300 font-sans leading-relaxed mb-6">
                Notre équipe d'artisans qualifiés sélectionne les meilleurs bois locaux et importés (acajou, teck, chêne) pour des finitions impeccables. Engagement écologique : bois certifiés FSC.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-green-600 text-green-400 hover:bg-green-700 hover:text-white font-sans font-semibold rounded-full transition-all duration-300"
              >
                En Savoir Plus →
              </Link>
            </motion.div>
            <motion.div variants={fadeIn} className="grid grid-cols-2 gap-4">
              {Array(4).fill(0).map((_, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  src={`https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80&blend=000000&blend-alpha=10&blend-mode=normal`}
                  alt="Équipe Ndjimolux"
                  className="rounded-xl shadow-lg object-cover h-48 w-full"
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Services Détaillée */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-green-950 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
              Nos <span className="text-green-500">Services Premium</span>
            </h2>
            <p className="mt-6 text-xl text-gray-400 font-sans max-w-3xl mx-auto">
              Des solutions sur mesure adaptées à vos besoins résidentiels ou commerciaux, avec un accent sur la durabilité et l'esthétique.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
          >
            {[
              {
                title: "Cuisines Sur Mesure",
                desc: "Conception ergonomique, matériaux résistants à l'humidité, intégration d'appareils high-tech. Styles : moderne, rustique, minimaliste.",
                icon: "🍳",
                img: "https://images.unsplash.com/photo-1556911220-e15b28c11b13?auto=format&fit=crop&w=800"
              },
              {
                title: "Portes & Fenêtres",
                desc: "Isolation thermique et phonique, designs sécurisés, finitions anti-UV. Options : bois massif, vitrage double.",
                icon: "🚪",
                img: "https://images.unsplash.com/photo-1560512823-8298853c8e24?auto=format&fit=crop&w=800"
              },
              {
                title: "Escaliers & Balustrades",
                desc: "Structures solides, designs personnalisés (hélicoïdal, flottant). Matériaux : bois, métal, verre.",
                icon: "🪜",
                img: "https://images.unsplash.com/photo-1562778612-e1e8010a8a4e?auto=format&fit=crop&w=800"
              },
              {
                title: "Meubles Personnalisés",
                desc: "Armoires, lits, tables en bois précieux. Finitions : vernis mat, huilé ou laqué.",
                icon: "🛋️",
                img: "https://images.unsplash.com/photo-1583847268964-b28e0220df22?auto=format&fit=crop&w=800"
              },
              {
                title: "Agencements Intérieurs",
                desc: "Bibliothèques, dressings, bureaux intégrés. Optimisation d'espace pour petits et grands volumes.",
                icon: "🏠",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800"
              },
              {
                title: "Rénovation Bois",
                desc: "Restauration de parquets anciens, ponçage, vitrification. Expertise en patrimoine.",
                icon: "🔨",
                img: "https://images.unsplash.com/photo-1505798577917-a65157d3320b?auto=format&fit=crop&w=800"
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="group relative bg-gray-900/70 border border-green-900/40 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-green-600/60 transition-all duration-500"
              >
                <img src={service.img} alt={service.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 p-6">
                  <div className="text-4xl mb-2 text-white">{service.icon}</div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 font-sans">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mt-16"
          >
            <Link
              href="/services"
              className="inline-flex items-center px-10 py-5 bg-green-700 hover:bg-green-600 text-white font-sans font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
            >
              Explorer Tous les Services →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section Portfolio / Réalisations */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
              Nos <span className="text-green-500">Réalisations</span>
            </h2>
            <p className="mt-6 text-xl text-gray-400 font-sans max-w-3xl mx-auto">
              Découvrez nos projets phares qui allient fonctionnalité et élégance.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {Array(6).fill(0).map((_, i) => (
              <motion.div key={i} variants={fadeIn} className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src={`https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&${i}`}
                  alt={`Réalisation ${i + 1}`}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-serif text-white mb-2">Projet Luxe</h3>
                    <p className="text-gray-300 font-sans">Cuisine moderne en teck, Cameroun 2023</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mt-16"
          >
            <Link
              href="/realisations"
              className="inline-flex items-center px-10 py-5 border-2 border-green-600 text-green-400 hover:bg-green-700 hover:text-white font-sans font-bold rounded-full transition-all duration-300 text-lg"
            >
              Voir la Galerie Complète →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
              Ce Que Disent Nos <span className="text-green-500">Clients</span>
            </h2>
            <p className="mt-6 text-xl text-gray-400 font-sans max-w-3xl mx-auto">
              La satisfaction de nos clients est notre plus grande fierté.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { name: "Marie T.", text: "Travail impeccable sur notre cuisine. Délais respectés et finitions parfaites !", rating: 5 },
              { name: "Jean-Paul K.", text: "Escalier sur mesure qui a transformé notre maison. Équipe professionnelle et à l'écoute.", rating: 5 },
              { name: "Sophie M.", text: "Meubles de qualité supérieure. Je recommande Ndjimolux sans hésiter.", rating: 5 },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="bg-gray-900/50 border border-green-900/30 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-yellow-400 mb-4">{Array(testimonial.rating).fill('★').join(' ')}</div>
                <p className="text-gray-300 font-sans mb-6 italic">"{testimonial.text}"</p>
                <p className="text-white font-sans font-bold">- {testimonial.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Blog / Actualités */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
              Notre <span className="text-green-500">Blog</span>
            </h2>
            <p className="mt-6 text-xl text-gray-400 font-sans max-w-3xl mx-auto">
              Conseils, tendances et inspirations en menuiserie.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: "Tendances 2024 en Menuiserie", desc: "Découvrez les styles émergents pour vos intérieurs.", img: "https://images.unsplash.com/photo-1600585154363-67eb9e2e209a?auto=format&fit=crop&w=800" },
              { title: "Choisir le Bon Bois", desc: "Guide pour sélectionner les essences adaptées à votre projet.", img: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?auto=format&fit=crop&w=800" },
              { title: "Entretien des Meubles en Bois", desc: "Astuces pour préserver la beauté de vos pièces.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800" },
            ].map((post, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-gray-900/60 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-white mb-2">{post.title}</h3>
                  <p className="text-gray-400 font-sans mb-4">{post.desc}</p>
                  <Link href="/blog/post-1" className="text-green-400 hover:text-green-300 font-sans font-semibold">Lire Plus →</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mt-16"
          >
            <Link
              href="/blog"
              className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-green-600 text-green-400 hover:bg-green-700 hover:text-white font-sans font-bold rounded-full transition-all duration-300 text-lg"
            >
              Tous les Articles →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section CTA Final */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-green-950 to-green-900 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-4xl md:text-6xl font-serif font-bold mb-8"
          >
            Transformez Votre Espace Avec Ndjimolux
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-xl md:text-2xl text-green-100 mb-12 max-w-3xl mx-auto font-sans"
          >
            Obtenez un devis personnalisé gratuit et découvrez comment nous pouvons sublimer votre intérieur.
          </motion.p>
          <Link
            href="/devis"
            className="inline-flex items-center px-12 py-6 bg-white text-green-900 hover:bg-gray-100 font-sans font-bold text-xl rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-green-500/50"
          >
            Demander Mon Devis
          </Link>
        </div>
      </section>

      {/* Footer Étendu */}
      <div className="min-h-screen flex flex-col bg-black text-white">
        {/* Header */}
        {/* Contenu principal */}

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}