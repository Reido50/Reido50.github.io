import headshot from "../../assets/headshot5.png";
import styles from "./Hero.module.css";

const Hero = () => {
    return ( 
        <section className={styles.Hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Reid Harry</h1>
                <p className={styles.description}>
                    I'm a developer and designer with experience in the video game industry looking to branch out into web and software development.
                    <br/>
                    Feel free to reach out!
                </p>
            </div>
            <img className={styles.heroImage} src={headshot} alt="professional headshot of Reid" />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
     );
}
 
export default Hero;
