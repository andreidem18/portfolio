import {useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {addMySkills} from '../actions/actionsGenerator.js';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const MySkylls = () => {

    let html = useRef(null);
    let js = useRef(null);
    let react = useRef(null);

    let mySkillsSection = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        gsap.from(html, {
            duration: 1.2,
            y: 50,
            opacity: 0,
            stagger: .3,
            ease: 'ease-in',
            scrollTrigger: {
                trigger: html,
                start: 'top bottom'
            }
        });
        gsap.from(js, {
            duration: 1.2,
            y: 50,
            opacity: 0,
            stagger: .3,
            ease: 'ease-in',
            scrollTrigger: {
                trigger: js,
                start: 'top bottom'
            }
        });
        gsap.from(react, {
            duration: 1.2,
            y: 50,
            opacity: 0,
            stagger: .3,
            ease: 'ease-in',
            scrollTrigger: {
                trigger: react,
                start: 'top bottom'
            }
        });
        dispatch(addMySkills(mySkillsSection))
    }, [dispatch])


    return(
        <section className="my-skills" ref={el => mySkillsSection = el}>
            <div className="row">
                <div className="col-4">
                    <div className="card" ref={el => html = el}>
                        <div className="box">
                            <div className="percent">
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle cx="70" cy="70" r="70"></circle>
                                </svg>
                                <div className="number">
                                    <h2>80<span>%</span></h2>
                                </div>
                            </div>
                            <h2 className="skill">HTML & CSS</h2>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card" ref={el => js = el}>
                        <div className="box">
                            <div className="percent">
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle cx="70" cy="70" r="70"></circle>
                                </svg>
                                <div className="number">
                                    <h2>85<span>%</span></h2>
                                </div>
                            </div>
                            <h2 className="skill">JavaScript</h2>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card" ref={el => react = el}>
                        <div className="box">
                            <div className="percent">
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle cx="70" cy="70" r="70"></circle>
                                </svg>
                                <div className="number">
                                    <h2>70<span>%</span></h2>
                                </div>
                            </div>
                            <h2 className="skill">React JS</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MySkylls;