import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            Bienvenue dans l’univers <span>Konbini</span>
          </h1>
          <p className="hero__subtitle">
            Produits japonais, snacks insolites et ambiance unique. Explore
            notre sélection dès maintenant.
          </p>
          <Link to="/products" className="hero__btn">
            Découvrir les produits
          </Link>
        </div>
      </section>

      <section className="concept">
      <h2 className="concept__title">Le concept du Konbini</h2>
      <p className="concept__intro">
        Entre culture pop et tradition japonaise, plonge dans notre univers unique.
      </p>

      <div className="concept__grid">
        <div className="concept__card">
          <img src="/back-pro.webp" alt="Snacks japonais" />
          <div className="concept__overlay">
            <h3>Snacks & Boissons</h3>
            <p>Mochis, Ramune, Pocky... goûte aux saveurs du Japon !</p>
          </div>
        </div>

        <div className="concept__card">
          <img src="/back-pro.webp" alt="Goodies japonais" />
          <div className="concept__overlay">
            <h3>Goodies & Objets</h3>
            <p>Des objets fun et kawaii venus tout droit de Tokyo.</p>
          </div>
        </div>

        <div className="concept__card">
          <img src="/back-pro.webp" alt="Ambiance Konbini" />
          <div className="concept__overlay">
            <h3>Ambiance unique</h3>
            <p>Plonge dans l’atmosphère des vrais Konbini japonais.</p>
          </div>
        </div>
      </div>
    </section>
    </>
      
  );
}
export default Home;
