import gameIcon from '../../assets/gamepad.svg';
import capIcon from '../../assets/graduation-cap.svg';
import aboutPicture from '../../assets/reidandmo.jpeg';
import compassIcon from '../../assets/safari.svg';
import styles from './About.module.css';
import AboutItem from './AboutItem';

const About = ({aboutRef}) => {
    return ( 
        <section className={styles.About} ref={aboutRef}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={aboutPicture} alt="picture of Reid and their partner"/>
                <ul className={styles.aboutItems}>
                    <AboutItem title="Computer Science Major" description="I attended Michigan State University and received my Bachelors with plans to enter a career in either tech or games." icon={capIcon}></AboutItem>
                    <AboutItem title="Designer at Blizzard Entertainment" description= "I was thrilled to land an internship and, eventually, full-time position working on Diablo 4 at one of the more famous game development studios in the world." icon={gameIcon}></AboutItem>
                    <AboutItem title="Future Plans" description="I'm looking to take a step into the tech industry and see what impact I could make as a front-end developer." icon={compassIcon}></AboutItem>
                </ul>
            </div>
        </section>
     );
}
 
export default About;