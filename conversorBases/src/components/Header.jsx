import styles from './Header.module.css';
import { Swap } from "phosphor-react";

export function Header() {
    return (
        <header className={styles.header}>
            <Swap size={80} />
            <p>CONVERSOR DE BASES</p>
        </header>
    )
}