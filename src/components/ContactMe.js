import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addContactMe} from '../actions/actionsGenerator.js';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useForm } from "react-hook-form";
import axios from 'axios';
gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {

    const {register, handleSubmit, reset} = useForm();

    const onSubmit = (data) => {
        const res = axios.post('https://emails-portfolio.herokuapp.com/send-email', data);
        res.then(() => alert('Your message has been sent!'))
        res.catch(() => alert('There was an error'));
        reset();
    }

    let contactMeSection = useRef(null);
    const isEnglish = useSelector((state) => state.isEnglish);
    const dispatch = useDispatch();

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
        dispatch(addContactMe(contactMeSection));
    }, [dispatch]);
    
    return(
        <section className="contact-me" ref={el => contactMeSection = el}>
            <h2 className="title">{isEnglish ? 'Contact Me' : 'Contáctame'}</h2>
            <div className="col-6">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-field transition-3">
                        <input type="text" name="name" ref={register()} required/>
                        <label>{isEnglish ? 'Name' : 'Nombre'}</label>
                    </div>
                    <div className="input-field transition-3">
                        <input type="email" name="email" ref={register()} required/>
                        <label>Email</label>
                    </div>
                    <div className="input-field transition-3">
                        <input type="text" name="phone" ref={register()} required/>
                        <label>{isEnglish ? 'Telephone number' : 'Número de teléfono'}</label>
                    </div>
                    <div className="input-field-ta transition-3">
                        <textarea rows="3" type="text" name="message" ref={register()} required/>
                        <label>{isEnglish ? 'Type a menssage' : 'Escribe un mensaje'}</label>
                    </div>                                        
                    <button className="transition-3">{isEnglish ? 'Submit' : 'Enviar'}</button>
                </form>
            </div>
            <div className="col-6 info transition-4">
                <h2>{isEnglish ? 'Contact Me' : 'Contáctame'}</h2>
                <div>
                    <i className="fas fa-envelope"></i>
                </div>
                <h3 className="subtitle-2">{isEnglish ? 'Mail Me' : 'Escríbeme'}</h3>
                <p>andres.david.mm@hotmail.com</p>

                <div>
                    <i className="fas fa-phone"></i>
                </div>
                <h3 className="subtitle-2">{isEnglish ? 'Call Me' : 'Llámame'}</h3>
                <p>+57 315 785 0061</p>
            </div>
        </section>
    )
}
export default ContactMe;