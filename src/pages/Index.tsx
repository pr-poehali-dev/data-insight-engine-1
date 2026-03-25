import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Join from "@/components/Join";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Featured />
      <Promo />
      <Join />
      <Footer />
    </main>
  );
};

export default Index;