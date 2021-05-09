import { gsap, Power4, Back } from 'gsap';
import { useEffect } from 'react';
import {useSelector} from 'react-redux'

const Hero = () => {

    let tl = gsap.timeline();

    useEffect(() => {
        tl.from(
            '.transition-1',
            {
                opacity: 0,
                y: '-30%',
                duration: 2,
                ease: Power4.easeOut
            }
        )
        tl.from('.stagger1',{ 
            opacity: 0, 
            y: -50, 
            stagger: .3,
            duration: 2, 
            ease: Power4.easeOut
        }, '-=1.5');

        tl.from('.hero-design', {
            opacity: 0, y: 50, ease: Power4.easeOut, duration: 1
        }, '-=2');

        gsap.from('.square-anim', {
            stagger: 0.2,
            scale: 0.1,
            duration: 1,
            ease: Back.easeOut.config(1.7)
        });
    }, [tl]);

    const isEnglish = useSelector((state) => state.isEnglish);

    return(
        <section className="hero">
            <div className="first-row transition-1">
                <h1 className="stagger1">
                    {isEnglish ? 'Passion, Dedication and a lot of Coffee!' : '¡Hola! Soy Desarrollador Web'}
                </h1>
                <div className="meet stagger1">
                    <p data-text={isEnglish ? '👇 Meet Andrés Mendoza' : '👇 Conóceme'}>
                        {isEnglish ? '👇 Meet Andrés Mendoza' : '👇 Conóceme'}
                    </p>
                </div>
                <svg className="scroll stagger1" xmlns="http://www.w3.org/2000/svg" width="40" height="77" viewBox="0 0 40 77">
                    <g id="scroll" transform="translate(-253 -787)">
                        <g id="Rectangle_12" data-name="Rectangle 12" transform="translate(253 787)" fill="none" stroke="#fff" strokeWidth="4">
                        <rect width="40" height="77" rx="20" stroke="none"/>
                        <rect x="2" y="2" width="36" height="73" rx="18" fill="none"/>
                        </g>
                        <circle className="circle" id="Ellipse_1" data-name="Ellipse 1" cx="11" cy="11" r="11" transform="translate(262 798)" fill="#fff"/>
                    </g>
                </svg>
            </div>


            <div className="second-row hero-design">
                <svg xmlns="http://www.w3.org/2000/svg" width="686" height="688" viewBox="0 0 686 688">
                    <g id="blockdesign" transform="translate(-935 -289)">
                        <rect className="square-anim" id="Rectangle_2" data-name="Rectangle 2" width="172" height="172" rx="19" transform="translate(1277 289)" fill="#25001b"/>
                        <rect className="square-anim" id="Rectangle_10" data-name="Rectangle 10" width="172" height="172" rx="86" transform="translate(1277 461)" fill="#ff005c"/>
                        <rect className="square-anim" id="Rectangle_8" data-name="Rectangle 8" width="172" height="172" rx="19" transform="translate(1449 461)" fill="#e5d5fa"/>
                        <rect className="square-anim" id="Rectangle_5" data-name="Rectangle 5" width="172" height="172" rx="19" transform="translate(1277 633)" fill="#25001b"/>
                        <rect className="square-anim" id="Rectangle_3" data-name="Rectangle 3" width="172" height="172" rx="19" transform="translate(1107 461)" fill="#fff"/>
                        <rect className="square-anim" id="Rectangle_9" data-name="Rectangle 9" width="172" height="172" rx="86" transform="translate(1107 633)" fill="#fff600"/>
                        <rect className="square-anim" id="Rectangle_7" data-name="Rectangle 7" width="172" height="172" rx="19" transform="translate(935 633)" fill="#fff" opacity="0.17"/>
                        <rect className="square-anim" id="Rectangle_4" data-name="Rectangle 4" width="172" height="172" rx="19" transform="translate(1107 805)" fill="#fff"/>
                    </g>
                </svg>
            </div>
        </section>
    )
}
export default Hero;