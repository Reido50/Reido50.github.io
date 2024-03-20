import About from "../About/About";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import styles from "./Home.module.css";

const Home = () => {
    return ( 
        <div className={styles.Home}>
            <Hero/>
            <About/>
            <Projects/>
        </div>
     );
}
 
export default Home;