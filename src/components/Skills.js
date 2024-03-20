import html5Img from '../images/html5.png'
import cssImg from '../images/css3.png'
import jsImg from '../images/js.png'
import reactImg from '../images/react.png'
import pythonImg from '../images/python.png'
import nodeImg from '../images/node.png'
import phpImg from '../images/php.png'
import numpyImg from '../images/numpy.png'
import tensorflowImg from '../images/tensorflow.png'

export default function Skills() {
    return (
        <div id="skills" className="section">
            <h2>Frontend</h2>
            <div className="skill-group">
                <div className="skill-card" style={{backgroundColor: "rgba(255, 68, 0, 0.5)"}}>
                    <div className="skill-image">
                        <img src={html5Img}/>
                    </div>
                    <div className="skill-desc">
                        <h4 className="skill-desc-title">HTML</h4>
                        <span>The main language that powers webpages. Deep knowledge and very many years of experience. Can't go wrong with this one.</span>
                    </div>
                </div>
                <div className="skill-card" style={{backgroundColor: "rgba(0, 102, 255, 0.5)"}}>
                    <div className="skill-image">
                        <img src={cssImg}/>
                    </div>
                    <div className="skill-desc">
                        <h4 className="skill-desc-title">CSS</h4>
                        <span>Deals with the styling of HTML elements on a webpage. Deep knowledge and valuable experience.</span>
                    </div>
                </div>
                <div className="skill-card" style={{backgroundColor: "rgba(255, 196, 0, 0.5)"}}>
                    <div className="skill-image">
                        <img src={jsImg}/>
                    </div>
                    <div className="skill-desc">
                        <h4 className="skill-desc-title">JS</h4>
                        <span>Programming language in browser environments.</span>
                    </div>
                </div>
                <div className="skill-card" style={{backgroundColor: "rgba(55, 166, 240, 0.5)"}}>
                    <div className="skill-image">
                        <img src={reactImg}/>
                    </div>
                    <div className="skill-desc">
                        <h4 className="skill-desc-title">ReactJS</h4>
                        <span>JavaScript library for building efficient and interactive user interfaces.</span>
                    </div>
                </div>
            </div>
            <h2>Backend</h2>
            <div className="skill-group">
                <div className="skill-card" style={{backgroundColor: "rgba(0, 102, 255, 0.5)"}}>
                    <div className="skill-image">
                        <img src={pythonImg}/>
                    </div>
                    <div className="skill-desc">
                        <h4 className="skill-desc-title">Django/Flask</h4>
                        <span>Powerful Python web backend framework duo for rapid and scalable development.</span>
                    </div>
                </div>
                <div className="skill-card" style={{backgroundColor: "rgba(27, 88, 30, 0.5)", color: "white" }}>
                    <div className="skill-image">
                        <img src={nodeImg}/>
                    </div>
                    <div className="skill-desc">
                        <h4 className="skill-desc-title">NodeJS</h4>
                        <span>JavaScript runtime built on Chrome's V8 engine for server-side applications.</span>
                    </div>
                </div>
                <div className="skill-card" style={{backgroundColor: "rgba(189, 118, 255, 0.5)"}}>
                    <div className="skill-image" style={{marginBottom: "35px", marginTop: "35px"}}>
                        <img src={phpImg}/>
                    </div>
                    <div className="skill-desc">
                        <h4 className="skill-desc-title">PHP</h4>
                        <span>Back-end scripting languages that has been popular for a long time. Powers Facebook, Wikipedia and Wordpress CMS.</span>
                    </div>
                </div>
            </div>
            <h2>Data Science</h2>
            <div className="skill-group">
                <div className="skill-card" style={{backgroundColor: "rgba(0, 102, 255, 0.5)"}}>
                    <div className="skill-image">
                        <img src={pythonImg}/>
                    </div>
                    <div className="skill-desc">
                        <h4 className="skill-desc-title">Python</h4>
                        <span>Versatile, high-level programming language known for its simplicity and readability.</span>
                    </div>
                </div>
                <div className="skill-card" style={{backgroundColor: "rgba(76, 208, 248, 0.5)"}}>
                    <div className="skill-image">
                        <img src={numpyImg}/>
                    </div>
                    <div className="skill-desc">
                        <h4 className="skill-desc-title">NumPy</h4>
                        <span>Fundamental library for numerical computing in Python, enabling efficient array operations.</span>
                    </div>
                </div>
                <div className="skill-card" style={{backgroundColor: "rgba(240, 121, 85, 0.555)"}}>
                    <div className="skill-image">
                        <img src={tensorflowImg}/>
                    </div>
                    <div className="skill-desc">
                        <h4 className="skill-desc-title">Tensorflow</h4>
                        <span>Open-source deep learning framework for building and training neural networks.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}