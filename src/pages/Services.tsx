import { ArrowRight, Code, Cloud, Shield, Cog, TrendingUp, Users, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "IT Consulting & Strategy",
      description: "Strategic technology roadmaps and digital transformation planning",
      features: [
        "Technology Assessment & Audit",
        "Digital Strategy Development",
        "IT Infrastructure Planning",
        "Risk Assessment & Mitigation",
        "Budget Planning & ROI Analysis"
      ],
      price: "Starting from ₹25,000/month"
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "Custom Software & App Development",
      description: "Scalable web and mobile applications tailored to your business needs",
      features: [
        "Web Application Development",
        "Mobile App Development (iOS/Android)",
        "API Development & Integration",
        "Database Design & Management",
        "UI/UX Design & Prototyping"
      ],
      price: "Starting from ₹50,000/project"
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Solutions & Migration",
      description: "Secure cloud migration, optimization, and managed cloud services",
      features: [
        "Cloud Migration Strategy",
        "AWS/Azure/Google Cloud Setup",
        "Cloud Security Implementation",
        "Performance Optimization",
        "24/7 Monitoring & Support"
      ],
      price: "Starting from ₹30,000/month"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity & Risk Management",
      description: "Comprehensive security solutions to protect your digital assets",
      features: [
        "Security Assessment & Penetration Testing",
        "Firewall & Network Security",
        "Data Encryption & Backup",
        "Compliance Management",
        "Incident Response & Recovery"
      ],
      price: "Starting from ₹20,000/month"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Business Process Automation",
      description: "Automate repetitive processes and increase operational efficiency",
      features: [
        "Workflow Analysis & Design",
        "Custom Automation Solutions",
        "Integration with Existing Systems",
        "Employee Training & Support",
        "Performance Monitoring"
      ],
      price: "Starting from ₹40,000/project"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Digital Transformation Advisory",
      description: "Comprehensive guidance to align people, process, and technology",
      features: [
        "Digital Maturity Assessment",
        "Change Management Strategy",
        "Technology Implementation",
        "Staff Training & Development",
        "Continuous Improvement Planning"
      ],
      price: "Starting from ₹35,000/month"
    }
  ];

  const benefits = [
    "Free initial consultation and project assessment",
    "Dedicated project manager for seamless communication",
    "Agile development methodology for faster delivery",
    "Post-launch support and maintenance included",
    "Scalable solutions that grow with your business",
    "Transparent pricing with no hidden costs"
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We understand your business needs, challenges, and objectives through detailed consultations."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "We develop a comprehensive strategy and project plan tailored to your specific requirements."
    },
    {
      step: "03",
      title: "Development & Implementation",
      description: "Our expert team implements the solution using best practices and cutting-edge technologies."
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description: "Rigorous testing ensures quality before deployment to your production environment."
    },
    {
      step: "05",
      title: "Support & Optimization",
      description: "Ongoing support and continuous optimization to ensure peak performance."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Comprehensive IT solutions designed to accelerate your business growth 
              and drive digital transformation success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader className="pb-4">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4">
                    <p className="text-primary font-semibold mb-4">{service.price}</p>
                    <Button className="w-full bg-gradient-primary hover:shadow-primary">
                      Get Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver exceptional value through our proven methodology and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <Star className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <div 
                  key={index}
                  className="text-center animate-scale-in"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-primary/30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let's discuss your project requirements and create a customized solution 
            that drives your business forward. Get a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-light font-semibold px-8 py-4 text-lg"
              asChild
            >
              <Link to="/contact">
                Get Free Consultation
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
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;