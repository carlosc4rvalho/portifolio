import React from "react";
import styles from "./Home.module.css";
import Button from "../button/Button";
import Header from "../header/Header";

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <div className={styles.containerMe}>
                    <h1 className={styles.title}>
                        Carlos Carvalho
                    </h1>
                    <h2 className={styles.subtitle}>Front-End Developer</h2>

                    <p className={styles.paragraph}>
                        Olá, sou Carlos Carvalho, estudante de Sistemas de Informação no IFPR, atualmente no 6º semestre.
                    </p>

                    <Button buttonText={"Conheça Minha História"} />
                </div>

                <picture className={styles.containerImg}>
                    <img src="https://avatars.githubusercontent.com/u/110244419?v=4" alt="Avatar" />
                </picture>
            </main>
        </>
    )
}

export default Home;