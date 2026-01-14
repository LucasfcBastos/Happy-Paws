import { NavLink } from "react-router-dom";
import HomeIcon from "../../assets/icon/icon_opc_1.svg?react";
import logotype from "../../assets/img/Logotype.png";

import "../../styles/Pages/Sidebar.css";
import "../../styles/Logotype.css";

function Sidebar({ select }) {
  const menu = [
    { id: 1, text: "Home", url: "/home/dashboard", icon: HomeIcon },
    { id: 2, text: "Tutor", url: "/home/tutor", icon: HomeIcon },
    { id: 3, text: "Pet", url: "/home/pets", icon: HomeIcon },
    { id: 4, text: "Serviços", url: "/home/servicos", icon: HomeIcon },
    { id: 5, text: "Profissional", url: "/home/profissional", icon: HomeIcon },
    { id: 6, text: "Atendimento", url: "/home/atendimento", icon: HomeIcon },
  ];

  return (
    <div className="sidebar">
      <div className="logotype">
        <img src={logotype} alt="Logo" />
        <h1>HAPPY PAWS</h1>
      </div>

      <aside>
        <nav>
          {menu.map(({ id, text, url, icon: Icon }) => (
            <NavLink key={id} to={url} className="link">
              <button className={select === text ? "select" : "noneSelect"}>
                <Icon className="icon" />
                <p>{text}</p>
              </button>
            </NavLink>
          ))}
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;