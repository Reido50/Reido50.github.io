import linkImg from "../../assets/link.svg";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import styles from "./ProjectPage.module.css";

const ProjectPage = ({title, duration, teamSize, description, imgList, link}) => {
    return ( 
        <div>
            <header className={styles.header}>
                <div className={styles.carousel}>
                    <ImageCarousel images={imgList}/>
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
                {link && <div className={styles.stat}>
                    <h3>Link</h3>
                    <a href={link} target="_blank"><img src={linkImg} alt="link icon"/></a>
                </div>}
            </section>
            <section className={styles.description}>
                {description.map((para) => (
                    <p key={para}>{para}</p>
                ))}
            </section>
        </div>
     );
}
 
export default ProjectPage;