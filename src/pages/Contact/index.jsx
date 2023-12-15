import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.contatos}>
          <h1>Contatos</h1>
          <h2>Horário de Funcionamento:</h2>
          <span>Segunda à Sexta Feira de 09h às 18h</span>
          <h1 className={styles.telefone}>Telefone:(031)-99999-0000 </h1>
          <p></p>
          <h1 className={styles.email}>e-mail:</h1>
          <span>agenciatravel@gmail.com</span>
          <img src="/contact.svg" alt="" />
        </section>
      </Container>
      <Footer />
    </>
  );
}
