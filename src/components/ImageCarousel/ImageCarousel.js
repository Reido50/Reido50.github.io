import phImage from "../../assets/portfolio_screenshot.png";
import styles from "./ImageCarousel.module.css";

const ImageCarousel = () => {
    return ( 
        <div>
            <img className={styles.image} src={phImage} alt="Placeholder Image" />
        </div>
     );
}
 
export default ImageCarousel;