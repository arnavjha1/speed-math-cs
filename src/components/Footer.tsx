import { Link } from "react-router-dom";
import logoTransparent from "@/assets/logo-transparent.png";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoTransparent} alt="SPEED" className="h-8 w-8" />
            <span className="font-display font-bold text-gradient-speed">SPEED</span>
          </div>

          <nav className="flex items-center gap-6">
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} SPEED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
