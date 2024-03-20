import styles from './AboutItem.module.css';

const AboutItem = ({title, description, icon}) => {
    return ( 
        <li className={styles.AboutItem}>
            <img src={icon} alt="game controller icon" />
            <div className={styles.aboutItemText}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </li>
     );
}
 
export default AboutItem;