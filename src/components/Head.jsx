export default function Head() {
    return (
        <section className="full-page-section" id="head">
            <div className="title-area">
                <div className="main-title">
                    <h1 style={{
                        background: "linear-gradient(to right, #0079E9 0% , #00D998 25%, #00A310 30%, #007242 90%)",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>App & Web Development</h1>
                </div>
                <div className="main-title title-divided">
                    <div className="main-title-segment">
                        <h1 style={{
                            background: "linear-gradient(to right, #E30000 0%, #FF7A00 50%, #FF007A 95%)",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>UI/UX Design</h1>
                    </div>
                    <div className="main-title-segment">
                        <p style={{color: "#040033"}}>Custom Script Development</p>
                    </div>
                </div>
            </div>
        </section>
    )
}