import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeLanguage} from '../actions/actionsGenerator';

const NavBar = () => {

    const [isUnfolded, setIsUnfolded] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [isBottom, setIsBottom] = useState(false);

    const aboutMeSection = useSelector((state) => state.aboutMe);
    const contactMeSection = useSelector((state) => state.contactMe);
    const mySkillsSection = useSelector((state) => state.mySkills);
    const myWorkSection = useSelector((state) => state.myWork);
    const isEnglish = useSelector((state) => state.isEnglish);
    const dispatch = useDispatch();


    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    const handleUnfolded = () => {
        setIsUnfolded(!isUnfolded);
    }

    const handleIsBottom = () => {
        if(width < 640){
            if(window.scrollY >= 504){
                setIsBottom(true);
            }
            else{
                setIsBottom(false);
            }
        } else if(width > 640){
            if(window.scrollY >= 465){
                setIsBottom(true);
            }
            else{
                setIsBottom(false);
            }
        } else if(width > 992){
            if(window.scrollY >= 747){
                setIsBottom(true);
            }
            else{
                setIsBottom(false);
            }
            console.log(window.scrollY);
        } else if(width > 1130){
            if(window.scrollY >= 765){
                setIsBottom(true);
            }
            else{
                setIsBottom(false);
            }
        }
    }
    window.addEventListener('scroll', handleIsBottom);

    const handleButtonNav = (element) => {
        window.scrollTo({ 
            top: width > 640 ? element.offsetTop - 89 : element.offsetTop - 60, 
            behavior: "smooth"
        });
        setIsUnfolded(false);
    }

    return(
        <nav className={isBottom ? 'active' : ''}>
            <div className={isBottom ? "first-row active" : "first-row"}>
                <button 
                className="logo">Andrés</button>
                <div style={{display: 'flex'}}>
                    <div className="sections">
                        <button onClick={() => handleButtonNav(aboutMeSection)}>
                            {isEnglish ? 'About me' : 'Sobre Mi'}
                        </button>
                        <button onClick={() => handleButtonNav(mySkillsSection)}>
                            {isEnglish ? 'My Skills' : 'Conocimientos'}
                        </button>
                        <button onClick={() => handleButtonNav(myWorkSection)}>
                            {isEnglish ? 'My Work' : 'Mis Proyectos'}
                        </button>
                        <button onClick={() => handleButtonNav(contactMeSection)}>
                            {isEnglish ? 'Contact Me' : 'Contáctame'}
                        </button>
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
                <a href="https://www.linkedin.com/in/andrés-david-mendoza-márquez-867a1b175" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in"></i> 
                </a>
                <button onClick={() => dispatch(changeLanguage())}>
                    <i className="fas fa-globe"></i>{" "}{isEnglish ? 'Español' : 'English'}
                </button>
            </div>
            <div 
            className={isBottom ? "desplegable-menu active" : "desplegable-menu"}
            style={{top: !isUnfolded || width > 992 ? '-179px' : width > 640 ? '89px': '59px'}}>
                <div className="sections-desplegable">
                        <button onClick={() => handleButtonNav(aboutMeSection)}>
                            {isEnglish ? 'About me' : 'Sobre Mi'}
                        </button>
                        <button onClick={() => handleButtonNav(mySkillsSection)}>
                            {isEnglish ? 'My Skills' : 'Conocimientos'}
                        </button>
                        <button onClick={() => handleButtonNav(myWorkSection)}>
                            {isEnglish ? 'My Work' : 'Mis Proyectos'}
                        </button>
                        <button onClick={() => handleButtonNav(contactMeSection)}>
                            {isEnglish ? 'Contact Me' : 'Contáctame'}
                        </button>
                </div>
                <div className="social-networks">
                    <a href="https://github.com/andreidem18" target="_blank" rel="noreferrer">
                        <i className="fab fa-github-square"></i>
                        <span> {"  "}GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/andrés-david-mendoza-márquez-867a1b175" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                        <span> {"  "}LinkedIn</span>

                    </a>
                    <button onClick={() => dispatch(changeLanguage())}>
                        <i className="fas fa-globe"></i>{"  "}{isEnglish ? 'Español' : 'English'}
                    </button>
                </div>
            </div>
        </nav>
    )
}
export default NavBar