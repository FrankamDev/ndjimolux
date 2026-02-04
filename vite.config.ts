// import { wayfinder } from '@laravel/vite-plugin-wayfinder';
// import tailwindcss from '@tailwindcss/vite';
// import react from '@vitejs/plugin-react';
// import laravel from 'laravel-vite-plugin';
// import { defineConfig } from 'vite';

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ['resources/css/app.css', 'resources/js/app.tsx'],
//             ssr: 'resources/js/ssr.tsx',
//             refresh: true,
//         }),
//         react({
//             babel: {
//                 plugins: ['babel-plugin-react-compiler'],
//             },
//         }),
//         tailwindcss(),
//         wayfinder({
//             formVariants: true,
//         }),
//     ],
//     esbuild: {
//         jsx: 'automatic',
//     },
// });



import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/resources/js'
    }
  },
  server: {
    host: 'localhost',
    port: 8000
  },
  build:{
    outDir: 'public/build',
    minify: 'esbuild'
  },

    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
            
        }),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss({
            config: './tailwind.config.js',
        }),
        wayfinder({
            formVariants: true,
        }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
});
