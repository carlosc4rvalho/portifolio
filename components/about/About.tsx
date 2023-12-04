import styles from "./About.module.css";

const About: React.FC = () => {
    return (
        <main className={styles.container}>
                <div className={styles.containerText}>
                    <header className={styles.title}>Websites que eternizam memórias, inspiram e impulsionam pessoas.</header>
                    
                    <hr />

                    <p className={styles.paragraph}>
                        Sou um desenvolvedor Front-End em formação pelo Instituto Federal do Paraná (IFPR). Dedico-me a cada projeto com o objetivo claro de proporcionar experiências incríveis para os usuários. Minha busca constante pela excelência me impulsiona a aprimorar continuamente minhas habilidades, com especial atenção ao UX Design. Acredito que, por meio dos poderes que a tecnologia nos proporciona, posso criar websites que deixem sua marca, inspirando e cultivando memórias. Assim, a cada projeto, levo meu trabalho a novos horizontes, impactando positivamente e proporcionando experiências memoráveis aos usuários, elevando constantemente o padrão do meu trabalho.
                    </p>

                    <p className={styles.description}>
                        Com códigos e paixão, transformo pixels em memórias inesquecíveis...
                    </p>
                </div>

                <div className={styles.containerImg}></div>
        </main>
    );
}

export default About;
