import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const MyWork = () => {

    let work1 = useRef(null);
    let work2 = useRef(null);
    let work3 = useRef(null);
    let work4 = useRef(null);

    useEffect(() => {
        gsap.from(work1, {
            duration: 1.2,
            y: 50,
            opacity: 0,
            stagger: .3,
            ease: 'ease-in',
            scrollTrigger: {
                trigger: work1,
                start: 'top bottom'
            }
        });
        gsap.from(work2, {
            duration: 1.2,
            y: 50,
            opacity: 0,
            stagger: .3,
            ease: 'ease-in',
            scrollTrigger: {
                trigger: work2,
                start: 'top bottom'
            }
        });
        gsap.from(work3, {
            duration: 1.2,
            y: 50,
            opacity: 0,
            stagger: .3,
            ease: 'ease-in',
            scrollTrigger: {
                trigger: work3,
                start: 'top bottom'
            }
        });
        gsap.from(work4, {
            duration: 1.2,
            y: 50,
            opacity: 0,
            stagger: .3,
            ease: 'ease-in',
            scrollTrigger: {
                trigger: work4,
                start: 'top bottom'
            }
        });
    }, []);

    return(
        <section className="my-works">
            <h2 className="title">My works</h2>
            {/* Trivia app */}
            <div className="work" ref = {el => work1 = el}>
                <div className="col-5">
                    <h3 className="subtitle-1">
                        Trivia app
                    </h3>
                    <h2 className="subtitle-2">
                        <a href="https://triviapp101.netlify.app/">triviapp101.app</a>
                    </h2>
                    <p className="text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum dolorum vero quibusdam similique ipsa fuga nam molestias voluptatibus facere tempora quod natus quisquam, numquam sapiente optio iure molestiae beatae iusto.
                    </p>
                    <div className="links">
                        <a href="https://github.com/andreidem18/trivia-web">
                            <i className="fab fa-github-square"></i> 
                        </a>
                        <a href="https://triviapp101.netlify.app/">
                            <i className="far fa-file"></i>
                        </a>
                    </div>
                </div>
                <a className="col-7" href="https://triviapp101.netlify.app/">
                    <img src="https://github.com/andreidem18/portfolio/blob/main/src/images/trivia.jpg?raw=true" alt="trivia app"/>
                </a>
            </div>
            {/* Ricky Morty app */}
            <div className="work" ref = {el => work2 = el}>
                <div className="col-5">
                    <h3 className="subtitle-1">
                        Ricky and Morty app
                    </h3>
                    <h2 className="subtitle-2">
                        <a href="https://rickymorty.netlify.app/">rickymorty.app</a>
                    </h2>
                    <p className="text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum dolorum vero quibusdam similique ipsa fuga nam molestias voluptatibus facere tempora quod natus quisquam, numquam sapiente optio iure molestiae beatae iusto.
                    </p>
                    <div className="links">
                        <a href="https://github.com/andreidem18/rick-morty">
                            <i className="fab fa-github-square"></i> 
                        </a>
                        <a href="https://rickymorty.netlify.app/">
                            <i className="far fa-file"></i>
                        </a>
                    </div>
                </div>
                <a className="col-7" href="https://rickymorty.netlify.app/">
                    <img src="https://github.com/andreidem18/portfolio/blob/main/src/images/ricky-morty.jpg?raw=true" alt="ricky morty wiki capture"/>
                </a>
            </div>
            {/* Pokemon app */}
            <div className="work" ref = {el => work3 = el}>
                <div className="col-5">
                    <h3 className="subtitle-1">
                        Pokemon app
                    </h3>
                    <h2 className="subtitle-2">
                        <a href="https://mypokedex101.netlify.app/">mypokedex101.app</a>
                    </h2>
                    <p className="text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum dolorum vero quibusdam similique ipsa fuga nam molestias voluptatibus facere tempora quod natus quisquam, numquam sapiente optio iure molestiae beatae iusto.
                    </p>
                    <div className="links">
                        <a href="https://github.com/andreidem18/pokeapi">
                            <i className="fab fa-github-square"></i> 
                        </a>
                        <a href="https://mypokedex101.netlify.app/">
                            <i className="far fa-file"></i>
                        </a>
                    </div>
                </div>
                <a className="col-7" href="https://mypokedex101.netlify.app/">
                    <img src="https://github.com/andreidem18/portfolio/blob/main/src/images/pokeapi.jpg?raw=true" alt="pokemon app capture"/>
                </a>
            </div>
            {/* Chat app */}
            <div className="work"  ref = {el => work4 = el}>
                <div className="col-5">
                    <h3 className="subtitle-1">
                        Chat app
                    </h3>
                    <h2 className="subtitle-2">
                        <a href="https://mychat101.netlify.app/">mychat101.app</a>
                    </h2>
                    <p className="text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum dolorum vero quibusdam similique ipsa fuga nam molestias voluptatibus facere tempora quod natus quisquam, numquam sapiente optio iure molestiae beatae iusto.
                    </p>
                    <div className="links">
                        <a href="https://github.com/andreidem18/chat-app">
                            <i className="fab fa-github-square"></i> 
                        </a>
                        <a href="https://mychat101.netlify.app/">
                            <i className="far fa-file"></i>
                        </a>
                    </div>
                </div>
                <a className="col-7" href="https://mychat101.netlify.app/">
                    <img src="https://github.com/andreidem18/portfolio/blob/main/src/images/chat.jpg?raw=true" alt="chat app capture"/>
                </a>
            </div>
        </section>
    )
}
export default MyWork;