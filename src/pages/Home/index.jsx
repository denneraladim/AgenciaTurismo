import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from './Home.module.scss';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.home}>
          <div className={styles.apresentacao}>
            <p>
              Bem Vindo <br />
              <span>à Nossa Agência</span> <br />
              Travel
            </p>
            <Link to="/about" className={`${styles.btn} ${styles.btn_blue}`}>
              Saiba Mais
            </Link>
          </div>
          <figure>
            <img
              src="/airplane-blue.svg"
              alt="imagem de home"
            />
          </figure>
        </section>
      </Container>
      <Footer />
    </>
  );
}
