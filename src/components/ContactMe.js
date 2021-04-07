import {useEffect} from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {

    useEffect(() => {
        gsap.from('.transition-3', {
            duration: 1.2,
            y: 50,
            opacity: 0,
            stagger: .6,
            ease: 'ease-in',
            scrollTrigger: {
                trigger: '.transition-3',
                start: 'top bottom'
            }
        });
        gsap.from('.transition-4', {
            duration: 1.2,
            y: 50,
            opacity: 0,
            stagger: .6,
            ease: 'ease-in',
            scrollTrigger: {
                trigger: '.transition-4',
                start: 'top bottom'
            }
        })
    }, []);
    
    return(
        <section className="contact-me">
            <h2 className="title">Contact me</h2>
            <div className="col-6">
                <form action="">
                    <div className="input-field transition-3">
                        <input type="text" required/>
                        <label>Name</label>
                    </div>
                    <div className="input-field transition-3">
                        <input type="email" required/>
                        <label>Email</label>
                    </div>
                    <div className="input-field-ta transition-3">
                        <textarea rows="3" type="text" required/>
                        <label>Type a message</label>
                    </div>                                        
                    <button>Submit</button>
                </form>
            </div>
            <div className="col-6 info transition-4">
                <h2>Contact me</h2>
                <div>
                    <i className="fas fa-envelope"></i>
                </div>
                <h3 className="subtitle-2">Mail me</h3>
                <p>andres.david.mm@hotmail.com</p>

                <div>
                    <i className="fas fa-phone"></i>
                </div>
                <h3 className="subtitle-2">Call me</h3>
                <p>315 785 0061</p>
            </div>
        </section>
    )
}
export default ContactMe;