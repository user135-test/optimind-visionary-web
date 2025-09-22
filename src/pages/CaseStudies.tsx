import { ArrowRight, ExternalLink, Calendar, Building2, Users, TrendingUp, Clock, CheckCircle } from "lucide-react";
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
              <div key={index} className={`row g-5 align-items-center animate-fade-in ${index % 2 === 1 ? 'flex-row-reverse' : ''}`} style={{animationDelay: `${index * 0.2}s`}}>
                {/* Content */}
                <div className="col-12 col-lg-6">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <span className="badge bg-secondary">{study.industry}</span>
                    <div className="d-flex align-items-center text-muted-foreground">
                      <Calendar size={16} className="me-1" />
                      <span className="small">{study.duration}</span>
                    </div>
                    <div className="d-flex align-items-center text-muted-foreground">
                      <Users size={16} className="me-1" />
                      <span className="small">{study.team}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
                    {study.title}
                  </h2>
                  
                  <p className="text-lg text-primary fw-semibold mb-4">
                    {study.client}
                  </p>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold text-foreground mb-2">Challenge</h3>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold text-foreground mb-2">Solution</h3>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="h5 fw-semibold text-foreground mb-3">Results</h3>
                    <div className="row g-2">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="col-12 col-md-6">
                          <div className="d-flex align-items-center">
                            <CheckCircle className="text-secondary me-2 flex-shrink-0" size={20} />
                            <span className="text-muted-foreground fw-medium small">{result}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="h5 fw-semibold text-foreground mb-3">Technologies Used</h3>
                    <div className="d-flex flex-wrap gap-1">
                      {study.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="badge bg-outline-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className="col-12 col-lg-6">
                  <div className="card h-96 bg-gradient-subtle d-flex align-items-center justify-content-center hover-shadow-primary transition-shadow duration-300">
                    <div className="card-body text-center p-5">
                      <Building2 className="text-primary mx-auto mb-3" size={96} />
                      <h3 className="h4 fw-semibold text-foreground mb-2">
                        {study.title}
                      </h3>
                      <p className="text-muted-foreground">
                        Visual representation of the project implementation
                      </p>
                    </div>
                  </div>
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

          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-12 col-md-4">
                <div className="card p-4 h-100 hover-shadow-primary transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="card-body">
                    <div className="d-flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <TrendingUp key={i} className="text-accent" size={20} />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 fst-italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <h4 className="fw-semibold text-foreground mb-1">{testimonial.name}</h4>
                      <p className="small text-primary mb-0">{testimonial.position}</p>
                    </div>
                  </div>
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
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join the growing list of businesses that have transformed their operations 
            with OptiMind Technologies. Let's create your success story together.
          </p>
          
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start Your Project
              <ArrowRight className="ms-2" size={20} />
            </Link>
            <Link to="/services" className="btn btn-outline-light btn-lg">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;