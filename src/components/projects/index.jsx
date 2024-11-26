import data from "../../assets/data.json"
import styles from "./index.module.scss"

export default function Projects({ onProjectClick }) {

    const handleClick = (e) => {
        e.preventDefault()
    }

    const projects = data[2].projects

    const Separator = () => (
        <div className={styles.separator}></div>
    )

    return(
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Projets</h1>
            <Separator />
            {projects.map((project, index) => (
                <>
                    <Separator />
                    <a className={styles.anchors} href="#" onClick={(e) => {onProjectClick(project); handleClick(e)}}>
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