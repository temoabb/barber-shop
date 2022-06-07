import { StyledContainer } from "./styles/Container.styled";
import { StyledHeader, StyledNav } from "./styles/Header.styled";

import { StyledButton } from "./styles/Button.styled";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const toBarbers = () => navigate("/login");

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledNav>
          <h1>BarberShop</h1>
          <div>
            <StyledButton onClick={toBarbers}>Log In</StyledButton>
          </div>
        </StyledNav>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
