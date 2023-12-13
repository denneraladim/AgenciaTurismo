import styles from './Banner.module.scss';

export default function Banner({image}){
    return (
        <div 
        className={styles.banner}
        // style={{backgroundImage: `url('/images/${image}.jpg')`}}
        ></div>
    );
}