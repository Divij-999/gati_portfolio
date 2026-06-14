import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Code, 
  Pen, 
  MapPin, 
  Clock, 
  Heart, 
  Camera, 
  Linkedin, 
  Github, 
  Instagram 
} from "lucide-react";
import { Link } from "react-router-dom";


const About = () => {
  // A combined list of your technical and creative interests
  const interests = [
    "Artificial Intelligence",
    "Creative Writing",
    "Large Language Models",
    "Photography",
    "Full-Stack Development",
    "Storytelling",
    "Software Architecture",
    "Visual Arts",
    "Human Connection",
  ];

  // New, merged values that apply to both your tech and creative work
  const values = [
    {
      icon: Brain,
      title: "Analytical Creativity",
      description: "Fusing logical problem-solving from engineering with the expressive, out-of-the-box thinking from the arts."
    },
    {
      icon: Heart,
      title: "Human-Centric Storytelling",
      description: "Whether in code or a photograph, my goal is to create something that connects with and impacts people."
    },
    {
      icon: Pen,
      title: "Purposeful Craft",
      description: "A deep belief in building things—be it software or a story—with intention, quality, and a clear purpose."
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 particle-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My Journey in <span className="gradient-text">Code & Creativity</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              An AI Engineer who sees the world through a developer's logic and a photographer's lens. Based in Ahmedabad, I build intelligent systems and tell compelling stories.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section - Rewritten to tell a unified story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6">
                Hello, I'm <span className="gradient-text">Divij Modi</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  By day, I'm an AI Engineer driven by a deep curiosity for how technology can solve complex problems. I thrive on building robust, scalable applications and exploring the frontiers of Large Language Models. My mind is trained to see patterns, logic, and systems.
                </p>
                <p>
                  But when I step away from the keyboard, I pick up a camera or a pen. Through photography and writing, I explore the world from a different angle—focusing on emotion, beauty, and the stories hidden in plain sight. This is where I connect with the human side of the equation.
                </p>
                <p>
                  I believe these two worlds aren't separate; they're complementary. Engineering taught me how to build, and art taught me why. Both are about observing the world, finding a unique perspective, and creating something meaningful from it.
                </p>
              </div>

              <div className="flex items-center space-x-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Ahmedabad, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Open to new opportunities</span>
                </div>
              </div>
            </div>

            <Card className="glass border-primary/20 hover-lift">
              <CardHeader>
                <CardTitle className="gradient-text">My Dual Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Code className="h-4 w-4 text-primary" />
                      AI & Development
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Building intelligent, full-stack solutions and exploring the potential of LLMs.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Pen className="h-4 w-4 text-primary" />
                      Writing & Storytelling
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Crafting meaningful quotes and technical articles that inspire and inform.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Camera className="h-4 w-4 text-primary" />
                      Photography
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Capturing fleeting moments and transforming them into lasting visual stories.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My Guiding <span className="gradient-text">Principles</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The core beliefs that drive my approach to both technology and art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={value.title}
                  className="glass hover-lift border-primary/20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A Spectrum of <span className="gradient-text">Interests</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A few of the topics that fuel my curiosity and passion for learning.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {interests.map((interest, index) => (
              <Badge 
                key={interest} 
                variant="secondary" 
                className="text-sm py-2 px-4 glass border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new ideas, collaborations, or just having a great conversation. Feel free to reach out on the platform that suits you best.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="https://www.linkedin.com/in/divij-modi" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </a>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <a href="https://github.com/Divij-999" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> GitHub
              </a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="https://www.instagram.com/obliviate_quotes_forever_03" target="_blank" rel="noopener noreferrer">
                <Pen className="mr-2 h-5 w-5" /> Quotes
              </a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="https://www.instagram.com/obliviate_photography_03" target="_blank" rel="noopener noreferrer">
                <Camera className="mr-2 h-5 w-5" /> Photos
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;