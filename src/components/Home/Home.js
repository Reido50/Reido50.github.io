import About from "../About/About";
import Hero from "../Hero/Hero";
import styles from "./Home.module.css";

const Home = () => {
    return ( 
        <div className={styles.Home}>
            <Hero/>
            <About/>
        </div>
     );
}
 
export default Home;