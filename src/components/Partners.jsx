import laImg from "../images/la-2.png"
import slImg from "../images/smart logistics logo.png"
import rasImg from "../images/ras.png"
import lreImg from "../images/lre.png"

export default function Partners() {
    return (
        <section className="half-page-section opposite-section" id="partners">
            <div className="section-content">
                <div className="section-title">
                    <h1>Partners and Affiliates</h1>
                </div>
                <div className="item-row-container">
                    <div className="item-row">
                        <div className="item-row-item">
                            <img src={laImg} alt="Lead Access" />
                        </div>
                        <div className="item-row-item">
                            <img src={slImg} alt="Smart Logistics" />
                        </div>
                        <div className="item-row-item">
                            <img src={rasImg} alt="RAS" />
                        </div>
                        <div className="item-row-item">
                            <img src={lreImg} alt="Launch Ready Exams" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}