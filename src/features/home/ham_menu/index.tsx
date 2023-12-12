import { FC } from "react";
import styles from "./styles.module.scss"
import {BackBtn} from "@/features/home/backbtn"

export const HamMenu: FC = () => {
    return (
        <div>
            <BackBtn />
            <h1 className={styles.userName}>yugo_0429</h1>
        </div>
    )
}