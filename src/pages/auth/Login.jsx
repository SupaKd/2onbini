import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Connexion avec :", formData);
    // 🔐 Appel API ou traitement à ajouter ici
  };

  return (
    <section className="login">
      <div className="login__container">
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit} className="login__form">
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

          <button type="submit">Se connecter</button>
        </form>

        <p className="login__footer">
          Pas encore de compte ? <Link to="/register">Inscris-toi</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
