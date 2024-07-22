import diabloImg from "../../assets/diablo4cover.jpg";
import facresImg from "../../assets/factoryresetposter.png";
import portfolioImg from "../../assets/portfolioscreenshot.png";
import ProjectPreview from './ProjectPreview';
import styles from './Projects.module.css';

const Projects = ({projectsRef}) => {
    return ( 
        <section className={styles.Projects} ref={projectsRef}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projectList}>
                <ProjectPreview
                    name={"React Portfolio"}
                    description={"Over the course of a week, I created a web portfolio to house my work and represent myself as a developer."}
                    img={portfolioImg}
                    techOne={"React"}
                    techTwo={"NodeJS"}
                    url={"portfolio"}/>
                <ProjectPreview
                    name={"Diablo IV"}
                    description={"For almost 2 years, I've been designing and implementing content for the world's biggest isometric ARPG series."}
                    img={diabloImg}
                    techOne={"Lua"}
                    techTwo={"Jira"}
                    techThree={"Miro"}
                    url={"diablo-4"}/>
                <ProjectPreview
                    name={"Factory Reset"}
                    description={"As my capstone project at MSU, I lead a team of 11 game developers to create a strategic, turn-based roguelite."}
                    img={facresImg}
                    techOne={"Unity"}
                    techTwo={"C#"}
                    url={"factory-reset"}/>
            </div>
        </section>
     );
}
 
export default Projects;