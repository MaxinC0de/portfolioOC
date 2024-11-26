import styles from "./index.module.scss"

export default function ProjectDetails({ project }) {
    console.log(project.stack)
    return(
        <div className={styles.wrapper}>
            <p style={{}}>{project.description}</p>
            <div style={{display:"flex"}}>
                <div className={styles.linksWrapper}>
                    <a href={project.githubUrl} target="_blank" style={{marginLeft:"6vw"}}>
                        <img style={{marginRight:"1vw"}} className={styles.links} src="/images/github.png" alt="" />
                    </a>
                    <a href={project.websiteUrl} target="_blank" style={{marginLeft:"6vw"}}>
                        <img className={styles.links} src="/images/website.png" alt="" />
                    </a>
                </div>
                <div className={styles.pyramid} style={{marginRight:"10vw"}}>
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