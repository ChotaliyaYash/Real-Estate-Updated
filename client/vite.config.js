import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:3000',
//         secure: false,
//       },
//     },
//   },

//   define: {
//     'process.env.VITE_FIREBASE_API_KEY': JSON.stringify(process.env.VITE_FIREBASE_API_KEY)
//   },

//   plugins: [react()],
// });
// import dotenv from 'dotenv';
// dotenv.config();

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // const env = loadEnv(mode, process.cwd(), 'VITE_')

  return {
    // vite config
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          secure: false,
        },
      },
    },

    // define: {
    //   __VITE_FIREBASE_API_KEY__: JSON.stringify(env.VITE_FIREBASE_API_KEY),
    // },

    plugins: [react()],
  };

});
