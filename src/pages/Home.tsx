import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Instagram,
  Brain, 
  Code, 
  Pen, 
  Camera,
  PenTool,
  Heart
} from "lucide-react";
import heroImage from "@/assets/writer-photographer-hero.jpg"; // Using the more abstract tech background for a professional feel

const Home = () => {
  // A combined list of your technical and creative skills
  const passions = [
    { icon: Brain, name: "AI & ML", desc: "LLMs, Neural Networks" },
    { icon: Code, name: "Development", desc: "Full-stack Solutions" },
    { icon: PenTool, name: "Creative Writing", desc: "Quotes & Stories that Touch Hearts" },
    { icon: Camera, name: "Photography", desc: "Capturing Life's Beautiful Moments" },
    { icon: Pen, name: "Technical Writing", desc: "Sharing Knowledge & Insights" },
    { icon: Heart, name: "Inspiration", desc: "Spreading Positivity Through Art" },
  ];
  
  // Kept your featured quotes section as it adds great personality
  const featuredQuotes = [
    {
      text: "Love is a question whose perfect answer never existed",
      category: "Love"
    },
    {
      text: "It's ok to take long, perfect choice demands time",
      category: "Hope"
    },
    {
      text: "Fear is not of making new relations, Fear is of the silence after that",
      category: "Truth"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section - Merged Identity */}
      <section className="relative min-h-screen flex items-center justify-center particle-bg overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            {/* <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Divij Modi</span>
            </h1> */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Divij Modi',
                  1000, // wait 1s before replacing "Divij Modi" with ""
                  '',
                  500,
                  'Divij Modi', // re-type the name
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="gradient-text"
                repeat={Infinity}
              />
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              AI Engineer • Full-Stack Developer • Creative Soul
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Building intelligent systems with code, and capturing life's beauty through words and lens.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button variant="glass" size="lg" asChild>
                <Link to="/about">
                  Learn About Me
                </Link>
              </Button>
            </div>

            {/* Social Links - All of them! */}
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                <a href="https://github.com/Divij-999" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                <a href="https://www.linkedin.com/in/divij-modi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
               <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                <a href="https://www.instagram.com/obliviate_quotes_forever_03" target="_blank" rel="noopener noreferrer" aria-label="Instagram for Quotes">
                  <Instagram className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                <a href="https://www.instagram.com/obliviate_photography_03" target="_blank" rel="noopener noreferrer" aria-label="Instagram for Photography">
                  <Camera className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Passions Section - Merged */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Where <span className="gradient-text">Technology Meets Creativity</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I thrive at the intersection of logical problem-solving and creative expression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {passions.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={skill.name}
                  className="glass hover-lift cursor-pointer group animate-fade-in-up border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                    <p className="text-muted-foreground">{skill.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Featured Quotes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A Glimpse of My <span className="gradient-text">Creative Side</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of thoughts and reflections on life, love, and everything in between.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredQuotes.map((quote, index) => (
              <Card
                key={index}
                className="glass hover-lift cursor-pointer group animate-fade-in-up border-primary/20 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 flex flex-col justify-between h-full">
                  <blockquote className="text-lg italic mb-4 text-foreground leading-relaxed">
                    "{quote.text}"
                  </blockquote>
                  <div className="mt-auto">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {quote.category}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Call to Action - Merged */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="gradient-text">Currently in Ahmedabad</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Building the next generation of AI applications and pursuing creative endeavors. 
            Always excited to collaborate on innovative projects, whether technical or creative.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Let's Connect <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;