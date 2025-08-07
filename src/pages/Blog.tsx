import { Layout } from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight, ExternalLink } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      title: "The Complete Guide to Email Validation for B2B Sales Teams",
      excerpt: "Learn everything you need to know about email validation, from basic concepts to advanced strategies for improving your outbound success rates.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Best Practices",
      featured: true
    },
    {
      title: "How to Reduce Email Bounce Rates by 85%",
      excerpt: "Discover proven techniques and tools to dramatically reduce your email bounce rates and protect your sender reputation.",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Email Marketing"
    },
    {
      title: "GDPR Compliance in Contact Data Validation",
      excerpt: "Understanding GDPR requirements for contact data processing and how to maintain compliance while validating email addresses.",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Compliance"
    },
    {
      title: "API Integration Best Practices for Contact Validator",
      excerpt: "Step-by-step guide to integrating Contact Validator API into your existing systems and workflows.",
      author: "David Kim",
      date: "February 28, 2024",
      readTime: "12 min read",
      category: "Technical"
    },
    {
      title: "ROI Calculator: The True Cost of Invalid Email Data",
      excerpt: "Calculate the hidden costs of invalid email data and understand the financial impact on your marketing campaigns.",
      author: "Sarah Johnson",
      date: "February 22, 2024",
      readTime: "7 min read",
      category: "ROI Analysis"
    },
    {
      title: "Contact Validation vs Email Verification: What's the Difference?",
      excerpt: "Understanding the key differences between contact validation and email verification, and when to use each approach.",
      author: "Michael Chen",
      date: "February 18, 2024",
      readTime: "5 min read",
      category: "Education"
    }
  ];

  const categories = [
    "All Posts",
    "Best Practices", 
    "Email Marketing",
    "Compliance",
    "Technical",
    "ROI Analysis",
    "Education"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary-light/5" />
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge variant="secondary" className="mb-6">
              Thought Leadership
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Contact Validator
              <span className="text-gradient block">Knowledge Hub</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stay up-to-date with the latest insights, best practices, and industry trends 
              in contact validation and email verification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a 
                  href="https://salescentri.com/resources/whitepapers-ebooks?utm_source=morgantonga.com&utm_medium=blog&utm_campaign=resources" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Download Resources <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://salescentri.com/resources/tutorials-webinars?utm_source=morgantonga.com&utm_medium=blog&utm_campaign=webinars" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Watch Webinars
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={index === 0 ? "default" : "outline"} 
                className="cursor-pointer hover:bg-primary hover:text-white transition-colors animate-fade-in"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map((post, index) => (
        <section key={index} className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-4">Featured Article</Badge>
              <Card className="gradient-card shadow-custom-xl animate-fade-in">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <Badge variant="outline" className="mb-4">{post.category}</Badge>
                      <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mb-6">
                        <User className="h-4 w-4 mr-2" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="mr-4">{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Button variant="cta" asChild>
                        <a 
                          href="https://salescentri.com/resources/case-studies?utm_source=morgantonga.com&utm_medium=blog&utm_campaign=featured_post" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                      <p className="text-muted-foreground">Featured Article Image</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      ))}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground">
              Expert insights and actionable advice for contact validation success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card key={index} className="hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-muted h-48 rounded-t-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Article Image</p>
                </div>
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <Button variant="ghost" size="sm" asChild>
                      <a 
                        href="https://salescentri.com/resources/case-studies?utm_source=morgantonga.com&utm_medium=blog&utm_campaign=blog_post" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest contact validation insights delivered to your inbox monthly.
            </p>
            <Card className="gradient-card shadow-custom-xl">
              <CardContent className="p-8">
                <form className="flex flex-col sm:flex-row gap-4" action="https://salescentri.com/resources/whitepapers-ebooks" method="GET" target="_blank">
                  <input type="hidden" name="utm_source" value="morgantonga.com" />
                  <input type="hidden" name="utm_medium" value="blog" />
                  <input type="hidden" name="utm_campaign" value="newsletter_signup" />
                  <div className="flex-1">
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Enter your work email" 
                      className="w-full px-4 py-3 rounded-md border border-input bg-background"
                      required
                    />
                  </div>
                  <Button type="submit" variant="cta" size="lg">
                    Subscribe <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-sm text-muted-foreground mt-4">
                  Join 10,000+ professionals getting monthly insights. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Put Knowledge into Action?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Start validating your contact data today with our professional Contact Validator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta-secondary" size="xl" asChild>
                <a 
                  href="https://salescentri.com/get-started/free-trial?utm_source=morgantonga.com&utm_medium=blog&utm_campaign=bottom_cta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Free Trial <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a 
                  href="https://salescentri.com/get-started/book-demo?utm_source=morgantonga.com&utm_medium=blog&utm_campaign=book_demo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Book a Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}