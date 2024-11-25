import data from "../../assets/data.json"
import styles from "./index.module.scss"

export default function Skills() {
    const logos = data[1].logos
    return(
        <div className={styles.circle}>
            {logos.map((logo, index) => (
                <img src={logo} className={styles.logos}></img>
            ))}
        </div>
    )
}