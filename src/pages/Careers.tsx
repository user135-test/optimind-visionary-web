import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Heart, 
  Lightbulb,
  MapPin,
  Clock,
  Mail
} from "lucide-react";

const Careers = () => {
  const benefits = [
    "Work on challenging and impactful projects",
    "Collaborate with a skilled, supportive team",
    "Continuous learning and growth opportunities",
    "Flexible, innovation-driven culture"
  ];

  const openings = [
    {
      title: "Frontend Developer Intern",
      type: "Internship",
      location: "Ranchi, Jharkhand",
      department: "Development"
    },
    {
      title: "Backend Developer Intern", 
      type: "Internship",
      location: "Ranchi, Jharkhand",
      department: "Development"
    },
    {
      title: "Cloud Solutions Engineer",
      type: "Full-time",
      location: "Ranchi, Jharkhand", 
      department: "Cloud"
    },
    {
      title: "Cybersecurity Analyst",
      type: "Full-time",
      location: "Ranchi, Jharkhand",
      department: "Security"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in-delay">
              At OptiMind Technologies, we are always looking for passionate and talented 
              individuals to join our growing team. If you're excited about IT consulting, 
              software development, cloud, and digital transformation — we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
              Why Work With Us
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Our Culture & Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-muted-foreground">Honest, transparent relationships built on trust</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Client-first</h3>
              <p className="text-muted-foreground">Your success is our primary focus</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
              <p className="text-muted-foreground">Always growing, always improving</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Practical Innovation</h3>
              <p className="text-muted-foreground">Smart solutions that deliver real results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
              Current Openings
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {openings.map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                          {job.title}
                        </CardTitle>
                        <CardDescription className="flex items-center space-x-4">
                          <Badge variant="secondary">{job.type}</Badge>
                          <Badge variant="outline">{job.department}</Badge>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>Apply by: Open until filled</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full mt-6 bg-gradient-primary hover:shadow-primary"
                      asChild
                    >
                      <a href="mailto:careers@optimind.com?subject=Application for {job.title}">
                        Apply Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always interested in connecting with talented individuals. 
              Send us your resume and let us know how you'd like to contribute to our mission.
            </p>
            <Button 
              size="lg" 
              variant="hero"
              className="text-lg px-8 py-4"
              asChild
            >
              <a href="mailto:careers@optimind.com?subject=General Application">
                <Mail className="w-5 h-5 mr-2" />
                Send Your Resume
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;