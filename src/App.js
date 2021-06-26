import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle";

// Components imports
// import Navbar from "./Components/Navbar"
import Header from "./Components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Linegraph from "./Components/Linegraph";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      <About />
      <Services />
      <Linegraph />
      <Footer />
    </div>
  );
}

export default App;
