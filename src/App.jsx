import "./App.css";

function App() {
  return (
    <>
      {/* HEADER */}
      <header>
        <nav className="header-items">
          <img src="./images/logo.svg" alt="Logo da Nike" />
          <a href="/">Women</a>
          <a href="/">Men</a>
          <a href="/">Kids</a>
          <a href="/">Collections</a>
        </nav>
      </header>

      {/* HERO */}
      <div>
        <div className="hero-content">
          <div>
            <div className="hero-text">
              <p>Nike Air</p>
              <p>Max Pre-Day</p>
            </div>

            <p className="hero-description">
              Levando o visual clássico do legado Nike Running para um novo
              reino, o O Nike Air Max Pre-Day traz para você um visual acelerado
              que está pronto para mundo de hoje. Um verdadeiro aceno ao passado
              com um design feito de pelo menos 20% de material reciclado por
              peso.
            </p>

            <div className="purchase-details">
              <button>Add to Bag</button>
              <p>$299.00</p>
            </div>
          </div>

          <img src="./images/shoe.svg" alt="Shoe" className="big-shoes" />
        </div>

        <div className="shoes-gallery">
          <img src="./images/shoes1.svg" alt="Foto 1" />
          <img src="./images/shoes2.svg" alt="Foto 2" />
          <img src="./images/shoes3.svg" alt="Foto 3" />
        </div>
      </div>
    </>
  );
}

export default App;
