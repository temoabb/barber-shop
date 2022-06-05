import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { StyledContainer } from "./components/styles/Container.styled";

import AppRouter from "./router";
import Header from "./components/Header";

import GlobalStyles from "./components/styles/Global";

// Rating: 4.9 · ‎1,991 votes

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "576px",
};

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <StyledContainer>
          <AppRouter />
        </StyledContainer>
        <footer>Footer</footer>
      </ThemeProvider>
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
