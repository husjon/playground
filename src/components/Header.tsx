import { Link } from "react-router-dom";

export function Header() {
  return (
    <h1 className="Header">
      <Link to={"/"}>husjon's Playground</Link>
    </h1>
  );
}
