import { Layout } from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, Zap, TrendingUp, Settings, BarChart3, Users, Database, Clock, RefreshCw } from "lucide-react";
import dataVisualizationImage from "@/assets/data-visualization.jpg";
import analyticsImage from "@/assets/analytics-dashboard.jpg";

export default function Features() {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Real-time Email Verification",
      description: "Validate email addresses instantly with our advanced verification algorithms. Detect invalid, risky, and disposable emails in real-time.",
      benefits: ["99.5% accuracy rate", "Sub-second response time", "Detect disposable emails", "Syntax validation"]
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Data Security & Compliance",
      description: "Enterprise-grade security with GDPR, SOC 2, and CCPA compliance. Your data is protected with military-grade encryption.",
      benefits: ["SOC 2 Type II certified", "GDPR compliant", "256-bit encryption", "Zero data retention policy"]
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Bulk Processing Power",
      description: "Process millions of contacts simultaneously with our high-performance infrastructure. Perfect for large-scale campaigns.",
      benefits: ["Process 10M+ records/hour", "Parallel processing", "Progress tracking", "Resume interrupted jobs"]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Deliverability Enhancement",
      description: "Improve your email deliverability rates by up to 40% by removing invalid and risky email addresses from your lists.",
      benefits: ["40% better deliverability", "Reduce bounce rates", "Protect sender reputation", "Increase open rates"]
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "CRM Integration",
      description: "Seamlessly integrate with popular CRM platforms including Salesforce, HubSpot, Pipedrive, and 50+ other tools.",
      benefits: ["50+ integrations", "Real-time sync", "Custom webhooks", "API-first architecture"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Advanced Analytics",
      description: "Get detailed insights into your contact data quality with comprehensive reports and analytics dashboards.",
      benefits: ["Quality score metrics", "Trend analysis", "Export reports", "Custom dashboards"]
    }
  ];

  const stats = [
    { number: "500M+", label: "Emails Verified" },
    { number: "99.5%", label: "Accuracy Rate" },
    { number: "10K+", label: "Happy Customers" },
    { number: "<100ms", label: "Average Response Time" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary-light/5" />
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge variant="secondary" className="mb-6">
              Contact Validator Features
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Powerful Features for
              <span className="text-gradient block">Perfect Contact Data</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover the comprehensive suite of features that make our Contact Validator 
              the most trusted solution for B2B data validation and email verification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a 
                  href="https://salescentri.com/solutions/use-case-navigator/demo?utm_source=morgantonga.com&utm_medium=features&utm_campaign=demo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Try Interactive Demo
                </a>
              </Button>
              <Button variant="cta-secondary" size="lg" asChild>
                <a 
                  href="https://salescentri.com/get-started/free-trial?utm_source=morgantonga.com&utm_medium=features&utm_campaign=free_trial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Free Trial
                </a>
              </Button>
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
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
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

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Everything You Need for Contact Validation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive feature set ensures your contact data is accurate, 
              secure, and ready for successful outbound campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Demo Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">
              See It In Action
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Powerful Data Visualization & Analytics
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our intuitive dashboard provides real-time insights into your contact data quality 
              and validation performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Real-time Analytics Dashboard
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>Live validation status tracking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>Detailed quality score metrics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>Historical trend analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>Custom reporting and exports</span>
                </div>
              </div>
              <Button variant="cta" size="lg" asChild>
                <a 
                  href="https://salescentri.com/solutions/use-case-navigator/demo?utm_source=morgantonga.com&utm_medium=features&utm_campaign=analytics_demo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Try Interactive Demo
                </a>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={analyticsImage} 
                alt="Contact Validator analytics dashboard showing data quality metrics" 
                className="rounded-2xl shadow-custom-xl w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src={dataVisualizationImage} 
                alt="Advanced data visualization showing email validation flow and network connections" 
                className="rounded-2xl shadow-custom-xl w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Advanced Data Flow Visualization
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>Visual data processing pipeline</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>Network topology insights</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>Real-time validation flow</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>Performance optimization views</span>
                </div>
              </div>
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://salescentri.com/docs/user-guide?utm_source=morgantonga.com&utm_medium=features&utm_campaign=documentation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Documentation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Calculate Your ROI
              </h2>
              <p className="text-xl text-muted-foreground">
                See how Contact Validator can improve your campaign performance and save costs.
              </p>
            </div>

            <Card className="gradient-card shadow-custom-xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-4">
                    <Users className="h-12 w-12 text-primary mx-auto" />
                    <div>
                      <div className="text-2xl font-bold text-primary">40%</div>
                      <div className="text-muted-foreground">Better Deliverability</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Database className="h-12 w-12 text-primary mx-auto" />
                    <div>
                      <div className="text-2xl font-bold text-primary">85%</div>
                      <div className="text-muted-foreground">Reduced Bounce Rate</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto" />
                    <div>
                      <div className="text-2xl font-bold text-primary">3x</div>
                      <div className="text-muted-foreground">ROI Improvement</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button variant="cta" size="lg" asChild>
                    <a 
                      href="https://salescentri.com/contact/sales-inquiry/request-quote?utm_source=morgantonga.com&utm_medium=features&utm_campaign=roi_calculator" 
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Transform Your Contact Data?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of businesses who trust Contact Validator for their data validation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a 
                  href="https://salescentri.com/get-started/free-trial?utm_source=morgantonga.com&utm_medium=features&utm_campaign=bottom_cta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Free Trial
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a 
                  href="https://salescentri.com/get-started/book-demo?utm_source=morgantonga.com&utm_medium=features&utm_campaign=book_demo" 
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