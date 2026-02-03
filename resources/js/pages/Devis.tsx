// resources/js/Pages/Devis.tsx
import { Head, Link, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import type { FormEvent } from 'react';
import { useState } from 'react';

export default function Devis() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    phone: '',
    email: '',
    city: '',
    project_type: '',
    budget: '',
    start_when: '',
    how_know_us: '',
    message: '',
    urgent: false,
  });

  const [success, setSuccess] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    post('/devis', {
      onSuccess: () => {
        setSuccess(true);
        reset();
        setTimeout(() => setSuccess(false), 8000);
      },
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <>
      <Head title="Demander un Devis – Ndjimolux Menuiserie sur Mesure à Douala" />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-gray-950 via-black to-emerald-950/80 pt-20 md:pt-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('/images/wood-atelier-premium.jpg')] bg-cover bg-center mix-blend-overlay pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6 md:space-y-8"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-extrabold text-white leading-tight tracking-tight"
            >
              Demandez votre <span className="text-emerald-500">devis personnalisé</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              Gratuit et sans engagement. Notre équipe vous répond en moins de 48h avec une estimation détaillée et des conseils adaptés à votre projet.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link
                prefetch
                href="/contact"
                className="inline-flex px-8 py-4 bg-transparent border-2 border-emerald-600 text-emerald-400 hover:bg-emerald-900/40 hover:text-emerald-300 font-semibold rounded-full transition-all duration-300 text-base sm:text-lg"
              >
                Besoin d'un appel direct ? Contactez-nous
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Formulaire principal */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-gray-900/70 border border-emerald-900/40 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl"
          >
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="text-7xl mb-8">✅</div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                  Devis demandé avec succès !
                </h3>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                  Merci pour votre confiance. Vous recevrez un email de confirmation immédiatement, et notre équipe vous contactera sous 48h avec une estimation personnalisée.
                </p>
                <Link
                  href="/"
                  className="inline-flex px-10 py-5 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-emerald-800/40 hover:scale-[1.03]"
                >
                  Retour à l'accueil
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="space-y-8 md:space-y-10">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <label className="block text-sm md:text-base font-medium text-gray-300 mb-2">
                      Nom complet <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={data.name}
                      onChange={(e) => setData('name', e.target.value)}
                      className="w-full px-5 py-4 bg-gray-800/70 border border-gray-700 rounded-xl text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 transition-all"
                      required
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm md:text-base font-medium text-gray-300 mb-2">
                      Téléphone <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={data.phone}
                      onChange={(e) => setData('phone', e.target.value)}
                      placeholder="+237 6XX XX XX XX"
                      className="w-full px-5 py-4 bg-gray-800/70 border border-gray-700 rounded-xl text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 transition-all"
                      required
                    />
                    {errors.phone && <p className="mt-2 text-sm text-red-400">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <label className="block text-sm md:text-base font-medium text-gray-300 mb-2">
                      Email <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => setData('email', e.target.value)}
                      className="w-full px-5 py-4 bg-gray-800/70 border border-gray-700 rounded-xl text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 transition-all"
                      required
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm md:text-base font-medium text-gray-300 mb-2">
                      Ville / Quartier
                    </label>
                    <input
                      type="text"
                      value={data.city}
                      onChange={(e) => setData('city', e.target.value)}
                      placeholder="Ex: Bonamoussadi, Douala"
                      className="w-full px-5 py-4 bg-gray-800/70 border border-gray-700 rounded-xl text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-300 mb-2">
                    Type de projet <span className="text-emerald-500">*</span>
                  </label>
                  <select
                    value={data.project_type}
                    onChange={(e) => setData('project_type', e.target.value)}
                    className="w-full px-5 py-4 bg-gray-800/70 border border-gray-700 rounded-xl text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 transition-all"
                    required
                  >
                    <option value="">Sélectionnez votre projet</option>
                    <option value="cuisine">Cuisine sur mesure</option>
                    <option value="porte">Portes / Portails</option>
                    <option value="escalier">Escalier / Garde-corps</option>
                    <option value="meuble">Meuble sur mesure</option>
                    <option value="agencement">Agencement intérieur</option>
                    <option value="renovation">Rénovation / Restauration</option>
                    <option value="autre">Autre</option>
                  </select>
                  {errors.project_type && <p className="mt-2 text-sm text-red-400">{errors.project_type}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <label className="block text-sm md:text-base font-medium text-gray-300 mb-2">
                      Budget approximatif
                    </label>
                    <select
                      value={data.budget}
                      onChange={(e) => setData('budget', e.target.value)}
                      className="w-full px-5 py-4 bg-gray-800/70 border border-gray-700 rounded-xl text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 transition-all"
                    >
                      <option value="">Non défini</option>
                      <option value="<2m">Moins de 2 millions FCFA</option>
                      <option value="2-5m">2 à 5 millions FCFA</option>
                      <option value="5-10m">5 à 10 millions FCFA</option>
                      <option value=">10m">Plus de 10 millions FCFA</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm md:text-base font-medium text-gray-300 mb-2">
                      Délai souhaité
                    </label>
                    <select
                      value={data.start_when}
                      onChange={(e) => setData('start_when', e.target.value)}
                      className="w-full px-5 py-4 bg-gray-800/70 border border-gray-700 rounded-xl text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 transition-all"
                    >
                      <option value="">À définir</option>
                      <option value="urgent">Dès que possible</option>
                      <option value="1-3m">Dans 1-3 mois</option>
                      <option value="3-6m">Dans 3-6 mois</option>
                      <option value=">6m">Dans plus de 6 mois</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-300 mb-2">
                    Comment nous avez-vous connus ?
                  </label>
                  <select
                    value={data.how_know_us}
                    onChange={(e) => setData('how_know_us', e.target.value)}
                    className="w-full px-5 py-4 bg-gray-800/70 border border-gray-700 rounded-xl text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 transition-all"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="recherche">Recherche Google</option>
                    <option value="reco">Recommandation</option>
                    <option value="social">Réseaux sociaux</option>
                    <option value="publicite">Publicité</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-300 mb-2">
                    Détails de votre projet <span className="text-emerald-500">*</span>
                  </label>
                  <textarea
                    rows={6}
                    value={data.message}
                    onChange={(e) => setData('message', e.target.value)}
                    placeholder="Décrivez-nous votre idée, vos besoins, vos inspirations... (dimensions, matériaux préférés, etc.)"
                    className="w-full px-5 py-4 bg-gray-800/70 border border-gray-700 rounded-xl text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 transition-all resize-y min-h-[150px]"
                    required
                  />
                  {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="urgent"
                    checked={data.urgent}
                    onChange={(e) => setData('urgent', e.target.checked)}
                    className="w-5 h-5 rounded border-gray-700 bg-gray-800 text-emerald-600 focus:ring-emerald-500 transition-all"
                  />
                  <label htmlFor="urgent" className="text-sm md:text-base text-gray-300 cursor-pointer">
                    C'est urgent – rappel sous 24h
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={processing}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-5 px-8 bg-emerald-700 hover:bg-emerald-600 text-white text-lg font-semibold rounded-full transition-all shadow-xl hover:shadow-emerald-800/50 disabled:opacity-60 disabled:cursor-not-allowed ${processing ? 'animate-pulse' : ''
                    }`}
                >
                  {processing ? 'Envoi en cours...' : 'Envoyer ma demande de devis'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Section avantages */}
      <section className="py-16 md:py-24 bg-black border-t border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white text-center mb-12 md:mb-16"
          >
            Pourquoi choisir <span className="text-emerald-500">Ndjimolux</span> ?
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
          >
            {[
              {
                icon: '📏',
                title: 'Sur mesure total',
                desc: 'Chaque devis est adapté à vos besoins précis, avec plans 3D gratuits.',
              },
              {
                icon: '⏱️',
                title: 'Réponse rapide',
                desc: 'Devis détaillé en 48h maximum, avec options et tarifs transparents.',
              },
              {
                icon: '💼',
                title: 'Expertise locale',
                desc: 'Artisans doualais passionnés, bois sélectionnés et garanties étendues.',
              },
            ].map((adv, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group bg-gray-900/50 border border-emerald-900/40 rounded-2xl p-8 hover:border-emerald-600/60 transition-all hover:shadow-xl hover:shadow-emerald-900/20"
              >
                <div className="text-5xl mb-6 text-emerald-500 group-hover:scale-110 transition-transform">{adv.icon}</div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4">{adv.title}</h3>
                <p className="text-gray-300">{adv.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}