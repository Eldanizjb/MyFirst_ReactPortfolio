import React, { useContext, useState } from 'react'
import './contact.css'
import phone from '../../img/phone.jpg'
import email from '../../img/email.png'
import address from '../../img/address.png'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context'

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_hob57so',
            'template_jf5ni19',
            formRef.current,
            '4MnXwKU9GeBw5qU3i')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="ct">
            <div className="ct-bg"></div>
            <div className="ct-wrapper">
                <div className="ct-left">
                    <h1 className="ct-title">Lorem ipsum dolor sit amet.</h1>
                    <div className="ct-info">
                        <div className="ct-info-item">
                            <img src={phone} alt="" className="ct-icon" />+994558506179
                        </div>
                        <div className="ct-info-item">
                            <img src={email} alt="" className="ct-icon" />eldaniz.jb@code.edu.az
                        </div>
                        <div className="ct-info-item">
                            <img src={address} alt="" className="ct-icon" />Baku, Khatai st, 16
                        </div>
                    </div>
                </div>
                <div className="ct-right">
                    <div className="ct-desc"><b>Lorem, ipsum dolor?</b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam voluptatum incidunt autem
                        necessitatibus natus corporis voluptates dolor quae repudiandae unde, error ullam labore laudantium enim.</div>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name='user_name' />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name='user_email' />
                        <textarea style={{backgroundColor: darkMode && "#333"}} name="message" id="" cols="67" rows="20" placeholder='Message'></textarea>
                        <button>Submit</button>
                        {done && "Thank you for message"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact