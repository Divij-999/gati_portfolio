import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Code,
  Sprout,
  Clock,
  Heart,
  Compass,
  Linkedin,
  Github,
} from "lucide-react";

const About = () => {
  const interests = [
    "Software Development",
    "Python",
    "Problem Solving",
    "Web Development",
    "Open Source",
    "Algorithms",
    "Learning by Building",
    "Clean Code",
    "Computer Science",
  ];

  const values = [
    {
      icon: Brain,
      title: "Curiosity First",
      description:
        "I love understanding how things work under the hood — that curiosity drives most of what I build and learn.",
    },
    {
      icon: Heart,
      title: "Build with Care",
      description:
        "Whether it's a tiny script or a full project, I believe in writing it cleanly, thoughtfully, and with intent.",
    },
    {
      icon: Sprout,
      title: "Always Growing",
      description:
        "Every project is a chance to learn something new. Progress matters more than perfection.",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 particle-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              A Little About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A computer science student and developer who learns by building. Curious by nature, patient by practice.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6">
                Hello, I'm <span className="gradient-text">Gati Gupta</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  I'm a computer science student and developer who enjoys figuring things out — taking
                  ideas from "what if?" to something that actually runs.
                </p>
                <p>
                  Most of my time goes into writing Python, working on small projects, and picking up
                  new tools whenever a project demands it. I learn best by building, breaking, and
                  iterating until something clicks.
                </p>
                <p>
                  Beyond the code, I care about doing work that feels honest and well-crafted — the
                  kind of small details that no one notices when they're right, but everyone feels
                  when they're off.
                </p>
              </div>

              <div className="flex items-center space-x-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Open to new opportunities</span>
                </div>
              </div>
            </div>

            <Card className="glass border-primary/20 hover-lift">
              <CardHeader>
                <CardTitle className="gradient-text">What I'm Into</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Code className="h-4 w-4 text-primary" />
                      Development
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Writing Python, exploring web technologies, and shipping small projects end to end.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Brain className="h-4 w-4 text-primary" />
                      Problem Solving
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Breaking down hard problems into smaller, solvable pieces.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Compass className="h-4 w-4 text-primary" />
                      Exploration
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Always poking at new domains and tools just to see how they tick.
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
              The ideas that shape how I work — on code and everything else.
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
              A few of the topics that fuel my curiosity.
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
            Open to ideas, collaborations, and good conversations — find me on the platforms below.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/gati-gupta-642280264/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </a>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <a href="https://github.com/GatiGupta" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
