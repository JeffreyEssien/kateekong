// app/page.tsx
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import { Metadata } from "next";
import Books from "./books/page";
import Contact from "./contact/page";

export const metadata: Metadata = {
  title: "Kate Ekong | Author & Storyteller",
  description: "Explore the world of Kate Ekong, a passionate author sharing stories that inspire and captivate minds.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50 text-orange-900 font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Books />
      <Contact />
    </main>
  );
}