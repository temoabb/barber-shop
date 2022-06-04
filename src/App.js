import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { StyledContainer } from "./components/styles/Container.styled";

import AppRouter from "./router";
import Header from "./components/Header";

// Rating: 4.9 · ‎1,991 votes

function App() {
  return (
    <Router>
      <Header />
      <StyledContainer>
        <AppRouter />
      </StyledContainer>
      <footer>Footer</footer>
    </Router>
  );
}

export default App;

//  {/* <div className="App">
//         <i style={{ color: "yellow" }} className="fa-solid fa-star"></i>
//         <i
//           style={{ color: "yellow" }}
//           className="fa-solid fa-star-half-stroke"
//         ></i>
//         <i style={{ color: "#EDF5FC" }} className="fa-solid fa-star"></i>
//         barber-shop
//       </div> */}
