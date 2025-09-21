import { ArrowRight, Calendar, User, Clock, Tag, TrendingUp, Shield, Cloud, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    },
    {
      title: "Data Backup Strategies for Small Businesses",
      excerpt: "Essential backup strategies to protect your business data and ensure quick recovery from unexpected data loss incidents.",
      author: "Data Management Specialist",
      date: "November 15, 2024",
      readTime: "5 min read",
      category: "Data Management",
      tags: ["Backup", "Data Security", "Recovery"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "ROI of Digital Transformation: Measuring Success",
      excerpt: "How to calculate and track the return on investment for your digital transformation initiatives with practical metrics.",
      author: "Business Analyst",
      date: "November 8, 2024",
      readTime: "9 min read",
      category: "Digital Transformation",
      tags: ["ROI", "Analytics", "Strategy"],
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
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-primary transition-all duration-300 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content */}
                <div className="p-8 lg:p-12">
                  <Badge className="mb-4 bg-primary text-white">
                    Featured Article
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-8">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <Button className="bg-gradient-primary hover:shadow-primary">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                {/* Image Placeholder */}
                <div className="bg-gradient-subtle flex items-center justify-center p-8">
                  <div className="text-center">
                    <TrendingUp className="w-24 h-24 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      IT Trends 2025
                    </h3>
                    <p className="text-muted-foreground">
                      Featured Article Visual
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="mb-12 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  Latest Articles
                </h2>
                <p className="text-lg text-muted-foreground">
                  Expert insights and practical guides to help you make informed technology decisions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card 
                    key={index}
                    className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                          {post.icon}
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white">
                        Read More
                        <ArrowRight className="ml-2 w-3 h-3" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button size="lg" variant="outline" className="hover:bg-primary hover:text-white">
                  Load More Articles
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <Card className="p-6 animate-fade-in">
                <CardTitle className="text-xl mb-6 flex items-center">
                  <Tag className="w-5 h-5 mr-2 text-primary" />
                  Categories
                </CardTitle>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                    >
                      <span className="text-foreground">{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Newsletter Signup */}
              <Card className="p-6 bg-gradient-primary text-white animate-fade-in" style={{animationDelay: '0.2s'}}>
                <CardTitle className="text-xl mb-4">
                  Stay Updated
                </CardTitle>
                <p className="text-white/90 mb-6">
                  Get the latest tech insights and updates delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="w-full p-3 rounded-lg text-foreground"
                  />
                  <Button variant="secondary" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </Card>

              {/* Popular Tags */}
              <Card className="p-6 animate-fade-in" style={{animationDelay: '0.3s'}}>
                <CardTitle className="text-xl mb-6">
                  Popular Tags
                </CardTitle>
                <div className="flex flex-wrap gap-2">
                  {["React", "AWS", "Security", "Node.js", "Cloud", "AI", "Automation", "DevOps"].map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-light font-semibold px-8 py-4 text-lg"
              asChild
            >
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-400 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg"
              asChild
            >
              <Link to="/services">
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;