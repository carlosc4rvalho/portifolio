import React from "react"; 
import styles from "./Button.module.css";

interface ButtonProps {
    buttonText: string;
}

const Button: React.FC<ButtonProps> = ({buttonText}) => {
    return(
        <button className={styles.button}>
            {buttonText}
        </button>
    );
}

export default Button;