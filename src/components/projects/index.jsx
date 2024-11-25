import data from "../../assets/data.json"
import styles from "./index.module.scss"

export default function Projects() {

    const projects = data[2].projects

    const Separator = () => (
        <div className={styles.separator}></div>
    )
console.log(data[2].projects[0])
    return(
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Projets</h1>
            <Separator />
            {projects.map((project, index) => (
                <>
                    <Separator />
                    <a className={styles.anchors} href="#">
                        <div style={{display:"flex",alignItems:"center"}}>
                            <h2 className={styles.name}>{project.name}</h2>

                            <h3 className={styles.keyWord}>{project.keyWord}</h3>
                        </div>
                    </a>
                    <Separator />
                </>
            ))}
        </div>
    )
}