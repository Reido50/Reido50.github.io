import testImg from "../../assets/portfolio_screenshot.png";
import styles from "./ProjectPreview.module.css";

const ProjectPreview = () => {
    return ( 
        <div className={styles.container}>
            <h2 className={styles.title}>Project Title</h2>
            <img className={styles.previewImage} src={testImg} alt="screenshot of my portfolio" />
            <p className={styles.description}>
                This is my super cool project. I love it because it's so super neat and cool and lovely
            </p>
            <div className={styles.technologies}>
                <h3 className={styles.techEntry}>Tech 1</h3>
                <h3 className={styles.techEntry}>Tech 2</h3>
            </div>
        </div>
     );
}
 
export default ProjectPreview;