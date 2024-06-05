import { NavLink } from "react-router-dom";
import "./mainNav.css";
function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" className="abc" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/bookshelf" activeClassName="active" exact>
              Bookshelf
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
