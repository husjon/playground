import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <>
      <div className="Sidebar">
        <MenuItem to="/" label="Home" />
      </div>
    </>
  );
}

interface MenuItemProps {
  to: string;
  label: string;
}

function MenuItem({ to, label }: MenuItemProps) {
  return (
    <NavLink className="menu-item" to={to}>
      {label}
    </NavLink>
  );
}
