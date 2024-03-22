import { useState } from "react";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";
import testImg3 from "../../assets/d4 deathroom.png";
import testImg4 from "../../assets/d4 gameplay1.png";
import testImg2 from "../../assets/diablo4cover.jpg";
import testImg1 from "../../assets/portfolio_screenshot.png";
import styles from "./ImageCarousel.module.css";

const ImageCarousel = ({images}) => {
    const [imageIndex, setImageIndex] = useState(0);

    const transitionImage = (offset) => {
        const newIndex = imageIndex + offset;

        if (newIndex < 0){
            setImageIndex(images.length - 1);
        }else{
            setImageIndex(newIndex % images.length);
        }
    }

    return ( 
        <div className={styles.container}>
            <div className={styles.imageStack}>
                {images.map(img => (
                    <img 
                        key={img} 
                        className={styles.image} 
                        src={img} 
                        alt="Placeholder Image" 
                        style={{translate: `${-100 * imageIndex}%`}}/>
                ))}
            </div>
            <button 
                className={styles.sliderButton} 
                style={{left:0}} 
                onClick={(e) => transitionImage(-1)}>
                <img src={arrowLeft} alt="arrow pointing to the left" />
            </button>
            <button 
                className={styles.sliderButton} 
                style={{right:0}} 
                onClick={(e) => transitionImage(1)}>
                <img src={arrowRight} alt="arrow pointing to the right" />
            </button>
            <div className={styles.shortcuts}>
                {images.map((_, index) => (
                    <button
                        key={index} 
                        onClick={() => setImageIndex(index)}
                        className={styles.shortcut}
                        >
                            <div className={index === imageIndex ? styles.circleFilled : styles.circleEmpty}></div>
                    </button>
                ))}
            </div>
        </div>
     );
}
 
export default ImageCarousel;