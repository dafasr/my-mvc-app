const express = require('express'); // Mengimpor framework Express
const mongoose = require('mongoose'); // Mengimpor library Mongoose untuk MongoDB
const app = express(); // Membuat instance Express

// Middleware
app.use(express.json()); // Middleware untuk parsing JSON body dari request

// Routes
const authRoutes = require('./routes/authRoutes'); // Mengimpor route authentication
app.use('/api/auth', authRoutes); // Menggunakan route authentication untuk endpoint '/api/auth'

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/my-mvc-app', {
      // Menghubungkan ke MongoDB dengan URL
      useNewUrlParser: true, // Menggunakan parser URL yang baru
      useUnifiedTopology: true, // Menggunakan topology baru untuk koneksi
    });
    console.log('MongoDB connected'); // Log jika berhasil terhubung
  } catch (error) {
    console.error('MongoDB connection error:', error); // Log jika terjadi kesalahan koneksi
    process.exit(1); // Keluar dari proses dengan kode kesalahan
  }
};
connectDB(); // Memanggil fungsi untuk menghubungkan ke MongoDB

// Start server
const PORT = process.env.PORT || 5000; // Menentukan port untuk server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Memulai server dan menampilkan pesan jika berhasil
