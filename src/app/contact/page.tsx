'use client';

import { FaEnvelope, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('https://formspree.io/f/your-form-id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('There was an issue sending your message. Please try again.');
    }
  };

  return (
    <section className="px-6 py-24 bg-orange-50 text-orange-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-orange-700 mb-4">Let’s Connect</h2>
          <p className="text-orange-800 text-lg max-w-2xl mx-auto">
            Whether you’re a reader, fellow writer, publisher, or simply curious — I’d love to hear from you.
            Drop me a message, and I’ll get back to you as soon as I finish the next chapter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-6 rounded-xl shadow-lg space-y-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-orange-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border border-orange-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              required
              className="w-full border border-orange-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none"
            />
            <button
              type="submit"
              className="bg-orange-600 text-white py-2 px-6 rounded-full hover:bg-orange-700 transition"
            >
              Send Message
            </button>
            {status && (
              <p className={`text-lg ${status.startsWith('Message sent') ? 'text-green-600' : 'text-red-600'}`}>
                {status}
              </p>
            )}
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-orange-700 mb-2">Email</h3>
              <p className="text-orange-900 flex items-center gap-2">
                <span className="text-orange-500">
                  <FaEnvelope />
                </span>
                kateekong@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-700 mb-2">Follow Me</h3>
              <div className="flex gap-4 text-orange-600 text-xl">
                <span className="text-orange-500">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                </span>
                <span className="text-orange-500">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                </span>
                <span className="text-orange-500">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                </span>
              </div>
            </div>

            <div className="border-t border-orange-100 pt-6">
              <p className="text-sm text-orange-700 italic">
                “Every message is a page in our shared story.” – Kate
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
