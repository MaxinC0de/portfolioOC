import Header from "../../components/header/index"
import Title from "../../components/title/index"
import About from "../../components/about/index"
import Projects from "../../components/projects/index"
import Skills from "../../components/skills/index"
import styles from "./index.module.scss"
import ProjectDetails from "../../components/projectDetails/index"
import { useState } from "react"
import React from "react"

export default function Home() {

    const Separator = () => (
        <div className={styles.separator}></div>
    )

    const components = [About, Separator, Projects, Separator]

    const [selectedProject, setSelectedProject] = useState(Skills)

    return(
        <>
            <Header />
            <Title />
            <div className={styles.wrapper}>
                {components.map((Component, index) => (
                    <Component key={index} />
                ))}
                {selectedProject}
            </div>
        </>
    )
}