import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    
    // Reset form
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
      description: "Send us an email anytime",
      action: "mailto:contact@optimind.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+91-XXXXXXXXXX",
      description: "Mon-Fri from 9am to 6pm",
      action: "tel:+91XXXXXXXXXX"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "Ranchi, Jharkhand, India",
      description: "Come visit our office",
      action: "#"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      content: "Monday - Friday",
      description: "9:00 AM - 6:00 PM IST",
      action: "#"
    }
  ];

  const services = [
    "IT Consulting & Strategy",
    "Custom Software Development",
    "Cloud Solutions & Migration",
    "Cybersecurity Services",
    "Business Process Automation",
    "Digital Transformation",
    "Other"
  ];

  const budgetRanges = [
    "Under ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹5,00,000",
    "₹5,00,000 - ₹10,00,000",
    "Above ₹10,00,000",
    "Let's Discuss"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="text-center p-6 hover:shadow-primary transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-0">
                  <div className="text-primary mb-4 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-foreground font-medium mb-2">
                    {info.content}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 animate-fade-in">
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-3xl font-display font-bold text-foreground">
                    Start Your Project
                  </CardTitle>
                  <p className="text-lg text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.
                  </p>
                </CardHeader>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="Your company name"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+91-XXXXXXXXXX"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="service">Service Required</Label>
                      <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service, index) => (
                            <SelectItem key={index} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Project Budget</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range, index) => (
                            <SelectItem key={index} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about your project requirements, goals, and any specific challenges you're facing..."
                      required
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:shadow-primary">
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <Card className="p-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-xl">Why Choose OptiMind?</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="p-6 animate-fade-in" style={{animationDelay: '0.3s'}}>
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-xl">Connect With Us</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-4">
                    <a 
                      href="https://www.linkedin.com/in/optimind-technologies-8608b1385/"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-primary" />
                      <span className="text-foreground">LinkedIn</span>
                    </a>
                    <a 
                      href="#"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Twitter</span>
                    </a>
                    <a 
                      href="#"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Instagram</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="p-6 bg-gradient-secondary text-white animate-fade-in" style={{animationDelay: '0.4s'}}>
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-white/90 mb-4">
                    For urgent technical support or emergency assistance, contact us directly.
                  </p>
                  <Button variant="secondary" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions about our services and process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary based on complexity, but most projects are completed within 2-6 months. We provide detailed timelines during the consultation phase."
                },
                {
                  question: "Do you provide ongoing support?",
                  answer: "Yes, we offer comprehensive post-launch support and maintenance packages to ensure your systems continue to perform optimally."
                },
                {
                  question: "What technologies do you work with?",
                  answer: "We work with modern technologies including React, Node.js, AWS, Azure, and more. We choose the best technology stack for each project."
                },
                {
                  question: "How do you ensure project security?",
                  answer: "We implement industry-standard security practices, conduct regular security audits, and ensure compliance with relevant regulations."
                }
              ].map((faq, index) => (
                <Card 
                  key={index}
                  className="p-6 animate-scale-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;