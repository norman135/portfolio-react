import profImg from "../images/prof-squared.jpg"
export default function About() {
    return (
        <section className="three-quart-section" id="about">
            <div className="section-content">
                <div className="section-title">
                    <h1>About Me</h1>
                </div>
                <div className="about-card">
                    <div className="ac-pic-area">
                        <img src={profImg} alt="Profile Picture" className="ac-pic" />
                    </div>
                    <div className="ac-desc-area">
                        <div className="ac-title">
                            <h2>Who Am I?</h2>
                        </div>
                        <div className="ac-desc">
                            I’m Norman Mico, a full stack web developer skilled in various front end and back end technologies. I value quality complete work, on-time delivery and effective communication to turn abstract ideas into a reality.
                            <br/><br/>
                            Please reach out using the details below to discuss a project or simply communicate anything you’d like.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}