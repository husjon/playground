import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <>
      <div className="Sidebar">
        <MenuItem to="/" label="Home" />
        <MenuItem to="/profile-cards" label="profile-cards" />
      </div>
    </>
  );
}

function MenuItem({ to, label, children }) {
  return (
    <NavLink className="menu-item" to={to}>
      {label}
    </NavLink>
  );
}
