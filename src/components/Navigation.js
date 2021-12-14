
function Navigation() {
    return (
        <nav className="relative flex flex-col sm:flex-row sm:justify-between mt-4 bg-gray-700 text-xl">
                <div className="sm:hidden px-6 font-semibold py-3 flex justify-between">
                    <h3></h3>
                    <button id="nav-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                </div>
                <div id="menu-list" className="hidden sm:block bg-gray-700 absolute top-16 w-full sm:relative sm:w-auto sm:top-0">
                    <ul id="menu-items" className="w-full sm:w-auto h-full flex sm:relative sm:top-0 flex-col sm:flex-row items-stretch justify-center font-semibold">
                        <li className="menu-list-item card-link"><a class="inline-block h-full w-full" href="#">Home</a></li>
                        <li className="menu-list-item card-link"><a class="inline-block h-full w-full" href="#about">About</a></li>
                        <li className="menu-list-item card-link"><a class="inline-block h-full w-full"  href="#projects">Projects</a></li>
                        <li className="menu-list-item card-link"><a class="inline-block h-full w-full"  href="#connect">Connect</a></li>
                    </ul>
                </div>
                
                <ul className="px-6 hidden sm:flex justify-between items-center gap-4">
                    <li><a href="https://github.com/mdbow22" target="_blank"><i className="fab fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/matthew-bow-5525895a/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="mailto:mdbow22@gmail.com"><i className="far fa-envelope"></i></a></li>
                </ul>
            </nav>
    )
}

export default Navigation;