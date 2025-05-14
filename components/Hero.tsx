'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="px-6 py-24 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-14">
      {/* Text Section */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Unfold Stories <br />
          That <span className="text-orange-600">Inspire</span>
        </h2>
        <p className="text-lg md:text-xl text-orange-800 mb-6">
          I'm <strong>Kate Ekong</strong>, a passionate author crafting immersive stories of love, strength, and adventure.
          Dive into heartfelt tales that leave a lasting impression.
        </p>
        <a
          href="#books"
          className="inline-block bg-orange-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-orange-700 transition-transform duration-300 hover:scale-105"
        >
          Browse Books
        </a>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="md:w-1/2 flex justify-center"
      >
        <img
          src="/profilepic.jpeg"
          alt="Jane Writer portrait"
          className="w-full max-w-sm rounded-full shadow-xl"
        />
      </motion.div>
    </section>
  );
}
