export default function Header() {
    return (
        <header>
            <a href="#intro" className="header-link"><i className="fa-solid fa-user"></i> <span>Intro</span></a>
            <a href="#skills" className="header-link"><i className="fa-solid fa-puzzle-piece"></i> <span>Skills</span></a>
            <a href="#services" className="header-link"><i className="fa-solid fa-book"></i> <span>Services</span></a>
            <a href="#projects" className="header-link"><i className="fa-solid fa-book"></i> <span>Projects</span></a>
            <a href="#contact" className="header-link"><i className="fa-solid fa-phone"></i> <span>Contact</span></a>
        </header>
    )
}