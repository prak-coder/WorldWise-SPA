import styles from "./AppNav.module.css";
import Sidebar from "./Sidebar";
import Map from "./Map";
import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to={"cities"}>Cities</NavLink>
        </li>
        <NavLink to={"countries"}>Countries</NavLink>
        <li></li>
      </ul>
    </nav>
  );
}

export default AppNav;
