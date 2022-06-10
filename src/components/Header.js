import { StyledContainer } from "./styles/Container.styled";
import { StyledHeader, StyledNav } from "./styles/Header.styled";

import { StyledButton } from "./styles/Button.styled";

import { useNavigate, Link } from "react-router-dom";

import useContextValues from "../hooks/useContextValues";

const Header = () => {
  const navigate = useNavigate();

  const { loggedIn, email, logOut } = useContextValues();

  const authenticateClient = () => {
    if (loggedIn) {
      logOut();
    } else {
      navigate("/login");
    }
  };

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledNav>
          <div>
            <h1>
              <Link to="/">BarberShop</Link>
            </h1>
            {loggedIn && <Link to="/my-bookings">My bookings</Link>}
          </div>
          <div>
            {email && <small>{email}</small>}
            <StyledButton onClick={authenticateClient}>
              {loggedIn ? "Log Out" : "Log In"}
            </StyledButton>
          </div>
        </StyledNav>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
