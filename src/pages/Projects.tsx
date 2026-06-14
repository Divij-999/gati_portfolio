import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, Github, ArrowRight, Star, GitFork, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Code, Tags } from "lucide-react"; // Or any icons you prefer

// GitHub API Types
interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  created_at: string;
  archived: boolean;
  fork: boolean;
}

const Projects = () => {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedLanguage, setSelectedLanguage] = useState<string | "All">("All");
  const [selectedTopic, setSelectedTopic] = useState<string | "All">("All");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/GatiGupta/repos?sort=updated&per_page=100');
        if (!response.ok) throw new Error('Failed to fetch projects');

        const data: GitHubRepo[] = await response.json();

        const filteredProjects = data
          .filter(repo => !repo.fork && !repo.archived)
          .sort((a, b) => {
            const aScore = a.stargazers_count * 10 + new Date(a.updated_at).getTime() / 1000000000;
            const bScore = b.stargazers_count * 10 + new Date(b.updated_at).getTime() / 1000000000;
            return bScore - aScore;
          });

        setProjects(filteredProjects);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });

  // Unique languages and topics for filters
  const languages = Array.from(new Set(projects.map(p => p.language).filter(Boolean)));
  const topics = Array.from(new Set(projects.flatMap(p => p.topics)));

  // Filter projects based on selections
  const filteredProjects = projects.filter(project => {
    const languageMatch = selectedLanguage === "All" || project.language === selectedLanguage;
    const topicMatch = selectedTopic === "All" || project.topics.includes(selectedTopic);
    return languageMatch && topicMatch;
  });

  const featuredProjects = filteredProjects.slice(0, 4);
  const otherProjects = filteredProjects.slice(4);

  if (loading) {
    return (
      <main className="min-h-screen pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8 particle-bg">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Loading my latest projects from GitHub...
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="glass border-primary/20">
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/4" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3 mb-4" />
                    <div className="flex gap-2">
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-6 w-16" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8 particle-bg">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-destructive max-w-3xl mx-auto">
              {error}. Please try again later.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 particle-bg">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A look at what I've been building and learning on GitHub — pulled live from my profile.
          </p>
        </div>
      </section>

      {/* Filters */}
      {/* <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-4 mb-8">
          <div>
            <label className="mr-2 font-medium">Language:</label>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="border rounded p-1"
            >
              <option value="All">All</option>
              {languages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mr-2 font-medium">Topic:</label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="border rounded p-1"
            >
              <option value="All">All</option>
              {topics.map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
          </div>
        </div>
      </section> */}

      {/* Filters */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-12">
          
          {/* Language Filter */}
          <div className="w-full sm:w-auto flex flex-col gap-2">
            <Label htmlFor="language-filter" className="text-sm font-medium text-muted-foreground">Language</Label>
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger id="language-filter" className="w-full sm:w-[200px]">
                <div className="flex items-center gap-2">
                  <Code className="h-4 w-4 text-primary/80" />
                  <SelectValue placeholder="Filter by language" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Languages</SelectItem>
                {languages.map(lang => (
                  <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Topic Filter */}
          <div className="w-full sm:w-auto flex flex-col gap-2">
            <Label htmlFor="topic-filter" className="text-sm font-medium text-muted-foreground">Topic</Label>
            <Select value={selectedTopic} onValueChange={setSelectedTopic}>
              <SelectTrigger id="topic-filter" className="w-full sm:w-[200px]">
                <div className="flex items-center gap-2">
                  <Tags className="h-4 w-4 text-primary/80" />
                  <SelectValue placeholder="Filter by topic" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Topics</SelectItem>
                {topics.map(topic => (
                  <SelectItem key={topic} value={topic}>{topic}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A few highlighted projects I've been working on.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="glass hover-lift border-primary/20 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.name}
                      </CardTitle>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1"><Star className="h-3 w-3" />{project.stargazers_count}</div>
                        <div className="flex items-center gap-1"><GitFork className="h-3 w-3" />{project.forks_count}</div>
                        <div className="flex items-center gap-1"><Clock className="h-3 w-3" />{formatDate(project.updated_at)}</div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      {project.homepage && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6 leading-relaxed">
                    {project.description || "No description available"}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.language && <Badge variant="secondary" className="text-xs">{project.language}</Badge>}
                    {project.topics.slice(0, 4).map(topic => (
                      <Badge key={topic} variant="outline" className="text-xs">{topic}</Badge>
                    ))}
                    {project.topics.length > 4 && <Badge variant="outline" className="text-xs">+{project.topics.length - 4} more</Badge>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Other <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Additional experiments and learning projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={project.id}
                className="glass hover-lift border-primary/20 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                      {project.name}
                    </CardTitle>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3" />
                        </a>
                      </Button>
                      {project.homepage && (
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                          <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1"><Star className="h-3 w-3" />{project.stargazers_count}</div>
                    <div className="flex items-center gap-1"><GitFork className="h-3 w-3" />{project.forks_count}</div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm mb-4 leading-relaxed">
                    {project.description || "No description available"}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1">
                    {project.language && <Badge variant="secondary" className="text-xs">{project.language}</Badge>}
                    {project.topics.slice(0, 2).map(topic => (
                      <Badge key={topic} variant="outline" className="text-xs">{topic}</Badge>
                    ))}
                    {project.topics.length > 2 && <Badge variant="outline" className="text-xs">+{project.topics.length - 2}</Badge>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Interested in <span className="gradient-text">Collaborating?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Always up for interesting projects and new ideas. Let's build something together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="https://github.com/GatiGupta" target="_blank" rel="noopener noreferrer">
                View All on GitHub <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;