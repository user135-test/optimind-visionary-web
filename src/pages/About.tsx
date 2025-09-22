import { Users, Target, Award, Heart, BookOpen, Lightbulb, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
          <div className="row g-5">
            <div className="col-12 col-lg-6">
              <div className="card h-100 p-4 hover-shadow-primary transition-shadow duration-300 animate-fade-in">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <Target className="text-primary me-3" size={40} />
                    <h2 className="text-3xl font-display font-bold text-foreground mb-0">Our Mission</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To empower businesses with technology solutions that drive growth, enhance efficiency, 
                    and create sustainable competitive advantages. We bridge the gap between complex 
                    technology and practical business needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="card h-100 p-4 hover-shadow-primary transition-shadow duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <Award className="text-secondary me-3" size={40} />
                    <h2 className="text-3xl font-display font-bold text-foreground mb-0">Our Vision</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To be the most trusted technology partner for businesses in Jharkhand and beyond, 
                    known for delivering innovative solutions that transform challenges into opportunities 
                    and drive digital excellence.
                  </p>
                </div>
              </div>
            </div>
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

          <div className="row g-4">
            {values.map((value, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3">
                <div className="card text-center p-4 h-100 hover-shadow-primary transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="card-body">
                    <div className="text-primary mb-4 d-flex justify-content-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
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
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join the growing list of satisfied clients who trust OptiMind Technologies 
            for their digital transformation journey.
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

export default About;