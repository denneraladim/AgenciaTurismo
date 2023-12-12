import styles from './Header.module.scss';

import Logo from '../img/logo.svg'

export default function Header(){
    return (
        <header className={styles.header}>
            <img src={Logo} alt="Logo" />
            <nav>
              <a href="#">Home</a>
              <a href="#">Sobre</a>
              <a href="#">Contatos</a>
            </nav>
        </header>
        
    )
}