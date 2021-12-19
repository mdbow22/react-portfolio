import SingleProject from "./singleProject";

function Projects() {

    const projectList = [
        {
            name: 'I Choose Who?',
            skills: ['Node','Express','Sequelize','Bulma'],
            demo: 'https://blooming-basin-23447.herokuapp.com/',
            repo: 'https://github.com/mdbow22/I-Choose-Who',
            image: './assets/iChooseWhoScrnShot-32.png'
        },
        {
            name: 'National Parks Explorer',
            skills: ['HTML5','Materialize','NPS API','Vanilla JS'],
            demo: 'https://mdbow22.github.io/Project-One/',
            repo: 'https://mdbow22.github.io/NPS-Activity-Planner/',
            image: './assets/npsExplorerSrnshot-32.png'
        },
        {
            name: 'Tech Blog',
            skills: ['Node','Express','Sequelize','Bootstrap'],
            demo: 'https://blooming-sea-91213.herokuapp.com/',
            repo: 'https://github.com/mdbow22/tech_blog',
            image: './assets/techBlogScrnShot-32.png'
        },
        {
            name: 'WeatherBoard',
            skills: ['HTML5','CSS3','Vanilla JS','OpenWeather API'],
            demo: 'https://mdbow22.github.io/weatherBoard/',
            repo: 'https://github.com/mdbow22/weatherBoard',
            image: './assets/weatherBoardScrnShot-32.png'
        }
    ];

    return (
        <section id="projects" className="my-10 ">
                <div className="bg-gray-700 border-2 border-gray-700 flex justify-between items-stretch">
                    <h2 className="section-decoration pl-4 py-2 pr-14 text-4xl bg-gray-900">Projects</h2>
                </div>
                <div id="proj-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                    {projectList.map((project) => {
                        return (
                            <SingleProject project={project} key={project.name} />
                        )
                    })}
                </div>
        </section>
    )
}

export default Projects;