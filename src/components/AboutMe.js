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
                        Full-Stack developer
                    </h2>
                    {isEnglish ? (
                        <p className="text">I am a passionate about solving problems through technology. I have knowledge in HTML, CSS, JavaScript, Bootstrap and React to the client side, and Node JS and Django to the server side. Currently, I am working in a Mexican startup called AI/SD as React developer, and I am studying software engineering at <a href='https://www.unir.net/' target="_blank" rel="noreferrer">UNIR</a>.</p> 
                    ) : (
                        <p className="text">Apasionado resolviendo problemas a través de la tecnología. Cuento con conocimientos en HTML, CSS, JavaScript, Bootstrap y React para el lado del cliente, y Node JS y Django para el lado del servidor. Actualmente formo parte del equipo de una startup mexicana llamada AI/SD, y me encuentro estudiando ingeniería informática en la <a href='https://www.unir.net/' target="_blank" rel="noreferrer">UNIR</a>.</p>
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