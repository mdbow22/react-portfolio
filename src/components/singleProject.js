
function SingleProject({ project }) {
    return (
        <article className="card mt-4 pt-2 bg-gray-700 flex flex-col items-stretch">
                        <div className="card-head">
                            <h3 className="text-2xl text-center">{project.name}</h3>
                        </div>
                        <div className="card-body px-6 pb-2 mb-2">
                            <div className="card-image py-4">
                                <img className="w-11/12 block mx-auto md:w-full md:mx-0" src={project.image} alt="screenshot of App" />
                            </div>
                            <div className="card-content">
                                <ul className="flex flex-wrap gap-4 justify-between text-xl">
                                    {project.skills.map(skill => <li>{skill}</li>)}
                                </ul>
                            </div>
                        </div>
                        <div className="card-footer grid grid-cols-2 mt-auto border-t-2 border-gray-500">
                            <a className="card-link py-2 text-center text-2xl border-r-2 border-gray-500" href={project.demo} target="_blank">Demo</a>
                            <a className="card-link py-2 text-center text-2xl" href={project.repo} target="_blank">Repo</a>
                        </div>
                    </article>
    )
}

export default SingleProject;