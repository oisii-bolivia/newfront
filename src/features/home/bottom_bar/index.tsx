import { FC } from "react";
import styles from "./styles.module.scss"

export const BottomBar: FC = () => {
    return (
        <div>
            <div className={styles.box}>
                <div className={styles.circle}>
                    <img src="/images/keyboard_voice.png" alt="" />
                </div>
            </div>
        </div>
    )
}