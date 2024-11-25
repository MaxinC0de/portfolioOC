import styles from "./index.module.scss"

export default function Header() {
    return(
        <div className={styles.wrapper}>
            <p style={{fontSize:"30px"}}>MB</p>
            <a href="#" className={styles.anchor}>
                <div className={styles.contact}>Contact</div>
            </a>
        </div>
    )
}