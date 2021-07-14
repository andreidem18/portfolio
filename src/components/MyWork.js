import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addMyWork} from '../actions/actionsGenerator.js';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const MyWork = () => {

    let work1 = useRef(null);
    let work2 = useRef(null);
    let work3 = useRef(null);
    let work4 = useRef(null);

    let myWorkSection = useRef(null);

    const isEnglish = useSelector((state) => state.isEnglish);
    const dispatch = useDispatch();

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
        dispatch(addMyWork(myWorkSection));
    }, [dispatch]);

    return(
        <section className="my-works" ref={el => myWorkSection = el}>
            <h2 className="title">{isEnglish ? 'My Work' : 'Mis Proyectos'}</h2>
            {/* Trivia app */}
            <div className="work" ref = {el => work1 = el}>
                <div className="col-5">
                    <h3 className="subtitle-1">
                        Trivia app
                    </h3>
                    <h2 className="subtitle-2">
                        <a href="https://triviapp101.netlify.app/">triviapp101.app</a>
                    </h2>
                    {isEnglish ? (
                        <p className="text">Mini Game created using the API from {' '}
                        <a href='https://opentdb.com/' target="_blank" rel="noreferrer">Open Trivia</a>. Was created using only Vanilla JavaScript.</p>
                    ) : (
                        <p className="text">Mini juego creado usando la API de {' '}
                        <a href='https://opentdb.com/' target="_blank" rel="noreferrer">Open Trivia</a>. Creado usando sólamente Vanilla JavaScript.</p>
                    )}
                    <div className="links">
                        <a href="https://github.com/andreidem18/trivia-web" target="_blank" rel="noreferrer">
                            <i className="fab fa-github-square"></i> 
                        </a>
                        <a href="https://triviapp101.netlify.app/" target="_blank" rel="noreferrer">
                            <i className="far fa-file"></i>
                        </a>
                    </div>
                </div>
                <a className="col-7" href="https://triviapp101.netlify.app/" target="_blank" rel="noreferrer">
                    <img src="https://github.com/andreidem18/portfolio/blob/main/src/images/trivia.jpg?raw=true" alt="trivia app"/>
                </a>
            </div>
            {/* IMDb Copy */}
            <div className="work" ref = {el => work2 = el}>
                <div className="col-5">
                    <h3 className="subtitle-1">
                        IMDb Copy
                    </h3>
                    <h2 className="subtitle-2">
                        <a href="https://imdb4.herokuapp.com/api-docs">imdb4.com/api</a>
                    </h2>
                    {isEnglish ? (
                        <p className="text">REST API to search and save information about movies and series. Was created using Node JS, Express and Sequelize</p>
                    ) : (
                        <p className="text">REST API para buscar y guardar información acerca de películas y series. Fue creada usando Node JS, Express y Sequelize</p>
                    )}
                    <div className="links">
                        <a href="https://github.com/andreidem18/imdb1" target="_blank" rel="noreferrer">
                            <i className="fab fa-github-square"></i> 
                        </a>
                        <a href="https://imdb4.herokuapp.com/api-docs" target="_blank" rel="noreferrer">
                            <i className="far fa-file"></i>
                        </a>
                    </div>
                </div>
                <a className="col-7" href="https://imdb4.herokuapp.com/api-docs" target="_blank" rel="noreferrer">
                    <img src="https://github.com/andreidem18/portfolio/blob/main/src/images/imdb.jpg?raw=true" alt="IMDb documentation capture"/>
                </a>
            </div>
            {/* Chat app */}
            <div className="work"  ref = {el => work4 = el}>
                <div className="col-5">
                    <h3 className="subtitle-1">
                        Rick and Morty Wiky
                    </h3>
                    <h2 className="subtitle-2">
                        <a href="https://rickymorty.netlify.app/">rickmorty.app</a>
                    </h2>
                    {isEnglish ? (
                        <p className="text">Web app created with the REST API of {' '}
                        <a href='https://rickandmortyapi.com/' target="_blank" rel="noreferrer">The Rick and Morty API</a> To see information about the characters from different places from the Rick and Morty universe. It was created using React JS</p>
                    ) : (
                        <p className="text">Aplicación web creada con la REST API de {' '}
                        <a href='https://rickandmortyapi.com/' target="_blank" rel="noreferrer">The Rick and Morty API</a> Para ver informacion acerca de los personajes de diferentes ubicaciones del universo de Rick y Morty. Creado usando React JS</p>
                    )}
                    <div className="links">
                        <a href="https://github.com/andreidem18/rick-morty" target="_blank" rel="noreferrer">
                            <i className="fab fa-github-square"></i> 
                        </a>
                        <a href="https://rickymorty.netlify.app/" target="_blank" rel="noreferrer">
                            <i className="far fa-file"></i>
                        </a>
                    </div>
                </div>
                <a className="col-7" href="https://rickymorty.netlify.app/" target="_blank" rel="noreferrer">
                    <img src="https://raw.githubusercontent.com/andreidem18/portfolio/main/src/images/ricky-morty.jpg" alt="Rick and Morty app capture"/>
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
                    {isEnglish ? (
                        <p className="text">Web aplication to search information about pokemons. Was created using the API from {' '}
                        <a href='https://pokeapi.co/' target="_blank" rel="noreferrer">PokeAPI</a> and ReactJS with some concepts of useContext and Redux.</p>
                    ) : (
                        <p className="text">Aplicación web para buscar información sobre pokemons. Creada usando la API de {' '}
                        <a href='https://pokeapi.co/' target="_blank" rel="noreferrer">PokeAPI</a> y ReactJS con algunos conceptos de useContext and Redux.</p>
                    )}
                    <div className="links">
                        <a href="https://github.com/andreidem18/pokeapi" target="_blank" rel="noreferrer">
                            <i className="fab fa-github-square"></i> 
                        </a>
                        <a href="https://mypokedex101.netlify.app/" target="_blank" rel="noreferrer">
                            <i className="far fa-file"></i>
                        </a>
                    </div>
                </div>
                <a className="col-7" href="https://mypokedex101.netlify.app/" target="_blank" rel="noreferrer">
                    <img src="https://github.com/andreidem18/portfolio/blob/main/src/images/pokeapi.jpg?raw=true" alt="pokemon app capture"/>
                </a>
            </div>
        </section>
    )
}
export default MyWork;