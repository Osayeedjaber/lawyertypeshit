import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import Scheduling from '@/components/Scheduling';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Stats />
      <Services />
      <Testimonials />
      <Scheduling />
      <Contact />
      <Footer />
    </main>
  );
}
