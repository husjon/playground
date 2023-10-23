import "./App.scss";

import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}
