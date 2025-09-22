import { ArrowRight, Code, Cloud, Shield, Cog, TrendingUp, Users, CheckCircle, Star } from "lucide-react";
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
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 hover-shadow-primary transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="card-header bg-transparent border-0 pb-2">
                    <div className="text-primary mb-3">
                      {service.icon}
                    </div>
                    <h3 className="card-title text-xl text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="card-body pt-2">
                    <ul className="list-unstyled mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="d-flex align-items-center mb-2">
                          <CheckCircle className="text-secondary me-2 flex-shrink-0" size={16} />
                          <span className="small text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="border-top pt-3">
                      <p className="text-primary fw-semibold mb-3">{service.price}</p>
                      <button className="btn btn-primary w-100 bg-gradient-primary">
                        Get Quote
                        <ArrowRight className="ms-2" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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

          <div className="row g-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="d-flex align-items-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <Star className="text-accent me-3 flex-shrink-0" size={24} />
                  <span className="text-foreground fw-medium">{benefit}</span>
                </div>
              </div>
            ))}
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
          
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Free Consultation
              <ArrowRight className="ms-2" size={20} />
            </Link>
            <Link to="/case-studies" className="btn btn-outline-light btn-lg">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;