import { NavLink } from "react-router-dom";
import HomeIcon from "../../assets/icon/icon_opc_1.svg?react";
import logotype from "../../assets/img/Logotype.png";

import "../../styles/Pages/Sidebar.css";
import "../../styles/Logotype.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logotype">
                <img src={logotype} />
                <h1>HAPPY PAWS</h1>
            </div>
            <aside>
                <nav>
                    <NavLink to="/home/dashboard" className="link">
                        <button>
                            <HomeIcon className="icon" />
                            <p>Home</p>
                        </button>
                    </NavLink>
                    <NavLink to="/home/dashboard" className="link">
                        <button>
                            <HomeIcon className="icon" />
                            <p>Home</p>
                        </button>
                    </NavLink>
                    <NavLink to="/home/dashboard" className="link">
                        <button>
                            <HomeIcon className="icon" />
                            <p>Home</p>
                        </button>
                    </NavLink>
                    <NavLink to="/home/dashboard" className="link">
                        <button>
                            <HomeIcon className="icon" />
                            <p>Home</p>
                        </button>
                    </NavLink>
                    <NavLink to="/home/dashboard" className="link">
                        <button>
                            <HomeIcon className="icon" />
                            <p>Home</p>
                        </button>
                    </NavLink>
                    <NavLink to="/home/dashboard" className="link">
                        <button>
                            <HomeIcon className="icon" />
                            <p>Home</p>
                        </button>
                    </NavLink>
                </nav>
            </aside>
        </div>
    );
}

export default Sidebar 