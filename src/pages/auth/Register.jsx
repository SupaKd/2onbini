import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inscription :", formData);
    // 🔐 Appel API à ajouter ici
  };

  return (
    <section className="register">
      <div className="register__container">
        <h2>Inscription</h2>
        <form onSubmit={handleSubmit} className="register__form">
          <label htmlFor="name">Nom complet</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Jean Dupont"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="06 12 34 56 78"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Adresse email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="exemple@mail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Créer mon compte</button>
        </form>

        <p className="register__footer">
          Déjà un compte ? <Link to="/login">Se connecter</Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
