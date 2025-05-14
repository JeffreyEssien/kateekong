'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-md sticky top-0 z-50"
    >
      <h1 className="text-2xl font-bold tracking-tight">Kate Ekong</h1>
      <nav className="space-x-6 text-sm font-medium">
        <a href="#about" className="hover:text-orange-600 transition">About</a>
        <a href="#books" className="hover:text-orange-600 transition">Books</a>
        <a href="#contact" className="hover:text-orange-600 transition">Contact</a>
      </nav>
    </motion.header>
  );
}
 