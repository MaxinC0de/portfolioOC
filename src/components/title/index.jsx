import styles from "./index.module.scss"

export default function Title() {

    const Divider = ({ width }) => (
        <div style={{ width: `${width}vw` }} className={styles.divider}></div>
    )

    const PlusSign = () => (
        <p className={styles.plusSign}>+</p>
    )

    return(
        <div className={styles.wrapper}>
            <div className={styles.mainContainer}>
                <Divider width="32" />
                <PlusSign />
                <Divider width="58" />
            </div>
            <div className="w-[90vw] overflow-hidden">
                <h1 className={styles.title}>MAXIME <span style={{marginLeft:"2vw"}}>BRETON</span></h1>
                <h1 style={{fontSize:"5vw",marginTop:"-4vh",marginBottom:"4vh"}} className={styles.title}><span className={styles.gradient}>FRONTEND</span> <br />DEVELOPER</h1>

            </div>
            <div className={styles.mainContainer}>
                <PlusSign />
                <Divider width="90" />
                <PlusSign />
            </div>
                
        </div>
        
    )
}