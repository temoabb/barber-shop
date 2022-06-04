import { StyledContainer } from "./styles/Container.styled";
import { StyledHeader, StyledNav } from "./styles/Header.styled";

import { StyledButton } from "./styles/Button.styled";

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledNav>
          <h1>BarberShop</h1>
          <div>
            <StyledButton>Log In</StyledButton>
          </div>
        </StyledNav>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
