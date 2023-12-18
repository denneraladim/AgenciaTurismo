import Card from "../../components/Card";
import styles from './Passagens.module.scss';

export default function Passagens(){
    return (
      <section className={styles.passagens}>
         <h2>Passagens Aéreas</h2>
         <section className={styles.lista}>
             <Card />
             <Card />
             <Card />
             <Card />
             <Card />
             {/* <Card />
             <Card />
             <Card /> */}
        </section>
      </section>
         
       
    )
}