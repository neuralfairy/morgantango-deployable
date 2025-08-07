import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, CheckCircle } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveRoute = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">
            Morgantonga<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActiveRoute(link.path)
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <a 
              href="https://salescentri.com/login/customer-portal" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Login
            </a>
          </Button>
          <Button size="sm" asChild>
            <a 
              href="https://salescentri.com/get-started/free-trial?utm_source=morgantonga.com&utm_medium=header&utm_campaign=free_trial" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Start Free Trial
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActiveRoute(link.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t flex flex-col space-y-2">
              <Button variant="ghost" size="sm" asChild>
                <a 
                  href="https://salescentri.com/login/customer-portal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Login
                </a>
              </Button>
              <Button size="sm" asChild>
                <a 
                  href="https://salescentri.com/get-started/free-trial?utm_source=morgantonga.com&utm_medium=header&utm_campaign=free_trial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Free Trial
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};