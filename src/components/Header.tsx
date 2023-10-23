import { Link } from "react-router-dom";

export function Header() {
  return (
    <h1 className="Header">
      <Link to={"/"}>Jon Erlings's Playground</Link>
    </h1>
  );
}
