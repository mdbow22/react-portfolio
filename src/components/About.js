
function About() {
    return (
        <section id="about" className=" my-10">
                <div className="relative border-2 bg-gray-700 border-gray-700 flex justify-between items-stretch">
                    <h2 className="relative section-decoration pl-6 py-2 pr-14 text-4xl bg-gray-900">About</h2>
                </div>
                <div className="mt-2 md:grid md:grid-cols-2 md:gap-4 flex flex-col">
                    <div className="px-6 py-4 mt-4 md:mb-4 bg-gray-700 text-xl flex flex-col justify-center">
                        <p className="leading-8 mb-6">
                            From linguist to financial strategist to full-stack developer, I have always been passionate about syntheizing data and working with the latest tech. Let's work together and create something meaningful.
                        </p>
                        <div>
                            <a className="card-link border-2 border-blue-50 p-2 mb-2 inline-block" href="./assets/resume.pdf" target="_blank">Résumé</a>
                        </div>
                        
                    </div>
                    <div className="my-4 py-4 text-xl flex flex-col justify-center">
                        <h3 className="md:hidden mb-6 pl-6 text-2xl font-semibold">Skills</h3>
                        <ul className="flex gap-10 flex-wrap justify-around px-6 align-middle">
                            <li className="border-2 border-blue-50 p-2">HTML5</li>
                            <li className="border-2 border-blue-50 p-2">CSS3</li>
                            <li className="border-2 border-blue-50 p-2">JavaScript</li>
                            <li className="border-2 border-blue-50 p-2">Node</li>
                            <li className="border-2 border-blue-50 p-2">Express</li>
                            <li className="border-2 border-blue-50 p-2">MySQL</li>
                            <li className="border-2 border-blue-50 p-2">MongoDB</li>
                            <li className="border-2 border-blue-50 p-2">React</li>
                            <li className="border-2 border-blue-50 p-2">Tailwind</li>
                        </ul>
                    </div>
                </div>
            </section>
    )
}

export default About;