import mailIcon from "../icons/mail.png"
import phoneIcon from "../icons/phone.png"
import addIcon from "../icons/house.png"

export default function Contact() {
    return (
        <section className="half-section" id="contact">
            <div className="section-content">
                <div className="section-title">
                    <h1>Contact</h1>
                </div>
                <div className="contact-details-container">
                    <div className="contact-details">
                        <div className="email">
                            <a href="mailto:normanrmico@gmail.com"><img src={mailIcon}/>normanrmico@gmail.com</a>
                        </div>
                    </div>
                    <div className="contact-details cd-double">
                        <div className="phone">
                            <a href="tel:+250786527164"><img src={phoneIcon}/>{"(250) 786 527 164"}</a>
                        </div>
                        <div className="address">
                            <a target="blank" href="https://www.google.com/maps/place/Kigali/@-1.9297706,30.1272444,11z/data=!3m1!4b1!4m6!3m5!1s0x19dca4258ed8e797:0xf32b36a5411d0bc8!8m2!3d-1.9440727!4d30.0618851!16zL20vMGZuaGY?entry=ttu"><img src={addIcon}/>Kigali City, Rwanda</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}