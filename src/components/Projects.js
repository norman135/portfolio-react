import rasImg from "../images/ras.png"
import lreImg from "../images/lre.png"
import slImg from "../images/smart logistics logo.png"
import laImg from "../images/la.png"
import wilsImg from "../images/wils-logo-tp.png"

export default function Projects() {
    return (
        <div id="projects" className="section">
            <div className="project-group">
                <div className="project">
                    <div className="project-info">
                        <h2 className="project-title">Rwanda Academy of Sciences</h2>
                        <div className="project-description">A dynamic website showing information about R.A.S, Press Releases and Events with a simplistic dashboard allowing the editor to not work with complex dashboards from WordPress or other content management systems.<br/><a href="https://ras.org.rw">ras.org.rw</a></div>
                    </div>
                    <div className="project-image">
                        <img src={rasImg}/>
                    </div>
                </div>
                <div className="project-right">
                    <div className="project-info">
                        <h2 className="project-title">Launch Ready Exams</h2>
                        <div className="project-description">A platform consisting of a Learning Management System partially developed with an advanced automation script, enabling inhumanly-fast uploading and modification of exams with unprecedented speed and efficiency.<br/><a href="https://launchreadyexams.com">launchreadyexams.com</a></div>
                    </div>
                    <div className="project-image">
                        <img src={lreImg}/>
                    </div>
                </div>
                <div className="project">
                    <div className="project-info">
                        <h2 className="project-title">Smart Logistics Technology</h2>
                        <div className="project-description">Connecting people and business to a better future through logistics and technology. Customer-focused, highly professional and operating with utmost integrity.<br/><a href="https://slogisticstechnology.com">slogisticstechnology.com</a></div>
                    </div>
                    <div className="project-image">
                        <img src={slImg}/>
                    </div>
                </div>
                <div className="project-right">
                    <div className="project-info">
                        <h2 className="project-title">Lead Access</h2>
                        <div className="project-description">A company based in Rwanda that specializes in consultation and high performance coaching.<br/><a href="https://leadaccessnow.com">leadaccessnow.com</a></div>
                    </div>
                    <div className="project-image">
                        <img src={laImg}/>
                    </div>
                </div>
                <div className="project">
                    <div className="project-info">
                        <h2 className="project-title">Women in Leadership Summit & Awards</h2>
                        <div className="project-description">A summit & awards event that recognizes women that are taking huge steps in leadership.<br/><a href="https://wilsafrica.com">wilsafrica.com</a></div>
                    </div>
                    <div className="project-image">
                        <img src={wilsImg}/>
                    </div>
                </div>
            </div>
        </div>
    )
}