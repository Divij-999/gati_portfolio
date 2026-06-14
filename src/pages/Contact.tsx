// File: src/components/Contact.tsx (Secure & Enhanced Version)

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin, Instagram, Camera, MapPin, Clock, Send, Copy, Check } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ✅ SECURITY FIX: Securely get credentials from environment variables
    const serviceID = 'service_ym264wr';
    const templateID = 'template_ehww4ye';
    const publicKey = '0jrvBpZ7IdE5y16_o';

    if (!serviceID || !templateID || !publicKey) {
      toast({
        title: "Configuration Error",
        description: "Email service is not configured correctly.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(serviceID, templateID, formData, publicKey);
      
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      toast({
        title: "Error",
        description: `Submission failed: ${error.text || "Please try again."}`,
        variant: "destructive",
      });
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const [copied, setCopied] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Check for touch device support on component mount
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleCopy = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
    document.body.removeChild(textArea);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "For general inquiries & collaborations",
      value: "dmodi2806@gmail.com",
      action: "mailto:dmodi2806@gmail.com",
      actionText: "Send Email"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "For professional networking",
      value: "in/divij-modi",
      action: "https://www.linkedin.com/in/divij-modi",
      actionText: "Connect"
    },
    {
      icon: Instagram,
      title: "Quotes",
      description: "For creative writing & inspiration",
      value: "@obliviate_quotes_forever_03",
      action: "https://www.instagram.com/obliviate_quotes_forever_03",
      actionText: "Follow"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "For visual stories & photo inquiries",
      value: "@obliviate_photography_03",
      action: "https://www.instagram.com/obliviate_photography_03",
      actionText: "Follow"
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 particle-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you want to discuss AI, collaborate on a creative project, or just say hello, I'm always open to connecting.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card 
                key={method.title}
                className="glass hover-lift border-primary/20 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-2 text-sm">{method.description}</p>
                  <p className="text-sm font-mono text-primary mb-4 truncate">{method.value}</p>
                  
                  {/* --- ✅ HYBRID SOLUTION: Best of Both Worlds --- */}
                  {method.title === "Email" ? (
                    isTouchDevice ? (
                      // If it's a touch device (mobile), render the reliable mailto: link
                      <Button variant="glass" size="sm" asChild>
                        <a href={method.action}>
                          <Mail className="mr-2 h-4 w-4" /> {method.actionText}
                        </a>
                      </Button>
                    ) : (
                      // If it's a desktop, render the "Copy Email" button
                      <Button 
                        variant="glass" 
                        size="sm" 
                        onClick={() => handleCopy(method.value)}
                        className="w-36" // Fixed width to prevent layout shift
                      >
                        {copied ? (
                          <>
                            <Check className="mr-2 h-4 w-4" /> Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="mr-2 h-4 w-4" /> Copy Email
                          </>
                        )}
                      </Button>
                    )
                  ) : (
                    // For all other methods, render the standard external link button
                    <Button variant="glass" size="sm" asChild>
                      <a href={method.action} target="_blank" rel="noopener noreferrer">
                        {method.actionText}
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <Card className="glass border-primary/20 animate-slide-in-left">
              <CardHeader>
                <CardTitle className="gradient-text">Send a Message</CardTitle>
                <CardDescription>
                  Have a question or a project in mind? Use the form below to get in touch directly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} className="glass border-primary/20" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} className="glass border-primary/20" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} className="glass border-primary/20" required />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} className="glass border-primary/20 min-h-[120px]" required />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Let's <span className="gradient-text">Create Together</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  I'm passionate about building intelligent solutions and crafting compelling narratives. Whether you have a technical challenge or a creative vision, I'm ready to listen.
                </p>
              </div>
              <Card className="glass border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">I'm currently interested in:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>AI/ML project collaborations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Technical and creative writing commissions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Open-source contributions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Photography or content creation projects</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Ahmedabad, Gujarat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>IST (GMT+5:30)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
