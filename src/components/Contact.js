export default function Contact() {
    return (
        <div id="contact" className="section">
            <div className="contact-social-buttons">
                <a href="https://github.com/norman135" className="contact-social-button github-button"><i className="fa-brands fa-github"></i> Github</a>
                <a href="https://linkedin.com/in/norman135" className="contact-social-button linkedin-button"><i className="fa-brands fa-linkedin"></i> Linked<b>In</b></a>
            </div>
            <div className="contact-form-section">
                <div className="contact-form-form">
                    <form>
                        <input className="form-input" type="text" name="address" placeholder="Your email or phone"/>
                        <textarea name="message" className="form-area" placeholder="Your message."></textarea>
                        <button onclick="getValue()" className="form-submit"><i className="fa-solid fa-paper-plane"></i> Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}