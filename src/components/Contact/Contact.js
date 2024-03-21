import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import mailIcon from "../../assets/mail.svg";
import styles from "./Contact.module.css";

const Contact = () => {
    return ( 
        <footer className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Thanks for stopping by!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={mailIcon} alt="Email Icon" />
                    <a href="mailto:reid.j.harry@gmail.com">reid.j.harry@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={linkedinIcon} alt="Linkedin Icon" />
                    <a href="https://www.linkedin.com/in/reid-harry/" target="_blank">linkedin.com/in/reid-harry</a>
                </li>
                <li className={styles.link}>
                    <img src={githubIcon} alt="Github Icon" />
                    <a href="https://github.com/Reido50" target="_blank">github.com/Reido50</a>
                </li>
            </ul>
        </footer>
     );
}
 
export default Contact;