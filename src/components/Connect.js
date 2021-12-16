import { useState } from 'react';

function Connect() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const updateEmail = (ev) => {
        setEmail(ev.target.value);
    }

    const updateMess = (ev) => {
        setMessage(ev.target.value);
    }

    return (
        <section id="connect" className=" my-10">
                <div className="border-2 border-gray-700 bg-gray-700 flex justify-between items-stretch">
                    <h2 className="section-decoration pl-4 py-2 pr-14 text-4xl bg-gray-900">Connect</h2>
                </div>
                <h3 className="text-3xl my-10">Social</h3>
                <div className="flex text-4xl justify-around mt-8 flex-wrap gap-10">
                    <a href="https://github.com/mdbow22" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> Github</a>
                    <a href="https://www.linkedin.com/in/matthew-bow-5525895a/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a> 
                    <a href="mailto:mdbow22@gmail.com"><i className="far fa-envelope"></i> Email</a>
                </div>
                <h3 className="text-3xl my-10">Send me a message</h3>
                <form>
                    <div>
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="jdoe@email.com" value={email} onChange={updateEmail}></input>
                    </div>
                    <div>
                        <label for="message">Your Message</label>
                        <textarea name="message" id="message" placeholder="What do you want to say?" value={message} onChange={updateMess}></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </section>
    )
}

export default Connect;