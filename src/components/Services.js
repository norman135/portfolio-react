import prodDev from "../images/prod-dev.png"
import prodEnhance from "../images/prod-enhance.png"
import dataAnalytics from "../images/data-analytics.png"
import autoSol from "../images/auto-sol.png"

export default function Services() {
    return (
        <div id="services" className="section" >
            <div className="service">
                <div className="service-image-space">
                    
                    <div className="service-image">
                        <img src={prodDev} alt=""/>
                    </div>
                </div>
                <div className="service-desc-space">
                    <h1 className="service-desc-title">Product Development</h1>
                    <div className="service-desc-desc">As a software engineer, I have a passion for turning ideas into fully functional software products. From ideation to deployment, I am dedicated to working with my clients to create software that meets their needs and exceeds their expectations. I stay up to date with the latest technologies, methodologies, and best practices to ensure that the software I develop is robust, scalable, and maintainable. Whether it's a web or mobile application, a desktop program, or a cloud-based solution, I take pride in delivering software that is user-friendly, reliable, and innovative.</div>
                </div>
            </div>
            <div className="service">
                <div className="service-desc-space">
                    <h1 className="service-desc-title">Product Enhancement</h1>
                    <div className="service-desc-desc">In today's competitive market, it's essential to keep your software products up to date and continually improve them to meet the ever-changing user demands. As a software engineer with years of experience, I can help you enhance your existing software products. I can fix bugs, add new features, optimize performance, and ensure that your software is scalable and maintainable. I use my problem-solving skills and analytical mindset to identify and address issues quickly and efficiently, delivering software solutions that meet your business goals and exceed your expectations. With my expertise, you can keep your software products running smoothly, keep your users happy, and stay ahead of the competition.</div>
                </div>
                <div className="service-image-space">
                    <div className="service-image">
                        <img src={prodEnhance} alt=""/>
                    </div>
                </div>
            </div>
            <div className="service">
                <div className="service-image-space">
                    
                    <div className="service-image">
                        <img src={dataAnalytics} alt=""/>
                    </div>
                </div>
                <div className="service-desc-space">
                    <h1 className="service-desc-title">Data Analytics & Management</h1>
                    <div className="service-desc-desc">Effective data analytics and management solutions are essential for your business's success. As a skilled software engineer, I can provide you with the tools and expertise to harness the power of your data. By implementing robust data collection, organization, and analysis processes, you can gain valuable insights into your business operations, customer behavior, and market trends. These insights enable informed decision-making, identify growth opportunities, optimize efficiency, and drive overall performance. Embracing data analytics and management is crucial in today's competitive landscape, allowing you to make data-driven decisions that propel your business forward and ensure long-term success.</div>
                </div>
            </div>
            <div className="service">
                <div className="service-desc-space">
                    <h1 className="service-desc-title">Automation Solutions</h1>
                    <div className="service-desc-desc">Automation is a game-changer for your business, and as a software engineer, I specialize in delivering efficient automation solutions. By leveraging cutting-edge technologies, I can streamline and optimize your repetitive tasks, freeing up valuable time and resources. Through custom automation workflows and intelligent systems, you can enhance productivity, reduce human error, and achieve consistent and reliable results. Automation empowers your team to focus on high-value activities, fostering innovation and strategic growth. Embracing automation not only improves operational efficiency but also enables scalability, cost savings, and a competitive edge in today's fast-paced business landscape. Let me help you unlock the transformative power of automation, revolutionizing the way you work and ensuring your business thrives in the digital age.</div>
                </div>
                <div className="service-image-space">
                    <div className="service-image">
                        <img src={autoSol} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}