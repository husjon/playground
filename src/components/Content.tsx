import { Outlet } from "react-router-dom";

export function Content() {
  return (
    <div className="Content">
      <Outlet />
    </div>
  );
}
