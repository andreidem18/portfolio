import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addAboutMe} from '../actions/actionsGenerator.js';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {

    let aboutMeSection = useRef(null);

    const isEnglish = useSelector((state) => state.isEnglish);
    const dispatch = useDispatch();

    useEffect(() => {
        gsap.from('.transition-2', {
            duration: 1.2,
            y: 50,
            opacity: 0,
            stagger: .3,
            ease: 'ease-in',
            scrollTrigger: {
                trigger: '.transition-2',
                start: 'top bottom'
            }
        });
        dispatch(addAboutMe(aboutMeSection));
    }, [dispatch]);

    return(
        <section className="about-me" ref={el => aboutMeSection = el}>
            <div className="row">
                <div className="col-5 transition-2">
                    <h3 className="title">
                        {isEnglish ? 'About Me' : 'Sobre Mi'}
                    </h3>
                    <h2 className="subtitle-1">
                        Front end developer
                    </h2>
                    {isEnglish ? (
                        <p className="text">Web Developer with knowledge mostly in HTML, CSS, JavaScript, Bootstrap, React and Java. currently student in <a href='https://www.academlo.com/' target="_blank" rel="noreferrer">Academlo</a> in order to become a full-stack developer. I have skills working in team and fast-learning</p> 
                    ) : (
                        <p className="text">Desarrollador Web con conocimientos principalmente en HTML, CSS, JavaScript, Bootstrap, React y Java. Actualmente estudiante de <a href='https://www.academlo.com/' target="_blank" rel="noreferrer">Academlo</a> adquiriendo los conocimientos para volverse desarrollador full-stack. Cuenta con habilidades para trabajar en equipo y aprendizaje rápido.</p>
                    )}
                </div>
                <div className="col-7 transition-2">
                    <img src="https://raw.githubusercontent.com/andreidem18/portfolio/main/src/images/my-picture.jpg" alt="me"/>
                </div>
            </div>
        </section>
    )
}
export default AboutMe;