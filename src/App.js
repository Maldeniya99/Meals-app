import logo from "./logo.svg";
import "./App.css";
import "./Body.css";
import "./Footer.css";
import Navbar from "./componenets/Navbar";
import Body from "./componenets/Body";
import Footer from "./componenets/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Body />

      <Footer />
    </div>
  );
}

export default App;
