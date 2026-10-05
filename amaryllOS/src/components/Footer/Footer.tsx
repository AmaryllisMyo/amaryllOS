import styles from "./Footer.module.css"

export function Footer() {
    return(
        <footer className={styles.footer}>
            <span>Thank you for reading this text in the footer.</span>
            <span>AmaryllOS - 2026</span>
        </footer>
    );
}