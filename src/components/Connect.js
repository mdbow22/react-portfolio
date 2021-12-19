import { useState, useEffect } from 'react';

function Connect() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [missing, setMissing] = useState(true);
    const [goodEmail, setGoodEmail] = useState(true);

    const updateEmail = (ev) => {
        setEmail(ev.target.value);
        if(!email.split('').includes('@') || !email.split('').includes('.')) {
            setGoodEmail(false);
        } else {
            setGoodEmail(true);
        }
    }

    const updateMess = (ev) => {
        setMessage(ev.target.value);
        if(message != '') {
            setMissing(true);
        } else {
            setMissing(false);
        }
    }

    const updateMissing = () => {
        if(message === '') {
            setMissing(false);
        } else {
            setMissing(true);
        }
    }

    useEffect(() => {
        setMissing(true);
        setGoodEmail(true);
    }, [])

    

    return (
        <section id="connect" className=" my-10">
                <div className="border-2 border-gray-700 bg-gray-700 flex justify-between items-stretch">
                    <h2 className="section-decoration pl-4 py-2 pr-14 text-4xl bg-gray-900">Connect</h2>
                </div>
                <h3 className="text-3xl my-10 mx-6">Social</h3>
                <div className="flex text-4xl justify-around mt-8 flex-wrap gap-10">
                    <a href="https://github.com/mdbow22" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> Github</a>
                    <a href="https://www.linkedin.com/in/matthew-bow-5525895a/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a> 
                    <a href="mailto:mdbow22@gmail.com"><i className="far fa-envelope"></i> Email</a>
                </div>
                <h3 className="text-3xl mb-6 mx-6 mt-16">Send me a message</h3>
                <form className="mx-6">
                    <div className="flex flex-col md:w-1/2 mt-6 gap-3 text-2xl">
                        <label for="email">Email</label>
                        <input className={(!goodEmail) ? "p-2 text-gray-700 border-red-400 border-2" : "p-2 text-gray-700"} type="email" id="email" placeholder="jdoe@email.com" value={email} onChange={updateEmail}></input>
                        <p className={!goodEmail ? "text-lg text-red-500" : "hidden"}>Invalid Email</p>
                    </div>
                    <div className="flex flex-col mt-6 gap-3 text-2xl">
                        <label for="message">Your Message</label>
                        <textarea className="p-2 text-gray-700" name="message" id="message" placeholder="What do you want to say?" value={message} onBlur={updateMissing} onChange={updateMess}></textarea>
                        <p className={(missing) ? 'hidden' : 'block text-lg text-red-500'}>Message cannot be blank</p>
                    </div>
                    <button className="mt-6 border-2 p-2 card-link text-2xl" type="submit">Send</button>
                </form>
            </section>
    )
}

export default Connect;