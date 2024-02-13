"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  return (
    <>
      <div className="Sidebar">
        <MenuItem to="/" label="Home" />
        <MenuItem to="/profile-cards" label="profile-cards" />
        <MenuItem to="/pagination" label="pagination" />
        <MenuItem
          to="/wave-function-collapse"
          label="WFC"
          tooltip="Wave Function Collapse"
        />
        <MenuItem to="/sorting-algorithms" label="Sorting algorithms" />
      </div>
    </>
  );
}

interface MenuItemProps {
  to: string;
  label: string;
  tooltip?: string;
}

function MenuItem({ to, label, tooltip }: MenuItemProps) {
  const capitalizedLabel =
    label[0].toUpperCase() + label.substring(1).replace(/-/g, " ");

  const pathname = usePathname();
  const isActive = pathname === to;

  return (
    <Link
      href={to}
      className={`menu-item ${isActive && "active"}`}
      title={tooltip || label}
    >
      {capitalizedLabel}
    </Link>
  );
}
