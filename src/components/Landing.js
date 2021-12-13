
function Landing() {
    return (
        <div id="hero" className="flex flex-col-reverse md:flex-row md:justify-between align-middle my-14 bg-gray-700 max-w-screen-lg">
                <div id="hero-content" className="flex flex-col justify-center text-3xl py-10 px-6">
                    <h2>I'm</h2>
                    <h1 className="text-blue-200 font-bold text-5xl tracking-wider">Matt Bow</h1>
                    <h2>A Full-Stack Developer</h2>
                </div>
                <div id="hero-image" className="md:w-3/4">
                    <img className="inset-0 h-72 w-full md:w-full md:h-full object-cover" src="./assets/img/profileImage.jpg" />
                </div>
            </div>
    )
}

export default Landing;