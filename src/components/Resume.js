

function Resume() {
    return (
        <section id="resume" className="my-10 ">
            <div className="bg-gray-700 border-2 border-gray-700 flex justify-between items-stretch">
                <h2 className="section-decoration pl-4 py-2 pr-14 text-4xl bg-gray-900">Resume</h2>
            </div>
            <div className="mx-6 mt-10">
                <h3 className="text-3xl">Front-end Skills</h3>
                <ul className="flex gap-10 flex-wrap justify-start align-middle text-xl my-10">
                    <li className="border-2 border-blue-50 p-2">HTML5</li>
                    <li className="border-2 border-blue-50 p-2">CSS3</li>
                    <li className="border-2 border-blue-50 p-2">Fetch API</li>
                    <li className="border-2 border-blue-50 p-2">Tailwind</li>
                    <li className="border-2 border-blue-50 p-2">Bootstrap</li>
                    <li className="border-2 border-blue-50 p-2">React</li>
                    <li className="border-2 border-blue-50 p-2">GraphQL/Apollo-Client</li>
                </ul>

                <h3 className="text-3xl">Back-end Skills</h3>
                <ul className="flex gap-10 flex-wrap justify-start align-middle text-xl my-10">
                    <li className="border-2 border-blue-50 p-2">Node</li>
                    <li className="border-2 border-blue-50 p-2">Express</li>
                    <li className="border-2 border-blue-50 p-2">MySQL</li>
                    <li className="border-2 border-blue-50 p-2">MongoDB</li>
                    <li className="border-2 border-blue-50 p-2">Jest</li>
                    <li className="border-2 border-blue-50 p-2">GraphQL/Apollo-Server</li>
                    <li className="border-2 border-blue-50 p-2">Webpack</li>
                </ul>
            </div>
            <div className="mx-6 text-3xl">
                <a className="card-link border-2 border-cyan-200 p-2 mb-2 inline-block" href="./assets/resume.pdf" target="_blank">Résumé</a>
            </div>
        </section>
    )
}

export default Resume;