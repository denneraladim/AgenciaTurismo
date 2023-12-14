import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <section className="container">
        <div className="apresentacao">
          <p>
            Bem Vindo <br />
            <span>à Nossa Agência</span> <br />
            Travel
          </p>
          <button className="btn btn-blue">Saiba Mais</button>
        </div>
        <figure>
          <img
            className="img-home"
            src="/airplane-blue.svg"
            alt="imagem de home"
          />
        </figure>
      </section>
      <Footer />
    </>
  );
}
