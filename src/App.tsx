import { Routes, Route } from "react-router-dom";
import { ToastProvider, I18nProvider } from "dara-ui";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Guide from "./pages/Guide";
import Register from "./pages/Register";

/* =============================================
   PERSIAN-ONLY TRANSLATIONS
   ============================================= */

const fa = {
  // Navbar internal labels
  navbar: {
    more: "بیشتر",
  },
  // Add any other keys Dara UI components may need
};

export default function App() {
  return (
    <ToastProvider>
      <I18nProvider translations={{ fa }} defaultLanguage="fa">
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Layout>
      </I18nProvider>
    </ToastProvider>
  );
}
