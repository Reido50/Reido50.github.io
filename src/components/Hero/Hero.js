import headshot from "../../assets/headshot1_circle.png";
import styles from "./Hero.module.css";

const Hero = () => {
    return ( 
        <section className={styles.Hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Reid</h1>
                <p className={styles.description}>
                    I'm a front-end developer and designer with experience in the video game industry looking to branch out into web developement. 
                    <br/>
                    Feel free to reach out!
                </p>
                <a className={styles.contactButton} href="mailto:reid.j.harry@gmail.com">Contact Me</a>
            </div>
            <img className={styles.heroImage} src={headshot} alt="professional headshot of Reid" />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
     );
}
 
export default Hero;