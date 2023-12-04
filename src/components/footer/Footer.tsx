import styles from "./Footer.module.css";
import Button from "../button/Button";

const Footer: React.FC = () => {
    return (
        <footer className={styles.container}>
            <header className={styles.title}>
                <h1>Footer</h1>
            </header>

            {/* <div className={styles.containerContato}>
                <header className={styles.subtitle}>
                    Diga Olá
                </header>
                <ul className={styles.row}>
                    <li>
                    <Button buttonText={"(43) 98836-5597"} />
                    </li>
                    <li>
                    <Button buttonText={"Carlos561649@gmail.com"} />
                    </li>
                </ul>
            </div>

            <hr />

            <div>
                <div>&copy; Carlos Carvalho 2023</div>
                <ul>
                    <li>
                        <a href="#">Linkedin</a>
                    </li>
                    <li>
                        <a href="#">Github</a>
                    </li>
                    <li>
                        <a href="#">Instagram</a>
                    </li>
                </ul>
            </div> */}
        </footer>
    );
}

export default Footer;