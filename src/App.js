import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { StyledContainer } from "./components/styles/Container.styled";

import AppRouter from "./router";
import Header from "./components/Header";

import GlobalStyles from "./components/styles/Global";

import ContextProvider from "./store/Context";

// Rating: 4.9 · ‎1,991 votes

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "576px",
};

// "#ff0099"

function App() {
  return (
    <Router>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <StyledContainer>
            <AppRouter />
          </StyledContainer>
          <footer>Footer</footer>
        </ThemeProvider>
      </ContextProvider>
    </Router>
  );
}

export default App;
