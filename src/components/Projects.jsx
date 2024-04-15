import wilsImg from "../images/wilsafrica.jpg"
import laImg from "../images/leadaccessnow.jpg"
import lreImg from "../images/lre.jpg"
import slImg from "../images/slogistics.jpg"

export default function Projects() {
    return (
        <section className="full-page-section" id="projects">
            <div className="section-content">
                <div className="section-title">
                    <h1>Projects</h1>
                </div>
                <div className="project-grid">
                    <a target="blank" href="https://wilsafrica.com" className="project">
                        <div className="project-link" style={{backgroundColor: "#ead9ea"}}>
                            <p style={{color: "purple"}}>wilsafrica.com</p>
                        </div>
                        <img src={wilsImg} alt="wilsafrica.com" className="project-image" />
                    </a>
                    <a target="blank" href="https://leadaccessnow.com" className="project">
                        <div className="project-link" style={{backgroundColor: "#f0dbc3"}}>
                            <p style={{color: "#6c3917"}}>leadaccessnow.com</p>
                        </div>
                        <img src={laImg} alt="leadaccessnow.com" className="project-image" />
                    </a>
                    <a target="blank" href="https://launchreadyexams.com" className="project">
                        <div className="project-link" style={{backgroundColor: "#daf0fe"}}>
                            <p style={{color: "#0077ff"}} >launchreadyexams.com</p>
                        </div>
                        <img src={lreImg} alt="launchreadyexams.com" className="project-image" />
                    </a>
                    <a target="blank" href="https://slogisticstechnology.com" className="project">
                        <div className="project-link" style={{backgroundColor: "#e6eeff"}}>
                            <p style={{color: "#001f43"}}>slogisticstechnology.com</p>
                        </div>
                        <img src={slImg} alt="slogisticstechnology.com" className="project-image" />
                    </a>
                </div>
            </div>
        </section>
    )
}