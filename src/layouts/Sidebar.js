import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Página Incial",
    href: "/home",
    icon: "bi bi-house",
  },
  {
    title: "Documentação",
    href: "/documentacao",
    icon: "bi bi-file-earmark-text",
  },
  {
    title: "API Downloads",
    href: "/api",
    icon: "bi bi-box-seam",
  },
  {
    title: "Demo",
    href: "/demo",
    icon: "bi bi-window-stack",
  },
  {
    title: "Release Notes",
    href: "/release",
    icon: "bi bi-pencil-square",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center" style={{marginTop: 50}}>
        
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}          
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
