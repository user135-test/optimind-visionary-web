import { ArrowRight, CheckCircle, Users, Building2, Shield, Zap, Cloud, Code, Cog, TrendingUp } from "lucide-react";
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
              <Link to="/contact" className="btn btn-light btn-lg px-4 py-3 d-flex align-items-center">
                Get a Free Consultation
                <ArrowRight className="ms-2" size={20} />
              </Link>
              <Link to="/services" className="btn btn-outline-light btn-lg px-4 py-3">
                Explore Services
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="row g-4 mt-5 animate-slide-up">
            {stats.map((stat, index) => (
              <div key={index} className="col-6 col-md-3 text-center">
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

          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow hover-shadow-primary transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="card-body p-4">
                    <div className="text-primary mb-3">
                      {service.icon}
                    </div>
                    <h3 className="card-title h5 text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="card-text text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/services" className="btn btn-primary btn-lg bg-gradient-primary">
              View All Services
              <ArrowRight className="ms-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Why Choose OptiMind?
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                We combine deep technical expertise with business acumen to deliver solutions that 
                drive real results. Our client-first approach ensures every project exceeds expectations.
              </p>
              
              <div className="mb-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="d-flex align-items-center mb-3">
                    <CheckCircle className="text-secondary me-3 flex-shrink-0" size={24} />
                    <span className="text-foreground fw-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn btn-primary btn-lg bg-gradient-secondary">
                Learn More About Us
                <ArrowRight className="ms-2" size={20} />
              </Link>
            </div>

            <div className="col-12 col-lg-6">
              <div className="row g-3 animate-slide-up">
                <div className="col-6">
                  <div className="card text-center p-3 h-100">
                    <div className="card-body">
                      <Users className="text-primary mx-auto mb-3" size={48} />
                      <h5 className="fw-semibold text-foreground mb-2">Expert Team</h5>
                      <p className="small text-muted-foreground">Certified professionals with years of experience</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-6" style={{marginTop: '2rem'}}>
                  <div className="card text-center p-3 h-100">
                    <div className="card-body">
                      <Building2 className="text-secondary mx-auto mb-3" size={48} />
                      <h5 className="fw-semibold text-foreground mb-2">Enterprise Grade</h5>
                      <p className="small text-muted-foreground">Solutions built for scale and reliability</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-6">
                  <div className="card text-center p-3 h-100">
                    <div className="card-body">
                      <Shield className="text-accent mx-auto mb-3" size={48} />
                      <h5 className="fw-semibold text-foreground mb-2">Secure & Compliant</h5>
                      <p className="small text-muted-foreground">Bank-level security and industry compliance</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-6" style={{marginTop: '2rem'}}>
                  <div className="card text-center p-3 h-100">
                    <div className="card-body">
                      <Zap className="text-primary mx-auto mb-3" size={48} />
                      <h5 className="fw-semibold text-foreground mb-2">Fast Delivery</h5>
                      <p className="small text-muted-foreground">Agile development with quick turnarounds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-5 max-w-3xl mx-auto">
            Let's discuss how OptiMind Technologies can help you achieve your digital transformation goals. 
            Get started with a free consultation today.
          </p>
          
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Schedule Free Consultation
              <ArrowRight className="ms-2" size={20} />
            </Link>
            <Link to="/case-studies" className="btn btn-outline-light btn-lg">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;