import styles from './Card.module.scss';
import FozIguaçu from '../img/fozIguaçu.jpg'

export default function Card(){
    return (
        <section className={styles.card}>
            <img src={FozIguaçu} alt="imagem de Foz do Iguaçu" />
           <h3>Foz Iguaçu</h3>
           <p>A partir de</p>
            <h1>R$ 249</h1>
        </section>
    )
}