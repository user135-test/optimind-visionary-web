import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "contact@optimind.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+91-XXXXXXXXXX",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "Ranchi, Jharkhand, India",
      description: "Come visit our office"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      content: "Monday - Friday",
      description: "9:00 AM - 6:00 PM IST"
    }
  ];

  const benefits = [
    "Free initial consultation and project assessment",
    "Dedicated project manager for seamless communication",
    "Transparent pricing with detailed project breakdown",
    "24/7 support during project development",
    "Post-launch maintenance and support included",
    "Flexible engagement models to suit your needs"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Ready to transform your business with innovative technology solutions? 
              Let's discuss your project and explore how we can help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="row g-4 mb-5">
            {contactInfo.map((info, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <div className="card text-center p-4 h-100 hover-shadow-primary transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="card-body">
                    <div className="text-primary mb-3 d-flex justify-content-center">
                      {info.icon}
                    </div>
                    <h3 className="h5 fw-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-foreground fw-medium mb-2">
                      {info.content}
                    </p>
                    <p className="small text-muted-foreground">
                      {info.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-12 col-lg-8">
              <div className="card p-4 animate-fade-in">
                <div className="card-header bg-transparent border-0 pb-0 mb-4">
                  <h2 className="text-3xl font-display font-bold text-foreground">
                    Start Your Project
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className="form-control"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Company Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+91-XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Service Required</label>
                      <select 
                        className="form-select" 
                        value={formData.service} 
                        onChange={(e) => handleChange("service", e.target.value)}
                      >
                        <option value="">Select a service</option>
                        <option value="IT Consulting & Strategy">IT Consulting & Strategy</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="Cloud Solutions & Migration">Cloud Solutions & Migration</option>
                        <option value="Cybersecurity Services">Cybersecurity Services</option>
                        <option value="Business Process Automation">Business Process Automation</option>
                        <option value="Digital Transformation">Digital Transformation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Project Budget</label>
                      <select 
                        className="form-select" 
                        value={formData.budget} 
                        onChange={(e) => handleChange("budget", e.target.value)}
                      >
                        <option value="">Select budget range</option>
                        <option value="Under ₹50,000">Under ₹50,000</option>
                        <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                        <option value="₹1,00,000 - ₹5,00,000">₹1,00,000 - ₹5,00,000</option>
                        <option value="₹5,00,000 - ₹10,00,000">₹5,00,000 - ₹10,00,000</option>
                        <option value="Above ₹10,00,000">Above ₹10,00,000</option>
                        <option value="Let's Discuss">Let's Discuss</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Project Details *</label>
                    <textarea
                      className="form-control"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about your project requirements, goals, and any specific challenges you're facing..."
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-100 bg-gradient-primary">
                    Send Message
                    <Send className="ms-2" size={20} />
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-12 col-lg-4">
              {/* Why Choose Us */}
              <div className="card p-4 mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <h3 className="h4 mb-4">Why Choose OptiMind?</h3>
                <div className="mb-0">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="d-flex align-items-start mb-3">
                      <CheckCircle className="text-secondary me-3 flex-shrink-0 mt-1" size={20} />
                      <span className="small text-muted-foreground">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="card p-4 mb-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
                <h3 className="h4 mb-4">Connect With Us</h3>
                <div className="d-grid gap-2">
                  <a href="https://www.linkedin.com/in/optimind-technologies-8608b1385/" className="btn btn-outline-primary d-flex align-items-center">
                    <Linkedin className="me-2" size={20} />
                    LinkedIn
                  </a>
                  <a href="#" className="btn btn-outline-primary d-flex align-items-center">
                    <Twitter className="me-2" size={20} />
                    Twitter
                  </a>
                  <a href="#" className="btn btn-outline-primary d-flex align-items-center">
                    <Instagram className="me-2" size={20} />
                    Instagram
                  </a>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="card bg-gradient-secondary text-white p-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <h3 className="h4 mb-3">Need Immediate Help?</h3>
                <p className="text-white/90 mb-3">
                  For urgent technical support or emergency assistance, contact us directly.
                </p>
                <button className="btn btn-light w-100">
                  <Phone className="me-2" size={16} />
                  Emergency Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;