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
import NotFound from "./pages/NotFound";
import useScrollToTop from "./hooks/useScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  useScrollToTop();

  const currentUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${location.pathname}`
      : "/";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gati Gupta",
    url: currentUrl,
    jobTitle: "Developer & Computer Science Student",
    description:
      "Gati Gupta is a developer and computer science student passionate about building software, exploring new technologies, and learning by doing.",
    knowsAbout: [
      "Python",
      "Software Development",
      "Problem Solving",
      "Web Development",
      "Computer Science",
    ],
    sameAs: [
      "https://github.com/GatiGupta",
      "https://www.linkedin.com/in/gati-gupta-642280264/",
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": currentUrl,
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Gati Gupta | Developer & CS Student</title>
        <meta
          name="description"
          content="Portfolio of Gati Gupta — a developer and computer science student building software, exploring technology, and growing through curiosity."
        />
        <meta name="author" content="Gati Gupta" />
        <meta name="application-name" content="Gati Gupta Portfolio" />
        <meta name="theme-color" content="#1f3a2b" />

        <link rel="canonical" href={currentUrl} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Gati Gupta — Developer & CS Student" />
        <meta
          property="og:description"
          content="Portfolio of Gati Gupta — developer, CS student, and curious builder."
        />
        <meta property="og:url" content={currentUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gati Gupta — Developer & CS Student" />
        <meta
          name="twitter:description"
          content="Building software and learning by doing."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Helmet>

      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
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
