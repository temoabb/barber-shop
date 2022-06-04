import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router";

import logo from "./utils/images/barber-logo.png";

function App() {
  return (
    <Router>
      <header>Header</header>
      <main>
        <h1>
          <img style={{ width: 100, height:  }} src={logo} alt="" />
        </h1>
        {/* <div className="App">
          <i style={{ color: "yellow" }} className="fa-solid fa-star"></i>
          <i
            style={{ color: "yellow" }}
            className="fa-solid fa-star-half-stroke"
          ></i>
          <i style={{ color: "#EDF5FC" }} className="fa-solid fa-star"></i>
          barber-shop
        </div> */}

        <AppRouter />
      </main>
      <footer>Footer</footer>
    </Router>
  );
}

export default App;
