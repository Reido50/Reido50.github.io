import { useRef } from 'react';
import { Route, BrowserRouter as Router, Routes, useHref } from 'react-router-dom';
import styles from './App.module.css';
import d4Deathroom from './assets/d4 deathroom.png';
import d4DiceAwards from './assets/d4 dice awards.jpg';
import d4FastestSelling from './assets/d4 fastest selling.jpg';
import d4GameAwards from './assets/d4 game awards.jpg';
import d4Gameplay1 from './assets/d4 gameplay1.png';
import d4Gameplay2 from './assets/d4_gameplay3.jpg';
import d4Gameplay3 from './assets/d4_gameplay4.jpg';
import d4Gameplay4 from './assets/d4_gameplay5.jpg';
import facresGameplay1 from './assets/factoryreset-gameplay1.png';
import facresGameplay2 from './assets/factoryreset-gameplay2.png';
import facresGameplay3 from './assets/factoryreset-gameplay3.png';
import facresGameplay4 from './assets/factoryreset-gameplay4.png';
import facresTitle from './assets/factoryreset_title.png';
import portfolioCode1 from './assets/portfolio_code1.png';
import portfolioCode2 from './assets/portfolio_code2.png';
import portfolioCode3 from './assets/portfolio_code3.png';
import portfolioScreenshot from './assets/portfolioscreenshot.png';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import ProjectPage from './components/ProjectPage/ProjectPage';
import ScrollToTop from './components/Util/ScrollToTop';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <Router>
      <ScrollToTop/>
      <div className={styles.app}>
        <NavBar aboutRef={aboutRef} projectsRef={projectsRef}/>
        <Routes>
          <Route path="/" element={<Home aboutRef={aboutRef} projectsRef={projectsRef}/>}></Route>
          <Route path="/portfolio" element={<ProjectPage
            title="Web Dev Portfolio"
            duration="1 Week"
            teamSize="1"
            description={["If you're reading this, you're probably already pretty familiar with my portfolio because you're in it! My main goal of the project was to get back into the swing of web development after drifting away from it since I graduated. I wanted this portfolio to be pretty straightforward to navigate with room to grow as needed.", 
            "This portfolio website is built using React and NodeJS and it's hosted through Github Pages. I was keenly focused on making as much of its components as resuable and generic as I could while still making my design elements feel unique and varied. Another priority was simplicity and scalability since I'll be updating this often with new personal and professional projects. Lastly I wanted to practice at implementing responsive, reactive effects because I find them incredibly satisfying to iterate on and they breathe a lot of life into even the most basic templating.", 
            "I'm very pleased with how it turned out and I learned a ton! It was so rewarding to design the pieces, develop and position them, and see the project come together so quickly."]}
            imgList={[portfolioScreenshot, portfolioCode1, portfolioCode2, portfolioCode3]}
            />}></Route>
          <Route path="/diablo-4" element={<ProjectPage
            title="Diablo IV"
            duration="7+ Years"
            teamSize="~525"
            description={["Almost 2 years ago, I joined Blizzard Entertainment's Team 3 and had the pleasure to contribute to one of the largest video game franchises of all time. Back when I started, the game wasn't out yet and we were all focused on getting our content into a ship-ready state. It was incredble seeing the whole team rally around polishing up everything we could before the upcoming launch on June 6th, 2023. Diablo IV released to critical acclaim and astronomical player numbers.", 
            "After launch, I joined a smaller subteam on D4 called the Seasons team focused on creating new, exciting, experimental content drops for our dedicated playerbase. Through this, I was able to be heavily involved with concepting, prototyping, iterating, and polishing brand new types of Dungeons for players to fight their way through. I found myself to thrive in this shorter timeline and highly collaborative environment. Not only was this extremely gratifying, but it required me to develop exploit-proof and performant systems and mechanics that could survive the stress of hundreds of thousands of players. Thus far, I've been involved in contributing to Season of the Malignant and Season of the Construct. Both had relatively smooth launches thanks to our diligent weeks of bugfixing and a handful of hotfixes/patches post-launch",
            "Since this was my first experience working on a professional product with a large team, I learned all about being the best teammate I could be. Namely, I found out the value of asking frequent questions and getting involved in troubleshooting. I gained experience at working with Project Managers and utilizing Jira tasks to organize/track workloads. The process of taking and giving feedback was something I improved at a ton as well.",
            "I'm exceedingly proud of the work I've done on Diablo IV. From my early days eagerly learning the propriety tools to nowadays confidently creating never-before-seen content, it's shocking to see how much I've grown in just a few years."]}
            imgList={[d4FastestSelling, d4Gameplay2, d4Gameplay3, d4Gameplay4, d4DiceAwards, d4GameAwards]}
            link="https://diablo4.blizzard.com/en-us/"
          />}></Route>
          <Route path="/factory-reset" element={<ProjectPage
            title="Factory Reset"
            duration="5 Months"
            teamSize="11"
            description={["Factory Reset is a tactical, robot-building roguelite game made in Unity as a capstone project for MSU's Game Design Minor. I served as the team's Producer, Lead Designer, and Effect Engineer. This was one of my first leadership positions on medium-sized team and it provided me with valueable experience sprint planning, scoping, and people managing. Additionally, throughout development we met weekly with a team of professional game developers who acted as our clients and advisors.", 
            "As you can see from the screenshots, Factory Reset is quite a complicated game with lots of room for strategy and build planning. Because of the high level of complexity of it's systems, we had to really hone in the player onboarding exerience. Our biggest priority was displaying important information when the player needed it and balancing that with not overwhelming them. We developed a robust tooltip system for all the items in the game as well as made sure all available actions for the player were as responsive as possible. Eventually, with months of iteration and playtesting, new players started to ask less questions and were naturally taking on the inticate enemy encounters with ease. By the end of the project, we had an extremely juicey, responsive, and most importantly fun gameplay experience.", 
            "Finishing Factory Reset and presenting it was easily one of my highlights from my time at MSU. I was so proud of what the team was able to put together over the course of a very busy semester. Out of all 5 teams in the class, we won the Excellence in Design Award from our professors which was the icing on the cake of this extremely challenging, but rewarding project."]}
            imgList={[facresTitle, facresGameplay1,facresGameplay2, facresGameplay3, facresGameplay4]}
            link="https://reidharry.itch.io/factory-reset"
            />}></Route>
        </Routes>
        <Contact/>
      </div>
    </Router>
  );
}

export default App;
