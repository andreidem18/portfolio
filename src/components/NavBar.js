import {useEffect, useState} from 'react';

const NavBar = () => {

    const [isUnfolded, setIsUnfolded] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    const handleUnfolded = () => {
        setIsUnfolded(!isUnfolded);
    }

    const handleButtonNav = () => {
        setIsUnfolded(false);
    }

    return(
        <nav>
            <div className="first-row">
                <button 
                className="logo"
                style={{color: '#fff600'}}>Andrés</button>
                <div style={{display: 'flex'}}>
                    <div className="sections">
                        <button>About me</button>
                        <button>My skills</button>
                        <button>My work</button>
                        <button>Contact me</button>
                    </div>
                    <button 
                    onClick={handleUnfolded}
                    style={{display: width < 992 ? 'block' : 'none'}}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>
            
            <div className="second-row">
                <a href="https://github.com/andreidem18" target="_blank" rel="noreferrer">
                    <i className="fab fa-github-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/andrés-david.mendoza-márquez-867a1b175" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in"></i> 
                </a>
                <button>
                    <i className="fas fa-globe"></i>{" "}English
                </button>
            </div>
            <div 
            className="desplegable-menu"
            style={{top: isUnfolded && width < 992 ? '89px': '-154px'}}>
                <div className="sections-desplegable">
                    <button>About me</button>
                    <button>My skills</button>
                    <button>My work</button>
                    <button>Contact me</button>
                </div>
                <div className="social-networks">
                    <a href="https://github.com/andreidem18" target="_blank" rel="noreferrer">
                        <i className="fab fa-github-square"></i>
                        <span> {"  "}GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/andrés-david.mendoza-márquez-867a1b175" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                        <span> {"  "}LinkedIn</span>

                    </a>
                    <button>
                        <i className="fas fa-globe"></i>{"  "}English
                    </button>
                </div>
            </div>
        </nav>
    )
}
export default NavBar