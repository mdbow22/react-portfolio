import React, {useState} from "react";

function Navigation({ updatePage }) {

    const [menu, setMenu] = useState(false);

    const menuToggle = () => {
        setMenu(!menu);
    }

    const linkClick = (page) => {
        updatePage(page);
        setMenu(false);
    }

    return (
        <nav className="uppercase relative z-50 flex flex-col sm:flex-row sm:justify-between mt-4 bg-gray-700 text-xl">
                <div className="sm:hidden px-6 font-semibold py-3 flex justify-between">
                    
                    <button id="nav-toggle" onClick={menuToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                </div>
                <div id="menu-list" className={menu ? "sm:block bg-gray-700 absolute top-16 w-full sm:relative sm:w-auto sm:top-0" : "hidden sm:block bg-gray-700 absolute top-16 w-full sm:relative sm:w-auto sm:top-0"}>
                    <ul id="menu-items" className="w-full sm:w-auto h-full flex sm:relative sm:top-0 flex-col sm:flex-row items-stretch justify-center font-semibold">
                        <li className="menu-list-item card-link"><a className="inline-block h-full w-full" href="#home" onClick={() => linkClick('landing')}>Home</a></li>
                        <li className="menu-list-item card-link"><a className="inline-block h-full w-full" href="#about" onClick={() => linkClick('about')}>About</a></li>
                        <li className="menu-list-item card-link"><a className="inline-block h-full w-full"  href="#projects" onClick={() => linkClick('projects')}>Projects</a></li>
                        <li className="menu-list-item card-link"><a className="inline-block h-full w-full"  href="#connect" onClick={() => linkClick('connect')}>Connect</a></li>
                        <li className="menu-list-item card-link"><a className="inline-block h-full w-full"  href="#resume" onClick={() => linkClick('resume')}>Resume</a></li>
                    </ul>
                </div>
                
                <ul className="px-6 hidden sm:flex justify-between items-center gap-4">
                    <li><a href="https://github.com/mdbow22" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/matthew-bow-5525895a/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="mailto:mdbow22@gmail.com"><i className="far fa-envelope" rel="noreferrer"></i></a></li>
                </ul>
            </nav>
    )
}

export default Navigation;