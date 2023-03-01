import { AboutMe } from "./About";
import { Header } from "./Header";
import { Skills } from "./Skills";
import { useRef } from 'react';
import { Projects } from "./Projects";
 import { Home } from "./About";
import { Contact} from "./Contact";
import { Calender} from "./calender";

export const Portfolio = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);
    const resumeRef = useRef(null);

    return(
        <div>
            <Header homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} projectRef={projectRef}
                contactRef={contactRef}  />
            <AboutMe skillsRef={skillsRef} aboutRef={aboutRef} />
            <Skills skillsRef={skillsRef} />
            <Projects projectRef={projectRef} />
            <Calender/>
            {/* <Blogs blogRef={blogRef} /> */}
            <Contact aboutRef={aboutRef} contactRef={contactRef} />
        </div>
    );
};

// blogRef={blogRef} 