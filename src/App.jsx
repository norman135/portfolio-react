import Head from "./components/Head";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Partners from "./components/Partners";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
    return(
        <div>
            <Head/>
            <Skills/>
            <Projects/>
            <Partners/>
            <About/>
            <Contact/>
        </div>
    )
}