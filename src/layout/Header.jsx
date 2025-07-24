import { useEffect, useRef, useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(); // ➤ Ref pour le menu

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Fermer le menu si clic en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="header">
      <div className="header__container">
        {/* Burger ou X */}
        <button
          className="header__menu-btn"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? (
            <X size={28} color="var(--color-text)" />
          ) : (
            <Menu size={28} color="var(--color-text)" />
          )}
        </button>

        {/* Logo */}
        <div className="header__logo">
          <Link to="/">
          <img src="/logo-2onbini.webp" alt="logo" />
          </Link>
        </div>

        {/* Panier */}
        <button className="header__cart-btn" aria-label="Panier">
          <ShoppingCart size={26} color="var(--color-text)" />
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="header__nav" ref={menuRef}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
            <li><Link to="/products" onClick={closeMenu}>Produits</Link></li>
            <li><Link to="/concept" onClick={closeMenu}>Concept</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
          <div className="header__nav-login">
            <Link to="/login" onClick={closeMenu}>
              <button>Se connecter</button>
            </Link>
            <Link to="/register" onClick={closeMenu}>
              <button>S'inscrire</button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
