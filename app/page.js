import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import HeroBanner from "@/app/components/HeroBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-[2000px]">
        <HeroBanner />
      </main>
      <Footer />
    </>
  );
}
