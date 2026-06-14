import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

import {
  ArrowRight,
  Github,
  Linkedin,
  Brain,
  Code,
  Sprout,
  Leaf,
  Lightbulb,
  Compass,
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const passions = [
    { icon: Code, name: "Development", desc: "Building clean, functional software" },
    { icon: Brain, name: "Problem Solving", desc: "Breaking down hard problems into simple steps" },
    { icon: Sprout, name: "Always Learning", desc: "Picking up new tools, languages, and ideas" },
    { icon: Lightbulb, name: "Curiosity", desc: "Understanding how and why things work" },
    { icon: Leaf, name: "Craft", desc: "Caring about the details that make things good" },
    { icon: Compass, name: "Exploration", desc: "Trying new domains beyond my comfort zone" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center particle-bg overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 float-organic">
              Hi, I'm{" "}
              <TypeAnimation
                sequence={[
                  "Gati Gupta",
                  1500,
                  "",
                  500,
                  "Gati Gupta",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                className="gradient-text"
                repeat={Infinity}
              />
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              Developer • Problem Solver • Lifelong Learner
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Building software, exploring ideas, and growing one project at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button variant="glass" size="lg" asChild>
                <Link to="/about">Learn About Me</Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                <a href="https://github.com/GatiGupta" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                <a
                  href="https://www.linkedin.com/in/gati-gupta-642280264/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Passions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What <span className="gradient-text">Drives Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A few of the things I care about — in code and beyond.
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

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="gradient-text">Let's build something together</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Always up for interesting projects, collaborations, or a good conversation about tech.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
