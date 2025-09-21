import { ArrowRight, ExternalLink, Calendar, Building2, Users, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Cloud Migration for Finance SME",
      client: "Regional Banking Solutions Pvt. Ltd.",
      industry: "Finance",
      duration: "3 months",
      team: "5 professionals",
      challenge: "Legacy infrastructure causing downtime and security vulnerabilities. High maintenance costs and limited scalability were hindering business growth.",
      solution: "Migrated entire infrastructure to AWS cloud with enhanced security protocols, implemented auto-scaling, and established disaster recovery procedures.",
      results: [
        "99.9% uptime improvement",
        "60% reduction in infrastructure costs",
        "Enhanced security compliance",
        "50% faster application performance"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "MongoDB", "React"],
      image: "finance-case-study"
    },
    {
      title: "Custom E-learning Platform",
      client: "EduTech Academy",
      industry: "Education",
      duration: "6 months",
      team: "8 professionals",
      challenge: "Need for a comprehensive online learning platform to serve 10,000+ students with features like live classes, assignments, and progress tracking.",
      solution: "Developed a scalable e-learning platform with real-time video streaming, interactive assignments, progress analytics, and mobile app support.",
      results: [
        "10,000+ active users served",
        "95% student satisfaction rate",
        "40% increase in course completion",
        "Seamless mobile experience"
      ],
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "AWS", "React Native"],
      image: "education-case-study"
    },
    {
      title: "Healthcare Management System",
      client: "MedCare Hospitals",
      industry: "Healthcare",
      duration: "4 months",
      team: "6 professionals",
      challenge: "Manual patient records management causing delays and errors. Need for HIPAA-compliant digital solution with appointment scheduling and billing.",
      solution: "Built comprehensive hospital management system with patient records, appointment scheduling, billing, and inventory management with full HIPAA compliance.",
      results: [
        "70% reduction in administrative time",
        "HIPAA compliance achieved",
        "95% appointment scheduling accuracy",
        "Integrated billing system"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Express", "Chart.js"],
      image: "healthcare-case-study"
    },
    {
      title: "E-commerce Platform for Retail Chain",
      client: "Fashion Forward Stores",
      industry: "Retail",
      duration: "5 months",
      team: "7 professionals",
      challenge: "Traditional retail business needed digital presence with inventory synchronization across multiple stores and online platform.",
      solution: "Developed multi-vendor e-commerce platform with real-time inventory sync, payment gateway integration, and analytics dashboard.",
      results: [
        "300% increase in online sales",
        "Real-time inventory tracking",
        "Omnichannel customer experience",
        "Advanced analytics & reporting"
      ],
      technologies: ["React", "Node.js", "Redis", "Stripe", "MongoDB", "AWS"],
      image: "retail-case-study"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CTO, Regional Banking Solutions",
      content: "OptiMind Technologies transformed our legacy infrastructure into a modern, secure cloud environment. Their expertise and professionalism exceeded our expectations.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "Director, EduTech Academy",
      content: "The e-learning platform they built has revolutionized our teaching methods. Student engagement has increased significantly, and the platform scales beautifully.",
      rating: 5
    },
    {
      name: "Dr. Amit Verma",
      position: "Hospital Administrator, MedCare",
      content: "The healthcare management system has streamlined our operations dramatically. We've seen significant improvements in efficiency and patient satisfaction.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Real success stories from businesses we've helped transform through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <Badge variant="secondary" className="text-sm">
                      {study.industry}
                    </Badge>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{study.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{study.team}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                    {study.title}
                  </h2>
                  
                  <p className="text-lg text-primary font-semibold mb-6">
                    {study.client}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Challenge</h3>
                      <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Solution</h3>
                      <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Results</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                            <span className="text-muted-foreground font-medium">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="h-96 bg-gradient-subtle flex items-center justify-center hover:shadow-primary transition-shadow duration-300">
                    <CardContent className="text-center p-8">
                      <Building2 className="w-24 h-24 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {study.title}
                      </h3>
                      <p className="text-muted-foreground">
                        Visual representation of the project implementation
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-primary transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <TrendingUp key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-primary">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our Portfolio Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to delivering exceptional value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed", icon: <Building2 className="w-8 h-8" /> },
              { number: "25+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
              { number: "99.9%", label: "Average Uptime", icon: <TrendingUp className="w-8 h-8" /> },
              { number: "24/7", label: "Support Available", icon: <Clock className="w-8 h-8" /> }
            ].map((stat, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-primary transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-0">
                  <div className="text-primary mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join the growing list of businesses that have transformed their operations 
            with OptiMind Technologies. Let's create your success story together.
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

export default CaseStudies;