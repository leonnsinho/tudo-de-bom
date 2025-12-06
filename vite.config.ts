import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Performance optimizations
  build: {
    // Enable minification with esbuild (faster than terser)
    minify: 'esbuild',
    
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for React
          react: ['react', 'react-dom'],
          // Vendor chunk for Lucide icons
          icons: ['lucide-react'],
        },
      },
    },
    
    // Optimize assets
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    
    // Source maps for production debugging (optional)
    sourcemap: false,
    
    // Reduce bundle size
    target: 'esnext',
  },
  
  // Development optimizations
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['lucide-react'],
  },
  
  // Server configuration
  server: {
    host: true,
    port: 3000,
  },
  
  // Preview configuration
  preview: {
    port: 3000,
  },
});
