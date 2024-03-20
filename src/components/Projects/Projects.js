import ProjectPreview from './ProjectPreview';
import styles from './Projects.module.css';

const Projects = () => {
    return ( 
        <section className={styles.Projects}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projectList}>
                <ProjectPreview/>
                <ProjectPreview/>
                <ProjectPreview/>
            </div>
        </section>
     );
}
 
export default Projects;