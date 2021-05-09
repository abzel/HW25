import "./App.css";
import { Carts } from "./components/Carts";
import { Footer } from "./components/Footer";
import Footer_Carts from "./components/Footer-Carts";
import Header from "./components/Header";
import ellipse40 from "./components/images/Ellipse 40.png";
import free from "./components/images/free.jpg";
import figmaLogo from "./components/images/Figmalogo.png";
import ellipse42 from "./components/images/Ellipse 42.png";
import ellipse44 from "./components/images/Ellipse 44.png";
import ellipse41 from "./components/images/Ellipse 41.png";
import ellipse45 from "./components/images/Ellipse 45.png";

function App() {
  return (
    <div className="App">
      <img src={ellipse40} className="ellipse40"/>
      <img src={ellipse42} className="ellipse42"/>
      <img src={ellipse44} className="ellipse44"/>
      <img src={ellipse45} className="ellipse45"/>
      <img src={figmaLogo} className="figmaLogo"/>
      <h1 className="textFree">Free files</h1>
      <div className="mainBody">
      <img src={free}  className="backBody"/>
      </div>
        <Footer />
        <Header />
        <Carts />
        <Footer_Carts />
        <img src={ellipse41} className="ellipse41"/>
    </div>
  );
}

export default App;
