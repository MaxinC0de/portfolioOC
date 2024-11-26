import styles from "./index.module.scss"

export default function ProjectDetails({ project }) {
    return(
        <div className={styles.wrapper}>
            <p style={{marginBottom:"0"}}>{project.description}</p>
            <div className={styles.linksLogosWrapper}>
                <div className={styles.linksWrapper}>
                    <a href={project.githubUrl} target="_blank">
                        <img style={{marginRight:"1vw"}} className={styles.links} src="/images/github.png" alt="" />
                    </a>
                    <a href={project.websiteUrl} target="_blank">
                        <img className={styles.links} src="/images/website.png" alt=""/>
                    </a>
                </div>
                <div className={styles.pyramid}>
                    <img src={project.stack[3]} className={styles.logos} alt="" />
                    <div className={styles.row}>
                        <img src={project.stack[1]} className={styles.logos} alt="" />
                        <img src={project.stack[2]} className={styles.logos} alt="" />
                    </div>
                    <div className={styles.row}>
                        <img src={project.stack[0]} className={styles.logos} alt="" />
                        <img src={project.stack[4]} className={styles.logos} alt="" />
                        <img src={project.stack[5]} className={styles.logos} alt="" />
                </div>
            </div>
            
            </div>
        </div>
    )
}