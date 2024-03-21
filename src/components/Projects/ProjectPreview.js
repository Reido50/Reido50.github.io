import { useState } from "react";
import { Link } from "react-router-dom";
import testImg from "../../assets/portfolio_screenshot.png";
import styles from "./ProjectPreview.module.css";

const ProjectPreview = ({name, description, img, techOne, techTwo, techThree, url}) => {
    return ( 
        <Link className={styles.container} to={url}>
            <h2 className={styles.title}>{name}</h2>
            <img className={styles.previewImage} src={img} alt="screenshot of my portfolio" />
            <p className={styles.description}>{description}</p>
            <div className={styles.technologies}>
                {techOne && <h3 className={styles.techEntry}>{techOne}</h3>}
                {techTwo && <h3 className={styles.techEntry}>{techTwo}</h3>}
                {techThree && <h3 className={styles.techEntry}>{techThree}</h3>}
            </div>
        </Link>
     );
}
 
export default ProjectPreview;