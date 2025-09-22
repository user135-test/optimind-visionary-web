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
            <div className="row g-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="col-12 col-md-6">
                  <div className="d-flex align-items-start group hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-shrink-0 me-3">
                      <div className="w-8 h-8 bg-accent rounded-circle d-flex align-items-center justify-content-center">
                        <CheckCircle className="text-white" size={20} />
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground mb-0">
                      {benefit}
                    </p>
                  </div>
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
          <div className="row g-4 max-w-6xl mx-auto">
            <div className="col-12 col-sm-6 col-lg-3 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto">
                  <Heart className="text-white" size={32} />
                </div>
              </div>
              <h3 className="h5 fw-semibold mb-2">Integrity</h3>
              <p className="text-muted-foreground">Honest, transparent relationships built on trust</p>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-secondary rounded-circle d-flex align-items-center justify-content-center mx-auto">
                  <Users className="text-white" size={32} />
                </div>
              </div>
              <h3 className="h5 fw-semibold mb-2">Client-first</h3>
              <p className="text-muted-foreground">Your success is our primary focus</p>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-accent rounded-circle d-flex align-items-center justify-content-center mx-auto">
                  <TrendingUp className="text-white" size={32} />
                </div>
              </div>
              <h3 className="h5 fw-semibold mb-2">Continuous Learning</h3>
              <p className="text-muted-foreground">Always growing, always improving</p>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto">
                  <Lightbulb className="text-white" size={32} />
                </div>
              </div>
              <h3 className="h5 fw-semibold mb-2">Practical Innovation</h3>
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
            <div className="row g-4">
              {openings.map((job, index) => (
                <div key={index} className="col-12 col-md-6">
                  <div className="card h-100 hover-shadow-lg transition-shadow duration-300">
                    <div className="card-header bg-transparent">
                      <div className="d-flex align-items-start justify-content-between">
                        <div>
                          <h3 className="card-title h5 mb-2">
                            {job.title}
                          </h3>
                          <div className="d-flex gap-2">
                            <span className="badge bg-secondary">{job.type}</span>
                            <span className="badge bg-outline-primary">{job.department}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="mb-3">
                        <div className="d-flex align-items-center mb-2 text-muted-foreground">
                          <MapPin size={16} className="me-2" />
                          <span>{job.location}</span>
                        </div>
                        <div className="d-flex align-items-center text-muted-foreground">
                          <Clock size={16} className="me-2" />
                          <span>Apply by: Open until filled</span>
                        </div>
                      </div>
                      <a 
                        href={`mailto:careers@optimind.com?subject=Application for ${job.title}`}
                        className="btn btn-primary w-100 bg-gradient-primary"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
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
            <a 
              href="mailto:careers@optimind.com?subject=General Application"
              className="btn btn-outline-light btn-lg d-inline-flex align-items-center"
            >
              <Mail className="me-2" size={20} />
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;