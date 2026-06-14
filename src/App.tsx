import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import useScrollToTop from "./hooks/useScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  useScrollToTop();

  // ✅ Update canonical & OG tags per route
  const currentUrl =
    typeof window !== "undefined"
      ? `https://divijmodi.tech${location.pathname}`
      : "https://divijmodi.tech/";

  // ✅ Central JSON-LD Schema (consistent with index.html)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Divij Modi",
    alternateName: ["The Dark Knight", "Divij Modi Portfolio"],
    url: "https://divijmodi.tech/",
    image:
      "https://res.cloudinary.com/dz8olrqor/image/upload/v1761670044/divijmodi_hixlaf.jpg",
    jobTitle: "AI Enthusiast & Full-Stack Developer",
    description:
      "Divij Modi (also known as The Dark Knight) is an AI Enthusiast, Developer, and Digital Creator passionate about artificial intelligence, autonomous systems, and full-stack web technologies.",
    worksFor: {
      "@type": "Organization",
      name: "Independent / Freelance",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "LJ Institute of Engineering and Technology",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Automation",
      "Python",
      "React",
      "TypeScript",
      "Full-Stack Development",
      "UI/UX Design",
      "Cloud Deployment",
    ],
    sameAs: [
      "https://divijmodi.tech/",
      "https://divijmodi.tech/about",
      "https://divijmodi.tech/projects",
      "https://divijmodi.tech/gallery",
      "https://divijmodi.tech/contact",
      "https://divij-999.github.io/portfolio/",
      "https://divij-999.github.io/portfolio/about",
      "https://divij-999.github.io/portfolio/projects",
      "https://divij-999.github.io/portfolio/gallery",
      "https://divij-999.github.io/portfolio/contact",
      "https://github.com/Divij-999",
      "https://www.linkedin.com/in/divij-modi",
      "https://www.instagram.com/obliviate_photography_03/",
      "https://www.instagram.com/obliviate_quotes_forever_03/",
      "https://in.pinterest.com/divijmodi/",
      "https://www.kaggle.com/divijmodi",
      "https://www.facebook.com/aryan.aryas.73/",
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://divijmodi.tech/",
    },
  };

  // ✅ Scroll to top when route changes for SPA SEO
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        {/* 🔹 Core SEO */}
        <title>Divij Modi | AI Enthusiast & Full-Stack Developer</title>
        <meta
          name="description"
          content="Explore the portfolio of Divij Modi — an AI Enthusiast, Full-Stack Developer, and Creative Technologist exploring AI, Automation, and Intelligent Systems."
        />
        <meta name="author" content="Divij Modi" />
        <meta name="application-name" content="Divij Modi Portfolio" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="google-site-verification"
          content="PDJoCAu5tzr9FfbSec6ydq8koZvNwTUDIMQV702cIVA"
        />

        {/* 🔹 Canonical + Open Graph */}
        <link rel="canonical" href={currentUrl} />
        <meta property="og:type" content="profile" />
        <meta
          property="og:title"
          content="Divij Modi – AI Enthusiast & Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Divij Modi — AI Enthusiast, Full-Stack Developer, and Creative Technologist."
        />
        <meta property="og:url" content={currentUrl} />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dz8olrqor/image/upload/v1761670044/divijmodi_hixlaf.jpg"
        />

        {/* 🔹 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Divij Modi – AI Enthusiast & Full-Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Exploring AI, Automation, and Full-Stack creativity through code and design."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dz8olrqor/image/upload/v1761670044/divijmodi_hixlaf.jpg"
        />

        {/* 🔹 JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Helmet>

      {/* 🔹 Core Layout */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <TooltipProvider>
          <BrowserRouter>
            <Toaster />
            <Sonner />
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
