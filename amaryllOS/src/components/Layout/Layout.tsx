import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import styles from "./Layout.module.css"

export function Layout({ children }) {
    return (
        <>
            <div className={styles.page}>
                <main className={styles.main}>
                    <div className={styles.content}>
                        <Navbar />
                        {children}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}