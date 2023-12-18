import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg'


export default function Header(){
    return (
        <header className={styles.header}>
            <Link to='/'>
                <img src={Logo} alt="Logo" />
            </Link>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/passagens'>Passagens</Link>
                <Link to='/contatos'>Contatos</Link>
            </nav>
        </header>
        
    )
}