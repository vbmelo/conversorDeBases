import styles from './Footer.module.css'
import { GithubLogo } from "phosphor-react";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                Feito por
                <strong>
                    <a href="https://github.com/vbmelo" alt="Github Victor Barros Melo">
                        <strong> @victor_bmelo </strong>
                    </a>
                </strong>
                &
                <a href="https://github.com/LucasCNFonseca"  alt="Github Lucas de Castro Nunes Fonseca">
                    <strong> @lucas.cnf </strong>
                </a>
                
            </p>
            <p>
                <a className={styles.gitProjeto} href="https://github.com/vbmelo/conversorDeBases"  alt="Github do projeto Conversor de Bases">
                    <img className={styles.logoGit} src='src\assets\githubLogo.png'/>
                    <strong>
                        Reposit&oacute;rio do Projeto
                    </strong>
                </a>
            </p>
        </footer>
    );
}