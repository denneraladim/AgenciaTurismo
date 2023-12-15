import styles from './Sobre.module.scss'
import Agencia from './images/agencia-viagens.jpg'

export default function Sobre() {
  return (
    <>
      <section className={styles.sobre}>
        <div className={styles.content}>
          <img src={Agencia} alt="Agencia" className={styles.agencia} />
          <div className={styles.textos}>
            <h2>Sobre</h2>
            <p>
              Somos uma agência de turismo apaixonada por criar experiências
              inesquecíveis para viajantes de todo o mundo. Com anos de
              experiência no setor, nossa equipe está empenhada em proporcionar
              viagens excepcionais, explorando destinos emocionantes e
              proporcionando momentos únicos aos nossos clientes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
