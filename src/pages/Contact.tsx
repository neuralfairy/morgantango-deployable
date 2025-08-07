import { Layout } from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary-light/5" />
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge variant="secondary" className="mb-6">
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Let's Start the
              <span className="text-gradient block">Conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to improve your contact data quality? Our team is here to help you 
              get started with Contact Validator and answer any questions you have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover-lift animate-fade-in">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Book a Demo</CardTitle>
                <CardDescription>
                  Schedule a personalized demo to see Contact Validator in action
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="cta" className="w-full" asChild>
                  <a 
                    href="https://salescentri.com/get-started/book-demo?utm_source=morgantonga.com&utm_medium=contact&utm_campaign=book_demo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Schedule Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift animate-fade-in" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>
                  Get instant answers from our support team during business hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="cta" className="w-full" asChild>
                  <a 
                    href="https://salescentri.com/contact/support-request/live-chat?utm_source=morgantonga.com&utm_medium=contact&utm_campaign=live_chat" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Start Chat <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Phone Support</CardTitle>
                <CardDescription>
                  Speak directly with our sales and support specialists
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="cta" className="w-full" asChild>
                  <a 
                    href="https://salescentri.com/contact/support-request?utm_source=morgantonga.com&utm_medium=contact&utm_campaign=phone_support" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Call Now <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form & Office Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-display font-bold mb-6">Send Us a Message</h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6" action="https://salescentri.com/get-started/contact" method="POST" target="_blank">
                    <input type="hidden" name="utm_source" value="morgantonga.com" />
                    <input type="hidden" name="utm_medium" value="contact_form" />
                    <input type="hidden" name="utm_campaign" value="contact_page" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" name="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" name="lastName" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email *</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input id="company" name="company" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">How can we help you? *</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        rows={4} 
                        placeholder="Tell us about your contact validation needs..."
                        required
                      />
                    </div>
                    
                    <Button type="submit" variant="cta" size="lg" className="w-full">
                      Send Message <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Information */}
            <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
              <h2 className="text-3xl font-display font-bold mb-6">Visit Our Office</h2>
              
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Naperville Headquarters</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-muted-foreground">
                          123 Business District Drive<br />
                          Naperville, IL 60540<br />
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">+1 (630) 555-0123</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">contact@morgantonga.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM CST<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Options */}
              <Card>
                <CardHeader>
                  <CardTitle>Need Immediate Help?</CardTitle>
                  <CardDescription>
                    Choose the best way to get in touch with our team
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a 
                      href="https://salescentri.com/contact/sales-inquiry?utm_source=morgantonga.com&utm_medium=contact&utm_campaign=sales_inquiry" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Sales Inquiry
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a 
                      href="https://salescentri.com/contact/support-request/submit-ticket?utm_source=morgantonga.com&utm_medium=contact&utm_campaign=support_ticket" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Submit Support Ticket
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a 
                      href="https://salescentri.com/contact/partnerships/partner-inquiry?utm_source=morgantonga.com&utm_medium=contact&utm_campaign=partnership" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Partnership Opportunities
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Start Your Free Trial Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              No commitment required. Get 1,000 free email validations to test our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a 
                  href="https://salescentri.com/get-started/free-trial?utm_source=morgantonga.com&utm_medium=contact&utm_campaign=bottom_cta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Free Trial <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a 
                  href="https://salescentri.com/pricing?utm_source=morgantonga.com&utm_medium=contact&utm_campaign=view_pricing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Pricing
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}