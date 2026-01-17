import Header from '../Header/Header';
import './banner.css';

function Banner() {
  return (
    <section className="banner">
      <Header />

      <div className="banner__content">
        <h1 className="banner__title">
          Hola, soy Juan <span>Desarrollador Web</span>
        </h1>

        <p className="banner__subtitle">
          Construyo interfaces modernas y funcionales con React.
        </p>

        <button className="banner__button">
          Contáctame
        </button>
      </div>
    </section>
  );
}

export default Banner;
