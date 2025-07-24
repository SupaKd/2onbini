import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <img src="/logo-2onbini.webp" alt="logo" />

        <ul className="footer__links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/products">Produits</Link></li>
          <li><Link to="/concept">Concept</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="footer__socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={22} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <Facebook size={22} />
          </a>
          <a href="mailto:contact@konbini.com" aria-label="Email">
            <Mail size={22} />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} KONBINI. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
