import { Layout } from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, MessageCircle, ExternalLink } from "lucide-react";

export default function FAQ() {
  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "What is Contact Validator and how does it work?",
          answer: "Contact Validator is a professional email verification service that validates email addresses in real-time. It checks for syntax errors, domain validity, mailbox existence, and identifies risky or disposable email addresses. Our advanced algorithms provide 99.5% accuracy in determining email deliverability."
        },
        {
          question: "How do I start using Contact Validator?",
          answer: "Getting started is easy! Sign up for a free account to receive 1,000 free email validations. No credit card required. You can then upload your contact list, integrate via API, or connect your CRM for seamless validation."
        },
        {
          question: "Do I need technical knowledge to use Contact Validator?",
          answer: "Not at all! Our platform is designed for users of all technical levels. We offer a simple web interface for bulk uploads, as well as comprehensive API documentation for developers. Our support team is also available to help with setup and integration."
        }
      ]
    },
    {
      title: "Features & Capabilities",
      faqs: [
        {
          question: "What types of email validation do you perform?",
          answer: "We perform comprehensive validation including: syntax checking, domain verification, MX record validation, mailbox existence checking, disposable email detection, role-based email identification, and spam trap detection. Each email receives a detailed validation result."
        },
        {
          question: "Can I validate emails in real-time?",
          answer: "Yes! Our API supports real-time validation with response times under 100ms. Perfect for validating emails at the point of entry in forms, registration processes, or during data collection."
        },
        {
          question: "Do you support bulk email validation?",
          answer: "Absolutely! Upload CSV files with millions of email addresses for bulk processing. Our high-performance infrastructure can process 10+ million emails per hour with progress tracking and the ability to resume interrupted jobs."
        }
      ]
    },
    {
      title: "Pricing & Plans",
      faqs: [
        {
          question: "How much does Contact Validator cost?",
          answer: "We offer three main plans: Starter ($49/month for 10K validations), Professional ($149/month for 100K validations), and Enterprise (custom pricing for unlimited validations). All plans include our accuracy guarantee and core features."
        },
        {
          question: "Is there a free trial available?",
          answer: "Yes! Every new account receives 1,000 free email validations with no credit card required. This gives you a chance to test our accuracy and see the quality of our validation results."
        },
        {
          question: "What happens if I exceed my monthly limit?",
          answer: "We'll notify you before you reach your limit. You can either upgrade your plan for immediate access to more validations or purchase additional credits. Your service won't be interrupted."
        }
      ]
    },
    {
      title: "Integration & API",
      faqs: [
        {
          question: "Which CRM platforms do you integrate with?",
          answer: "We integrate with 50+ popular platforms including Salesforce, HubSpot, Pipedrive, Mailchimp, Constant Contact, and many more. We also offer custom webhooks and a robust REST API for custom integrations."
        },
        {
          question: "How difficult is API integration?",
          answer: "Our API is designed to be developer-friendly with comprehensive documentation, code examples in multiple languages, and sandbox environment for testing. Most integrations can be completed in under an hour."
        },
        {
          question: "Do you provide API rate limits?",
          answer: "API rate limits vary by plan. Starter plans include 100 requests/minute, Professional plans get 1,000 requests/minute, and Enterprise plans have custom limits based on your needs."
        }
      ]
    },
    {
      title: "Security & Compliance",
      faqs: [
        {
          question: "Is my data secure with Contact Validator?",
          answer: "Yes! We're SOC 2 Type II certified and GDPR compliant. All data is encrypted with 256-bit encryption in transit and at rest. We follow strict security protocols and have a zero data retention policy for validated emails."
        },
        {
          question: "Are you GDPR compliant?",
          answer: "Absolutely! We're fully GDPR compliant and can serve as your data processor. We provide data processing agreements (DPA) and ensure all email validation activities meet GDPR requirements for lawful processing."
        },
        {
          question: "Do you store or retain validated email addresses?",
          answer: "No, we have a strict zero data retention policy. Email addresses are validated and results are returned, but the actual email addresses are not stored in our systems. Only validation metadata is retained for quality and service improvement."
        }
      ]
    },
    {
      title: "Technical Support",
      faqs: [
        {
          question: "What support options are available?",
          answer: "We offer multiple support channels: email support for all plans, live chat for Professional and Enterprise plans, phone support for Enterprise customers, and comprehensive documentation and tutorials for self-service help."
        },
        {
          question: "What are your support hours?",
          answer: "Email support is available 24/7 with response times within 4 hours for Professional plans and 1 hour for Enterprise plans. Live chat is available Monday-Friday, 9 AM - 6 PM CST. Phone support is available during business hours for Enterprise customers."
        },
        {
          question: "Do you provide onboarding assistance?",
          answer: "Yes! Professional and Enterprise plans include free onboarding assistance. Our customer success team will help you set up integrations, optimize your validation workflows, and ensure you're getting maximum value from our platform."
        }
      ]
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
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Everything You Need to Know
              <span className="text-gradient block">About Contact Validator</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Find answers to common questions about our contact validation service, 
              features, pricing, and integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a 
                  href="https://salescentri.com/contact/support-request?utm_source=morgantonga.com&utm_medium=faq&utm_campaign=support" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Contact Support <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://salescentri.com/docs/user-guide?utm_source=morgantonga.com&utm_medium=faq&utm_campaign=documentation" 
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

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12 animate-fade-in" style={{animationDelay: `${categoryIndex * 0.1}s`}}>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 flex items-center">
                  <HelpCircle className="h-8 w-8 text-primary mr-3" />
                  {category.title}
                </h2>
                
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left text-lg font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-muted-foreground">
                Our support team is here to help you succeed with Contact Validator
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover-lift animate-fade-in">
                <CardHeader>
                  <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>
                    Get instant answers during business hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="cta" className="w-full" asChild>
                    <a 
                      href="https://salescentri.com/contact/support-request/live-chat?utm_source=morgantonga.com&utm_medium=faq&utm_campaign=live_chat" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Start Chat <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift animate-fade-in" style={{animationDelay: '0.1s'}}>
                <CardHeader>
                  <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Support Ticket</CardTitle>
                  <CardDescription>
                    Submit a detailed support request
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="cta" className="w-full" asChild>
                    <a 
                      href="https://salescentri.com/contact/support-request/submit-ticket?utm_source=morgantonga.com&utm_medium=faq&utm_campaign=support_ticket" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Submit Ticket <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover-lift animate-fade-in" style={{animationDelay: '0.2s'}}>
                <CardHeader>
                  <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Schedule Call</CardTitle>
                  <CardDescription>
                    Book a call with our experts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="cta" className="w-full" asChild>
                    <a 
                      href="https://salescentri.com/get-started/calendly?utm_source=morgantonga.com&utm_medium=faq&utm_campaign=schedule_call" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Book Call <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start your free trial today and experience the accuracy of Contact Validator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a 
                  href="https://salescentri.com/get-started/free-trial?utm_source=morgantonga.com&utm_medium=faq&utm_campaign=bottom_cta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Free Trial <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a 
                  href="https://salescentri.com/get-started/book-demo?utm_source=morgantonga.com&utm_medium=faq&utm_campaign=book_demo" 
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

      {/* Schema.org FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqCategories.flatMap(category =>
              category.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            )
          })
        }}
      />
    </Layout>
  );
}