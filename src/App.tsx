import "./App.css";
import  Home  from "./pages/Home";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Routes,Route } from "react-router-dom";
import CaseStudyPage from "./pages/caseStudy";
import ContactPage from "./pages/contactMe";

function App() {
  return (
    <main className="relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/work/:slug" element={<CaseStudyPage/>} />
        <Route path="/contact-me" element={<ContactPage/>} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
