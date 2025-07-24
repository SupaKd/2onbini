import { useState } from "react";

// Données fictives
const produitsExemple = [
  {
    id: 1,
    nom: "Onigiri Saumon",
    categorie: "Snacks",
    prix: 2.99,
    image: "/vite.svg",
  },
  {
    id: 2,
    nom: "Bubble Tea Mangue",
    categorie: "Boisson",
    prix: 5,
    image: "/vite.svg",
  },
  {
    id: 3,
    nom: "Ramen Instant",
    categorie: "Plat",
    prix: 6,
    image: "/vite.svg",
  },
  {
    id: 4,
    nom: "Soda Japonais",
    categorie: "Boisson",
    prix: 2.5,
    image: "/vite.svg",
  },
  {
    id: 5,
    nom: "Chips Wasabi",
    categorie: "Snack",
    prix: 2,
    image: "/vite.svg",
  },
];

const categoriesDisponibles = ["Tous", "Snack", "Boisson", "Plat"];

function Products() {
  const [search, setSearch] = useState("");
  const [filtreCategorie, setFiltreCategorie] = useState("Tous");

  const produitsFiltres = produitsExemple.filter((produit) => {
    const correspondCategorie =
      filtreCategorie === "Tous" || produit.categorie === filtreCategorie;

    const correspondRecherche = produit.nom
      .toLowerCase()
      .includes(search.toLowerCase());

    return correspondCategorie && correspondRecherche;
  });

  return (
    <section className="products">
      <div className="background-product">
        <h1>Les meilleurs produits d'Asie</h1>
      </div>
      <h2>Nos Produits</h2>

      {/* Filtres */}
      <div className="products__filters">
        {categoriesDisponibles.map((cat) => (
          <button
            key={cat}
            className={`products__filter-btn ${
              filtreCategorie === cat ? "active" : ""
            }`}
            onClick={() => setFiltreCategorie(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Barre de recherche */}
      <div className="search">
        <h3>Chope ton produit !</h3>
      <input
        type="text"
        className="products__search"
        placeholder="Rechercher un produit..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        </div>

      {/* Affichage des produits */}
      <div className="products__grid">
        {produitsFiltres.length > 0 ? (
          produitsFiltres.map((produit) => (
            <div key={produit.id} className="products__card">
              <img
                src={produit.image}
                alt={produit.nom}
                className="products__image"
              />
              <div className="products__content">
                <h3>{produit.nom}</h3>
                <p className="products__price">{produit.prix.toFixed(2)} €</p>
                <button>Ajouter au panier</button>
              </div>
            </div>
          ))
        ) : (
          <p>Aucun produit trouvé.</p>
        )}
      </div>
    </section>
  );
}

export default Products;
