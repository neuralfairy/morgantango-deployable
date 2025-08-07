import { Link } from "react-router-dom";
import { CheckCircle, Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl">
                Morgantonga<span className="text-primary-light">.</span>
              </span>
            </div>
            <p className="text-slate-300 text-sm">
              Professional contact validator and email verification service. 
              Improve your outbound success rate with our B2B data validation platform.
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Naperville, IL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (630) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@morgantonga.com</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Product</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/features" className="hover:text-primary-light transition-colors">
                  Contact Validator Features
                </Link>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/solutions/use-case-navigator/demo?utm_source=morgantonga.com&utm_medium=footer&utm_campaign=demo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition-colors flex items-center"
                >
                  Interactive Demo <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/docs/api-reference?utm_source=morgantonga.com&utm_medium=footer&utm_campaign=api" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition-colors flex items-center"
                >
                  API Documentation <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/solutions/psa-suite/integrations?utm_source=morgantonga.com&utm_medium=footer&utm_campaign=integrations" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition-colors flex items-center"
                >
                  Integrations <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/about" className="hover:text-primary-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/company/careers?utm_source=morgantonga.com&utm_medium=footer&utm_campaign=careers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition-colors flex items-center"
                >
                  Careers <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/company/partners-affiliates?utm_source=morgantonga.com&utm_medium=footer&utm_campaign=partners" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition-colors flex items-center"
                >
                  Partners <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary-light transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a 
                  href="https://salescentri.com/contact/support-request?utm_source=morgantonga.com&utm_medium=footer&utm_campaign=support" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition-colors flex items-center"
                >
                  Support Center <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://salescentri.com/docs/user-guide?utm_source=morgantonga.com&utm_medium=footer&utm_campaign=docs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition-colors flex items-center"
                >
                  Documentation <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-light transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary-light transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-slate-400">
              <p>&copy; {currentYear} Morgantonga Solutions. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <Link to="/privacy" className="hover:text-primary-light transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-primary-light transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            {/* Strategic Backlink */}
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <a 
                href="https://salescentri.com?utm_source=morgantonga.com&utm_medium=footer&utm_campaign=partner_network" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-primary-light transition-colors flex items-center"
              >
                Powered by Sales Intelligence Platform <ExternalLink className="h-3 w-3 ml-1" />
              </a>
              <a 
                href="https://linkedin.com/company/morgantonga-solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-light transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};