import { ArrowRight, Calendar, User, Clock, Tag, TrendingUp, Shield, Cloud, Code } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredPost = {
    title: "Top 5 IT Trends for 2025 and How SMEs Should Prepare",
    excerpt: "Discover the emerging technologies that will shape business operations in 2025 and learn practical strategies for small and medium enterprises to stay competitive.",
    author: "OptiMind Technology Team",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Technology Trends",
    image: "featured-blog"
  };

  const blogPosts = [
    {
      title: "Why Cybersecurity Must Be a Board-Level Concern",
      excerpt: "Understanding why cybersecurity decisions need C-suite involvement and how to build a security-first culture in your organization.",
      author: "Security Expert",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Cybersecurity",
      tags: ["Security", "Management", "Risk"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Cloud Migration Checklist: 10 Steps to a Smooth Move",
      excerpt: "A comprehensive guide to planning and executing your cloud migration without disrupting business operations.",
      author: "Cloud Architect",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Cloud Computing",
      tags: ["Cloud", "Migration", "AWS"],
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Automating Repetitive Workflows: A Beginner's Guide",
      excerpt: "Learn how to identify automation opportunities and implement solutions that save time and reduce errors in your business processes.",
      author: "Process Automation Expert",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Automation",
      tags: ["Automation", "Productivity", "Workflows"],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Building Scalable Web Applications with Modern Technologies",
      excerpt: "Best practices for developing web applications that can handle growth while maintaining performance and user experience.",
      author: "Senior Developer",
      date: "November 20, 2024",
      readTime: "12 min read",
      category: "Development",
      tags: ["React", "Node.js", "Scalability"],
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const categories = [
    { name: "Technology Trends", count: 8 },
    { name: "Cybersecurity", count: 6 },
    { name: "Cloud Computing", count: 5 },
    { name: "Development", count: 7 },
    { name: "Digital Transformation", count: 4 },
    { name: "Automation", count: 3 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Tech Insights & Updates
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Stay ahead with the latest technology trends, best practices, and insights 
              from our team of experts at OptiMind Technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="card overflow-hidden hover-shadow-primary transition-all duration-300 animate-fade-in">
            <div className="row g-0">
              {/* Content */}
              <div className="col-12 col-lg-6">
                <div className="card-body p-5">
                  <span className="badge bg-primary text-white mb-3">
                    Featured Article
                  </span>
                  <h2 className="card-title h2 font-display font-bold text-foreground mb-3">
                    {featuredPost.title}
                  </h2>
                  <p className="card-text text-lg text-muted-foreground mb-4 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="d-flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                    <div className="d-flex align-items-center">
                      <User className="me-1" size={16} />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <Calendar className="me-1" size={16} />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <Clock className="me-1" size={16} />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <button className="btn btn-primary bg-gradient-primary">
                    Read Full Article
                    <ArrowRight className="ms-2" size={16} />
                  </button>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="col-12 col-lg-6 bg-gradient-subtle d-flex align-items-center justify-content-center p-5">
                <div className="text-center">
                  <TrendingUp className="text-primary mx-auto mb-3" size={96} />
                  <h3 className="h4 fw-semibold text-foreground mb-2">
                    IT Trends 2025
                  </h3>
                  <p className="text-muted-foreground">
                    Featured Article Visual
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="row g-5">
            {/* Main Content */}
            <div className="col-12 col-lg-8">
              <div className="mb-5 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
                  Latest Articles
                </h2>
                <p className="text-lg text-muted-foreground">
                  Expert insights and practical guides to help you make informed technology decisions
                </p>
              </div>

              <div className="row g-4">
                {blogPosts.map((post, index) => (
                  <div key={index} className="col-12 col-md-6">
                    <div className="card h-100 hover-shadow-primary transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="card-header bg-transparent border-0 pb-2">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <span className="badge bg-outline-secondary">{post.category}</span>
                          <div className="text-primary">
                            {post.icon}
                          </div>
                        </div>
                        <h3 className="card-title h5">
                          {post.title}
                        </h3>
                      </div>
                      <div className="card-body pt-2">
                        <p className="card-text text-muted-foreground mb-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="d-flex flex-wrap gap-2 text-sm text-muted-foreground mb-3">
                          <div className="d-flex align-items-center">
                            <Calendar size={12} className="me-1" />
                            <span>{post.date}</span>
                          </div>
                          <div className="d-flex align-items-center">
                            <Clock size={12} className="me-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <div className="mb-3">
                          {post.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="badge bg-secondary me-1 text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <button className="btn btn-outline-primary btn-sm w-100">
                          Read More
                          <ArrowRight className="ms-2" size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-5">
                <button className="btn btn-outline-primary btn-lg">
                  Load More Articles
                  <ArrowRight className="ms-2" size={16} />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-12 col-lg-4">
              {/* Categories */}
              <div className="card p-4 mb-4 animate-fade-in">
                <h3 className="h4 mb-4 d-flex align-items-center">
                  <Tag className="text-primary me-2" size={20} />
                  Categories
                </h3>
                <div className="d-grid gap-2">
                  {categories.map((category, index) => (
                    <div key={index} className="d-flex align-items-center justify-content-between p-2 rounded hover:bg-muted transition-colors cursor-pointer">
                      <span className="text-foreground">{category.name}</span>
                      <span className="badge bg-secondary text-xs">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="card bg-gradient-primary text-white p-4 mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <h3 className="h4 mb-3">
                  Stay Updated
                </h3>
                <p className="text-white/90 mb-4">
                  Get the latest tech insights and updates delivered to your inbox.
                </p>
                <div className="mb-3">
                  <input 
                    type="email" 
                    className="form-control mb-3"
                    placeholder="Your email address"
                  />
                  <button className="btn btn-light w-100">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Need Expert Technology Advice?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Our team of technology experts is ready to help you navigate complex decisions 
            and implement solutions that drive your business forward.
          </p>
          
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Schedule Consultation
              <ArrowRight className="ms-2" size={20} />
            </Link>
            <Link to="/services" className="btn btn-outline-light btn-lg">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;