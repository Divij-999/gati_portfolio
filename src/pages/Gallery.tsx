// File: src/components/Gallery.js (Final Version for Local Dev & Production)

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, BookOpen, Camera, ExternalLink, Instagram, Loader2 } from "lucide-react";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("photos");

  const [photos, setPhotos] = useState([]);
  const [quotes, setQuotes] = useState([]);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstagramData = async (accountType) => {
      setLoading(true);
      setError(null);

      // --- CHANGE 1: Using your LIVE Vercel URL ---
      // const apiUrl = `https://divij-portfolio-instagram-api.vercel.app/api/instagram?account=${accountType}`;
      // In Gallery.js
      const apiUrl = `https://divij-portfolio-instagram-api.vercel.app/api/instagram?account=${accountType}`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          const errorData = await response.json();
          console.error("API Proxy Error:", errorData);
          throw new Error(errorData.error || `Failed to fetch ${accountType} data.`);
        }

        const data = await response.json();
        
        if (accountType === 'photos') {
          const images = data.data
            .filter(media => media.media_type === "IMAGE")
            .map(media => ({
              id: media.id,
              caption: media.caption || "Instagram Post",
              image: media.media_url,
              permalink: media.permalink,
              // --- CHANGE 2: Re-adding likes and comments ---
              likes: media.like_count || 0,
              comments: media.comments_count || 0,
            }));
          setPhotos(images);
        } else {
          const parsedQuotes = data.data
            .filter(media => media.media_type === "IMAGE")
            .map(media => {
              const caption = media.caption || "";
              const text = caption.split('\n')[0].replace(/"/g, '').trim();
              const categoryMatch = caption.match(/#(\w+)/);
              const category = categoryMatch ? categoryMatch[1] : "Inspiration";
              
              return {
                id: media.id,
                image: media.media_url,
                text: text || "A beautiful quote.",
                category: category,
                permalink: media.permalink,
                // --- CHANGE 2: Re-adding likes and comments ---
                likes: media.like_count || 0,
                comments: media.comments_count || 0,
              };
            });
          setQuotes(parsedQuotes);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (activeTab === 'photos' && photos.length === 0) {
      fetchInstagramData('photos');
    } else if (activeTab === 'quotes' && quotes.length === 0) {
      fetchInstagramData('quotes');
    }
  }, [activeTab, photos.length, quotes.length]);

  const QuoteCard = ({ quote }) => (
    <Card className="glass hover-lift border-primary/20 group overflow-hidden flex flex-col h-full">
      <a href={quote.permalink} target="_blank" rel="noopener noreferrer" className="block aspect-square bg-muted/20 relative">
        <img
          src={quote.image}
          alt={quote.text}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </a>
      <CardContent className="p-4 flex flex-col flex-grow">
        <blockquote className="text-sm italic text-foreground mb-3 flex-grow">
          "{quote.text}"
        </blockquote>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <Badge variant="secondary" className="glass border-primary/20 capitalize">
            {quote.category}
          </Badge>
          {/* --- CHANGE 3: Displaying likes and comments --- */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              <span>{quote.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              <span>{quote.comments}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const PhotoCard = ({ photo }) => (
    <Card className="glass hover-lift border-primary/20 group overflow-hidden flex flex-col h-full">
      <a href={photo.permalink} target="_blank" rel="noopener noreferrer" className="block aspect-square bg-muted/20 relative">
        <img
          src={photo.image}
          alt={photo.caption}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </a>
      <CardContent className="p-4 flex flex-col flex-grow">
        <p className="text-sm text-foreground mb-3 line-clamp-3 flex-grow">{photo.caption}</p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          {/* --- CHANGE 3: Displaying likes and comments --- */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              <span>{photo.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              <span>{photo.comments}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <main className="min-h-screen pt-20">
      {/* (The rest of your JSX remains exactly the same) */}
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 particle-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My Creative <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A collection of inspiring quotes and captivating photographs from my creative journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://www.instagram.com/obliviate_quotes_forever_03" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-5 w-5" /> Follow Quotes
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="https://www.instagram.com/obliviate_photography_03" target="_blank" rel="noopener noreferrer">
                  <Camera className="mr-2 h-5 w-5" /> Follow Photography
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="flex gap-1 p-1 bg-muted/20 rounded-lg">
              <button onClick={() => setActiveTab("quotes")} className={`px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2 ${activeTab === "quotes" ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"}`}>
                <BookOpen className="h-4 w-4" /> Quotes & Inspiration
              </button>
              <button onClick={() => setActiveTab("photos")} className={`px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2 ${activeTab === "photos" ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"}`}>
                <Camera className="h-4 w-4" /> Photography
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="ml-4 text-muted-foreground">Loading {activeTab}...</p>
            </div>
          ) : error ? (
            <div className="text-center py-10 text-destructive">
              <p>Oops! Something went wrong.</p>
              <p className="text-sm">{error}</p>
            </div>
          ) : activeTab === 'quotes' ? (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Words That <span className="gradient-text">Inspire</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Handcrafted quotes to uplift your spirit and touch your heart.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quotes.map((quote, index) => (
                  <div key={quote.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <QuoteCard quote={quote} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Captured <span className="gradient-text">Moments</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Visual stories that speak without words.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo, index) => (
                  <div key={photo.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <PhotoCard photo={photo} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            <span className="gradient-text">Stay Connected</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Follow me on Instagram for daily inspiration and fresh content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="https://www.instagram.com/obliviate_quotes_forever_03" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                @obliviate_quotes_forever_03
              </a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="https://www.instagram.com/obliviate_photography_03" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                @obliviate_photography_03
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;