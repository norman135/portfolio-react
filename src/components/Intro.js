import profileImg from "../images/profile.jpeg"
export default function Intro() {
    return (
        <div id="intro" className="section">
            <div className="image-desc-div">
                <div className="circular-image">
                    <img src={profileImg}/>
                </div>
                <div className="description">
                    <h2 className="sub-title">Norman Mico</h2>
                    <div className="sub-desc">A software engineer with fullstack capabilities.<br/>Although familiar with front-end technologies, Norman is a bit more back-end oriented and is always interested in how things work under the hood.</div>
                </div>
            </div>
        </div>
    )
}