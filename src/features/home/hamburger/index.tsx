import { FC } from "react";
import styles from "./styles.module.scss"

export const Hamburger: FC = () => {
    return (
        <div className={styles.head}>
            <div className={styles.hamburger}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </div>
        </div>
    )
}