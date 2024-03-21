import ImageCarousel from "../ImageCarousel/ImageCarousel";
import styles from "./ProjectPage.module.css";
import linkImg from "../../assets/link.svg"

const ProjectPage = ({title, duration, teamSize, description, imgList}) => {
    return ( 
        <div>
            <header className={styles.header}>
                <div className={styles.carousel}>
                    <ImageCarousel/>
                </div>
                <h2>{title}</h2>
            </header>
            <section className={styles.statsPanel}>
                <div className={styles.stat}>
                    <h3>Duration</h3>
                    <p>{duration}</p>
                </div>
                <div className={styles.stat}>
                    <h3>Team Size</h3>
                    <p>{teamSize}</p>
                </div>
                <div className={styles.stat}>
                    <h3>Link</h3>
                    <img src={linkImg} alt="link icon" />
                </div>
            </section>
            <section className={styles.description}>
                {description.map((para) => (
                    <p>{para}</p>
                ))}
            </section>
        </div>
     );
}
 
export default ProjectPage;