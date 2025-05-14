'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Book {
  id: number;
  title: string;
  description: string;
  cover: string;
  details: string;
  purchaseLink: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "Grace unending: discovering deep mercy",
    description: "A poetic journey through time, memory, and soul.",
    cover: '/grace_unending.jpeg',
    details:
      "Grace Unending: Discovering Deep Mercy isn’t just another inspirational piece; it’s more like a candid exploration into divine love and fresh starts, even in a world that often feels harsh and broken. In most cases, this heartfelt ebook extends like a gentle hand, showing how grace can transform pain into hope, turn deep shame into genuine freedom, and transform despair into an unshakeable peace. Kate uses personal reflections mixed with biblical insights and everyday truths—sometimes a bit repetitive, sometimes raw—to remind you that mercy is not some far-off ideal. It’s a living, breathing gift that finds you down in your most challenging moments.",
    purchaseLink: "https://example.com/book1"
  },
  {
    id: 2,
    title: "Grace unlocked",
    description: "A memoir of hope rising beyond war and chaos.",
    cover: "/grace_unlocked.png",
    details:
      " “Grace Unlocked: Spiritual Growth in God's Kingdom” takes you directly into the heart of divine grace and its remarkable ability to transform everyday life. This book doesn’t follow a neat, step-by-step script; instead, it mixes the bumps of hard-won spiritual growth with moments of unexpected blessing. You’ll find reflections on forgiveness, self-discovery, and resilience that feel both practical and deeply personal, gently nudging you to accept grace while growing your faith. Grace here isn’t some distant, abstract ideal—it’s a force that fills each day with meaning and a touch of peace. Whether you’re moving at a brisk pace or taking slow, quiet steps on your spiritual path, “Grace Unlocked” comes across as a loyal companion that reminds you of the immense love and gentle care of God’s kingdom.",
    purchaseLink: "https://example.com/book2"
  },
  {
    id: 3,
    title: "Radical sacrifice",
    description: "A mystery woven within pages of an unfinished novel.",
    cover: "/radical_sacrifice.jpeg",
    details:
      "In this book a transformative journey redefines what true devotion to God means. This insightful book challenges conventional notions of sacrifice, revealing that it is not merely about giving up material possessions but about aligning your heart and priorities with divine purpose. Through engaging personal stories, profound scriptural insights, and practical applications, discover how radical sacrifice can lead to spiritual growth, authentic relationships, and a deeper understanding of God's vision for your life. Perfect for seasoned believers and those new to faith, this book invites you to embrace a life of meaningful impact and lasting joy as you answer God's call to live beyond the ordinary. Let this guide inspire and equip you to step into the unexpected, fulfilling life God truly desires.",
    purchaseLink: "https://example.com/book3"
  }
];

export default function Books() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const expandedBook = books.find((book) => book.id === expandedId);
  const otherBooks = books.filter((book) => book.id !== expandedId);

  return (
    <section className="px-6 py-24 bg-orange-50 text-orange-900" id="books">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-700 mb-12">
        Featured Books
      </h2>

      {expandedBook && (
        <motion.div
          layout
          key={expandedBook.id}
          className="bg-white p-6 rounded-xl shadow-lg mb-10 flex flex-col lg:flex-row gap-6 border border-orange-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={expandedBook.cover}
            alt={expandedBook.title}
            className="w-full lg:w-64 h-72 object-cover rounded-md"
          />
          <div className="flex-1 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">{expandedBook.title}</h3>
            <p className="text-orange-700 mb-4">{expandedBook.details}</p>
            <div className="flex justify-between mt-auto">
              <button
                onClick={() => setExpandedId(null)}
                className="text-orange-500 hover:underline text-sm"
              >
                Close
              </button>
              <a
                href={expandedBook.purchaseLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm shadow hover:bg-orange-700 transition"
              >
                Purchase
              </a>
            </div>
          </div>
        </motion.div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherBooks.map((book) => (
          <motion.div
            layout
            key={book.id}
            className="bg-white p-4 rounded-xl shadow border hover:shadow-md transition"
          >
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-60 object-cover rounded-md mb-3"
            />
            <h4 className="text-lg font-semibold mb-1">{book.title}</h4>
            <p className="text-sm text-orange-800 mb-3">{book.description}</p>
            <button
              onClick={() => setExpandedId(book.id)}
              className="text-orange-600 hover:underline text-sm"
            >
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
