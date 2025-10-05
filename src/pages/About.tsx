import { Target, Award, Heart, BookOpen, Lightbulb, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ComingSoonAnimation from "@/components/animations/ComingSoonAnimation";

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our business dealings and client relationships."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client-first",
      description: "Every decision we make is guided by what's best for our clients' success and growth."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "We stay ahead of technology trends and continuously upskill to deliver cutting-edge solutions."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Practical Innovation",
      description: "We focus on innovative solutions that solve real business problems and deliver measurable results."
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Company Founded",
      description: "OptiMind Technologies established in Ranchi with a vision to empower local businesses through technology."
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Successfully delivered our first enterprise-level solution, setting the foundation for growth."
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Expanded our team with certified professionals in cloud computing and cybersecurity."
    },
    {
      year: "2022",
      title: "Regional Recognition",
      description: "Recognized as a leading IT consulting firm in Jharkhand with 25+ successful projects."
    },
    {
      year: "2023",
      title: "Digital Transformation Focus",
      description: "Launched comprehensive digital transformation services for SMEs and enterprises."
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Established as a trusted innovation partner for businesses across multiple industries."
    }
  ];

  const industries = [
    { name: "Healthcare", description: "HIPAA compliant solutions for medical practices and hospitals" },
    { name: "Finance", description: "Secure financial systems and compliance-ready applications" },
    { name: "Education", description: "E-learning platforms and educational management systems" },
    { name: "Retail", description: "E-commerce solutions and inventory management systems" },
    { name: "Startups & SMEs", description: "Scalable technology foundations for growing businesses" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Who We Are
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              OptiMind Technologies is a technology consulting and solutions company focused on 
              delivering measurable business outcomes through innovative IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Card className="p-8 hover:shadow-primary transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Target className="w-10 h-10 text-primary mr-4" />
                  <h2 className="text-3xl font-display font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses with technology solutions that drive growth, enhance efficiency, 
                  and create sustainable competitive advantages. We bridge the gap between complex 
                  technology and practical business needs.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-primary transition-shadow duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Award className="w-10 h-10 text-secondary mr-4" />
                  <h2 className="text-3xl font-display font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the most trusted technology partner for businesses in Jharkhand and beyond, 
                  known for delivering innovative solutions that transform challenges into opportunities 
                  and drive digital excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-primary transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-0">
                  <div className="text-primary mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A timeline of growth, innovation, and success in transforming businesses through technology
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-primary/20"></div>
              
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center mb-12 animate-slide-up ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-6 hover:shadow-primary transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="text-primary font-bold text-lg mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We have deep expertise across multiple industries, understanding unique challenges and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-primary transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate professionals behind OptiMind Technologies
            </p>
          </div>

          <ComingSoonAnimation />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join the growing list of satisfied clients who trust OptiMind Technologies 
            for their digital transformation journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-light font-semibold px-8 py-4 text-lg"
              asChild
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-400 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg"
              asChild
            >
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;