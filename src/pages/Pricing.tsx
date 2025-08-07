import { Layout } from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, X, Star, ArrowRight } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "49",
      period: "month",
      description: "Perfect for small businesses and startups",
      popular: false,
      features: [
        "10,000 verifications/month",
        "Real-time API access",
        "Basic integrations",
        "Email support",
        "Standard verification speed",
        "Basic reporting"
      ],
      notIncluded: [
        "Bulk upload processing",
        "Advanced analytics",
        "Custom integrations",
        "Priority support"
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial?utm_source=morgantonga.com&utm_medium=pricing&utm_campaign=starter"
    },
    {
      name: "Professional",
      price: "149",
      period: "month",
      description: "Ideal for growing sales teams and businesses",
      popular: true,
      features: [
        "100,000 verifications/month",
        "Real-time API access",
        "All integrations included",
        "Priority email & chat support",
        "High-speed verification",
        "Advanced reporting & analytics",
        "Bulk upload processing",
        "Custom webhooks",
        "Dedicated account manager"
      ],
      notIncluded: [
        "Enterprise SLA",
        "Custom deployment",
        "White-label solution"
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial?utm_source=morgantonga.com&utm_medium=pricing&utm_campaign=professional"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with custom needs",
      popular: false,
      features: [
        "Unlimited verifications",
        "Real-time API access",
        "All integrations included",
        "24/7 priority support",
        "Maximum verification speed",
        "Custom reporting & analytics",
        "Advanced bulk processing",
        "Custom integrations",
        "Dedicated success manager",
        "Enterprise SLA (99.9%)",
        "Custom deployment options",
        "White-label solution",
        "Custom compliance requirements"
      ],
      notIncluded: [],
      cta: "Contact Sales",
      ctaLink: "https://salescentri.com/contact/sales-inquiry?utm_source=morgantonga.com&utm_medium=pricing&utm_campaign=enterprise"
    }
  ];

  const faqs = [
    {
      question: "How does the free trial work?",
      answer: "Get 1,000 free email verifications to test our platform. No credit card required. Trial includes access to all features available in the Professional plan."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Upgrades are immediate, and downgrades take effect at the next billing cycle."
    },
    {
      question: "What happens if I exceed my monthly limit?",
      answer: "We'll notify you before you reach your limit. You can upgrade your plan or purchase additional credits at any time."
    },
    {
      question: "Do you offer annual discounts?",
      answer: "Yes! Save 20% when you pay annually. Contact our sales team for custom enterprise pricing and volume discounts."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any plan. We also provide free onboarding and integration support for Professional and Enterprise plans."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary-light/5" />
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge variant="secondary" className="mb-6">
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Simple, Scalable
              <span className="text-gradient block">Pricing Plans</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Choose the perfect plan for your contact validation needs. 
              All plans include our industry-leading 99.5% accuracy guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a 
                  href="https://salescentri.com/get-started/free-trial?utm_source=morgantonga.com&utm_medium=pricing&utm_campaign=hero" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Free Trial
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://salescentri.com/contact/sales-inquiry?utm_source=morgantonga.com&utm_medium=pricing&utm_campaign=contact_sales" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Contact Sales
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover-lift transition-all duration-300 animate-fade-in ${
                  plan.popular 
                    ? 'border-primary shadow-glow scale-105' 
                    : 'border-border shadow-custom-md'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {plan.popular && (
                  <Badge 
                    variant="default" 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white"
                  >
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-display">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-6">
                    {plan.price === "Custom" ? (
                      <div className="text-4xl font-bold">Custom</div>
                    ) : (
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="text-muted-foreground ml-1">/{plan.period}</span>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start opacity-50">
                        <X className="h-5 w-5 text-muted-foreground mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "hero" : "default"}
                    size="lg"
                    asChild
                  >
                    <a 
                      href={plan.ctaLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {plan.cta}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              All Plans Include
            </h2>
            <p className="text-xl text-muted-foreground">
              Essential features available across all pricing tiers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "99.5% accuracy guarantee",
              "GDPR & SOC 2 compliance",
              "Real-time verification",
              "API access included",
              "CRM integrations",
              "Email & bounce detection",
              "Detailed reporting",
              "Data export options"
            ].map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center animate-fade-in"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about our pricing and plans
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Still have questions? We're here to help.
              </p>
              <Button variant="outline" asChild>
                <a 
                  href="https://salescentri.com/contact/support-request?utm_source=morgantonga.com&utm_medium=pricing&utm_campaign=support" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Contact Support
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of businesses improving their contact data quality with Contact Validator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta-secondary" size="xl" asChild>
                <a 
                  href="https://salescentri.com/get-started/free-trial?utm_source=morgantonga.com&utm_medium=pricing&utm_campaign=bottom_cta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Free Trial
                </a>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a 
                  href="https://salescentri.com/get-started/book-demo?utm_source=morgantonga.com&utm_medium=pricing&utm_campaign=book_demo" 
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