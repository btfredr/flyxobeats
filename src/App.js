import "./App.css";
import Nav from "./components/Nav";
import Discography from "./components/Discography";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Discography />
      <About />
      <Contact />
    </div>
  );
}

export default App;
