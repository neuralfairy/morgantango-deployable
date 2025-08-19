import { Layout } from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, Zap, TrendingUp, Star, ArrowRight, Users, BarChart3, Clock } from "lucide-react";
import heroTeamImage from "@/assets/hero-team.jpg";
import dataCenterImage from "@/assets/data-center.jpg";
import analyticsImage from "@/assets/analytics-dashboard.jpg";

const Index = () => {
  const features = [
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      title: "99.5% Accuracy Rate",
      description: "Industry-leading email verification with real-time validation and comprehensive checks."
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with GDPR compliance and 256-bit encryption protection."
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Lightning Fast",
      description: "Process millions of contacts in minutes with our high-performance infrastructure."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Boost Deliverability",
      description: "Improve email deliverability by up to 40% and reduce bounce rates significantly."
    }
  ];

  const testimonials = [
    {
      quote: "Contact Validator helped us improve our email deliverability by 35% and saved thousands in marketing costs.",
      author: "Sarah Johnson",
      role: "VP of Marketing",
      company: "TechCorp Solutions",
      rating: 5
    },
    {
      quote: "The accuracy is incredible. We've reduced our bounce rate from 15% to less than 2% since switching.",
      author: "Michael Chen",
      role: "Sales Director", 
      company: "GrowthLabs Inc",
      rating: 5
    },
    {
      quote: "Integration was seamless and their support team is outstanding. Highly recommend for any B2B company.",
      author: "Emily Rodriguez",
      role: "Operations Manager",
      company: "DataDriven Co",
      rating: 5
    }
  ];

  const stats = [
    { number: "500M+", label: "Emails Verified", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "10K+", label: "Happy Customers", icon: <Users className="h-6 w-6" /> },
    { number: "99.5%", label: "Accuracy Rate", icon: <BarChart3 className="h-6 w-6" /> },
    { number: "<100ms", label: "Response Time", icon: <Clock className="h-6 w-6" /> }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(${heroTeamImage})` }}
        />
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-fade-in">
              <Badge variant="secondary" className="mb-6">
                Professional Contact Validator
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                Validate Contacts.
                <span className="text-gradient block">Boost Success.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Improve your outbound success rate with our professional contact validator. 
                Verify email accuracy, reduce bounce rates, and protect your sender reputation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="hero" size="xl" asChild>
                  <a 
                    href="https://salescentri.com/get-started/free-trial?utm_source=morgantonga.com&utm_medium=hero&utm_campaign=free_trial" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Start Free Trial
                  </a>
                </Button>
                <Button variant="cta-secondary" size="xl" asChild>
                  <a 
                    href="https://salescentri.com/solutions/use-case-navigator/demo?utm_source=morgantonga.com&utm_medium=hero&utm_campaign=demo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Watch Demo
                  </a>
                </Button>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-success mr-2" />
                <span>No credit card required • 1,000 free validations</span>
              </div>
            </div>
            
            <div className="relative animate-fade-in lg:animate-fade-in-delay">
              <div className="relative bg-gradient-card rounded-2xl p-8 shadow-custom-xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{ backgroundImage: `url(${analyticsImage})` }}
                />
                <div className="absolute top-4 left-4 flex space-x-2 z-10">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="relative mt-8 space-y-4 z-10">
                  <div className="bg-background rounded-lg p-4 border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Validation Status</span>
                      <Badge variant="default" className="bg-success">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Valid
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">sarah.johnson@techcorp.com</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Processing</span>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-2"></div>
                        <span className="text-xs">Validating...</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">Processing 50,000 contacts</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border">
                    <div className="text-center py-4">
                      <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium">99.5% Accuracy</p>
                      <p className="text-xs text-muted-foreground">Real-time verification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex justify-center text-primary mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">
              Core Features
            </Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Why Choose Our
              <span className="text-gradient block">Contact Validator?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Built for B2B sales teams who demand accuracy, speed, and reliability 
              in their contact validation processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover-lift group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Calculate Your ROI
              </h2>
              <p className="text-xl text-muted-foreground">
                See how much you can save and improve with Contact Validator
              </p>
            </div>

            <Card className="gradient-card shadow-custom-xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-4">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto" />
                    <div>
                      <div className="text-3xl font-bold text-primary">40%</div>
                      <div className="text-muted-foreground">Deliverability Improvement</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Shield className="h-12 w-12 text-primary mx-auto" />
                    <div>
                      <div className="text-3xl font-bold text-primary">85%</div>
                      <div className="text-muted-foreground">Bounce Rate Reduction</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <BarChart3 className="h-12 w-12 text-primary mx-auto" />
                    <div>
                      <div className="text-3xl font-bold text-primary">3x</div>
                      <div className="text-muted-foreground">Campaign ROI</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button variant="cta" size="lg" asChild>
                    <a 
                      href="https://salescentri.com/contact/sales-inquiry/request-quote?utm_source=morgantonga.com&utm_medium=homepage&utm_campaign=roi_calculator" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Get Custom ROI Report
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">
              Customer Success
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Trusted by 10,000+ Businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what our customers say about their success with Contact Validator
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ready to Improve Your 
              <span className="block">Contact Data Quality?</span>
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Join thousands of businesses using Contact Validator to boost their outbound success rates. 
              Start with 1,000 free validations - no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta-secondary" size="xl" asChild>
                <a 
                  href="https://salescentri.com/get-started/free-trial?utm_source=morgantonga.com&utm_medium=homepage&utm_campaign=bottom_cta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a 
                  href="https://salescentri.com/get-started/book-demo?utm_source=morgantonga.com&utm_medium=homepage&utm_campaign=book_demo" 
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
};

export default Index;
