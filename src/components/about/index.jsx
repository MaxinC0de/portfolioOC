import data from "../../assets/data.json"
import styles from "./index.module.scss"

export default function About() {
    const speech = data[0].about
    console.log(speech)
    return(
        <div className={styles.wrapper}>
            <h2 className={styles.title}>A propos</h2>
            <p className={styles.speech}>{speech}</p>
        </div>
    )
}