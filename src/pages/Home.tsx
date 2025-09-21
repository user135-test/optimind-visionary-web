import { ArrowRight, CheckCircle, Users, Building2, Shield, Zap, Cloud, Code, Cog, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "IT Consulting",
      description: "Strategy & roadmaps for technology-driven growth"
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Software Development",
      description: "Scalable web & mobile apps"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Migration, optimization, and managed cloud"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Risk assessment, monitoring, incident response"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Business Process Automation",
      description: "Automate repetitive processes, increase efficiency"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Align people, process, and technology"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const benefits = [
    "Expert IT consulting and strategy",
    "Custom software solutions",
    "Secure cloud migration",
    "24/7 monitoring and support"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              OptiMind Technologies
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
              Visionary Solutions for a Smarter Future
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              At OptiMind Technologies, we empower businesses to grow through smart IT consulting, 
              secure cloud solutions, and tailored software that solves real problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 hover:shadow-glow font-semibold px-8 py-4 text-lg"
                asChild
              >
                <Link to="/contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg"
                asChild
              >
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-slide-up">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-8">
                  <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-primary"
              asChild
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
                Why Choose OptiMind?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We combine deep technical expertise with business acumen to deliver solutions that 
                drive real results. Our client-first approach ensures every project exceeds expectations.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-secondary hover:shadow-primary"
                asChild
              >
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-slide-up">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Expert Team</h3>
                <p className="text-sm text-muted-foreground">Certified professionals with years of experience</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 mt-8">
                <Building2 className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Enterprise Grade</h3>
                <p className="text-sm text-muted-foreground">Solutions built for scale and reliability</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Secure & Compliant</h3>
                <p className="text-sm text-muted-foreground">Bank-level security and industry compliance</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 mt-8">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">Agile development with quick turnarounds</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let's discuss how OptiMind Technologies can help you achieve your digital transformation goals. 
            Get started with a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-light font-semibold px-8 py-4 text-lg"
              asChild
            >
              <Link to="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-400 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg"
              asChild
            >
              <Link to="/case-studies">
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;