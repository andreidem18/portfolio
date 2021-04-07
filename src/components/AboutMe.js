import {useEffect} from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {

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
        })
    }, []);

    return(
        <section className="about-me">
            <div className="row">
                <div className="col-5 transition-2">
                    <h3 className="title">
                        About Me
                    </h3>
                    <h2 className="subtitle-1">
                        Front end developer
                    </h2>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint cumque eum, eligendi quas impedit maxime beatae deleniti voluptate reprehenderit at deserunt necessitatibus delectus iure sequi consectetur accusamus illo unde esse?
                    </p>
                </div>
                <div className="col-7 transition-2">
                    <img src="https://github.com/andreidem18/portfolio/blob/main/src/images/example.jpg?raw=true" alt="me"/>
                </div>
            </div>
        </section>
    )
}
export default AboutMe;