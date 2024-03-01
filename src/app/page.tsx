import Header from "./components/Header";
import Bienvenido from "./components/Bienvenido";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-4 grow">
        <Header />
        <Bienvenido />
      </main>
        <Footer />
    </>
  );
}
