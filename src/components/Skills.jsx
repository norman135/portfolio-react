import htmlImg from "../images/html5.png"
import cssImg from "../images/css3.png"
import jsImg from "../images/js.png"
import reactImg from "../images/react.png"
import nodeImg from "../images/node.png"
import pythonImg from "../images/python.png"

export default function Skills() {
    return (
        <section className="half-page-section opposite-section" id="skills">
            <div className="section-content">
                <div className="section-title">
                    <h1>Skills & Technologies</h1>
                </div>
                <div className="item-row-container">
                    <div className="item-row">
                        <div className="item-row-item">
                            <img src={htmlImg} alt="HTML" />
                        </div>
                        <div className="item-row-item">
                            <img src={cssImg} alt="CSS" />
                        </div>
                        <div className="item-row-item">
                            <img src={jsImg} alt="js" />   
                        </div>
                        <div className="item-row-item">
                            <img src={reactImg} alt="react" />
                        </div>
                        <div className="item-row-item">
                            <img src={nodeImg} alt="node" />
                        </div>
                        <div className="item-row-item">
                            <img src={pythonImg} alt="python" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}