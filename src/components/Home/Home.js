import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import styles from "./Home.module.css";

const Home = ({aboutRef, projectsRef}) => {
    const location = useLocation();

    useEffect(() => {
        const state = location.state;

        if (state === null){
            return;
        }

        if (state.section === "about"){
            aboutRef.current?.scrollIntoView({behavior: 'smooth'});
        } else if (state?.section === "projects"){
            projectsRef.current?.scrollIntoView({behavior: 'smooth'});
        }
    }, [])

    return ( 
        <div className={styles.Home}>
            <Hero/>
            <About aboutRef={aboutRef}/>
            <Projects projectsRef={projectsRef}/>
        </div>
     );
}
 
export default Home;