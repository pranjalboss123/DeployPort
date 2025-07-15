import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-primary" />
              <a
                href="mailto:guptapranjal68@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                guptapranjal68@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-primary" />
              <a
                href="tel:+917291888193"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +91 7291888193
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Noida, India</span>
            </div>
          </div>
          <div className="flex space-x-6">
            <Link
              href="https://github.com/pranjalboss123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://in.linkedin.com/in/rishikeshguptaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:guptapranjal68@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rishikesh Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}