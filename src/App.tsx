import Footer from "./components/Footer";
import Header from "./components/header";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

const pages = {
  '/': HomePage,
  '/about': AboutPage,
};

export default function App() {
  const path = window.location.pathname;

  const Page = Reflect.get(pages, path) || HomePage;

  return (
    <div>
      <Header />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  );
}
