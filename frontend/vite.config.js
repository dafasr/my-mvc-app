import { defineConfig } from 'vite'; // Mengimpor fungsi defineConfig dari Vite
import react from '@vitejs/plugin-react'; // Mengimpor plugin React untuk Vite

export default defineConfig({
  plugins: [react()], // Menambahkan plugin React ke konfigurasi Vite
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Mengarahkan semua permintaan '/api' ke server backend yang berjalan di port 5000
        changeOrigin: true, // Mengubah header origin permintaan agar sesuai dengan target
        secure: false, // Mengizinkan penggunaan HTTPS di target (tidak wajib di sini)
      },
    },
  },
});
