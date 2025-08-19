import { Layout } from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Target, Users, Award, CheckCircle, Linkedin, Mail } from "lucide-react";
import teamMeetingImage from "@/assets/team-meeting.jpg";
import officeExteriorImage from "@/assets/office-exterior.jpg";
import dataCenterImage from "@/assets/data-center.jpg";

export default function About() {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Data Security First",
      description: "We prioritize the security and privacy of your data with enterprise-grade encryption and compliance standards."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Accuracy Excellence",
      description: "Our commitment to 99.5% accuracy ensures your campaigns reach the right contacts every time."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Customer Success",
      description: "Your success is our mission. We provide dedicated support and resources to help you achieve your goals."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Innovation Leadership",
      description: "We continuously innovate to stay ahead of industry challenges and provide cutting-edge solutions."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former VP of Sales at Fortune 500 company with 15+ years in B2B data solutions.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Previously led engineering teams at major tech companies, expert in data processing at scale.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Customer Success",
      bio: "Passionate about helping businesses optimize their sales processes and achieve growth.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "David Kim",
      role: "Lead Data Scientist",
      bio: "PhD in Machine Learning with expertise in email validation algorithms and data quality.",
      image: "/api/placeholder/300/300"
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a mission to solve B2B data quality challenges"
    },
    {
      year: "2020",
      title: "First Million Validations",
      description: "Processed our first million email validations with 99%+ accuracy"
    },
    {
      year: "2021",
      title: "Enterprise Launch",
      description: "Launched enterprise solutions serving Fortune 1000 companies"
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded operations to serve customers in 50+ countries"
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Integrated advanced AI models for enhanced validation accuracy"
    },
    {
      year: "2024",
      title: "500M+ Validations",
      description: "Reached milestone of 500+ million successful validations"
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
              About Morgantonga Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Trusted Partner for
              <span className="text-gradient block">Contact Data Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Since 2019, we've been helping businesses improve their outbound success rates 
              through accurate contact validation and data verification services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a 
                  href="https://salescentri.com/get-started/book-demo?utm_source=morgantonga.com&utm_medium=about&utm_campaign=book_demo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Book a Demo
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://salescentri.com/company/careers?utm_source=morgantonga.com&utm_medium=about&utm_campaign=careers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Join Our Team
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                To empower businesses with the most accurate and reliable contact validation 
                technology, enabling them to reach their prospects effectively while maintaining 
                the highest standards of data security and compliance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that quality data is the foundation of successful business relationships, 
                and we're committed to providing the tools that make that possible.
              </p>
            </div>
            <div className="relative">
              <img 
                src={teamMeetingImage} 
                alt="Morgantonga Solutions team collaborating on data validation strategies" 
                className="rounded-2xl shadow-custom-xl w-full h-auto"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500M+", label: "Emails Validated" },
              { number: "10K+", label: "Happy Customers" },
              { number: "50+", label: "Countries Served" },
              { number: "99.5%", label: "Accuracy Rate" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
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

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced team combines deep industry knowledge with cutting-edge 
              technology expertise to deliver exceptional results.
            </p>
          </div>

          {/* Infrastructure Showcase */}
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-custom-xl">
              <img 
                src={dataCenterImage} 
                alt="Our secure data infrastructure powering Contact Validator" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
                <div className="text-white p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    State-of-the-Art Infrastructure
                  </h3>
                  <p className="text-lg opacity-90">
                    Our secure, high-performance data centers ensure 99.9% uptime and lightning-fast validation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-light mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-2">
                    <Button size="icon" variant="ghost" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="icon" variant="ghost" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our mission to transform contact data validation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">
                      {milestone.year}
                    </Badge>
                    <CardTitle className="text-lg">{milestone.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Visit Our Office
              </h2>
              <p className="text-xl text-muted-foreground">
                Located in the heart of Naperville, Illinois
              </p>
            </div>

            <Card className="gradient-card shadow-custom-xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-4">
                      Morgantonga Solutions HQ
                    </h3>
                    <div className="space-y-3 text-muted-foreground">
                      <p className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        123 Business District Drive
                      </p>
                      <p className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        Naperville, IL 60540
                      </p>
                      <p className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        Phone: +1 (630) 555-0123
                      </p>
                      <p className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        Email: contact@morgantonga.com
                      </p>
                    </div>
                    <div className="mt-6">
                      <Button variant="cta" asChild>
                        <a 
                          href="https://salescentri.com/contact?utm_source=morgantonga.com&utm_medium=about&utm_campaign=office_visit" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Schedule a Visit
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={officeExteriorImage} 
                      alt="Morgantonga Solutions headquarters in Naperville, Illinois" 
                      className="rounded-lg w-full h-64 object-cover"
                    />
                  </div>
                </div>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Let's discuss how Contact Validator can help improve your outbound success rate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta-secondary" size="xl" asChild>
                <a 
                  href="https://salescentri.com/get-started/free-trial?utm_source=morgantonga.com&utm_medium=about&utm_campaign=cta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Free Trial
                </a>
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a 
                  href="https://salescentri.com/contact/sales-inquiry?utm_source=morgantonga.com&utm_medium=about&utm_campaign=contact_sales" 
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
    </Layout>
  );
}