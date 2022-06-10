import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 40px 0;
  /* border: 1px solid green; */
  background-color: ${({ theme }) => theme.colors.header};
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 40px; */

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & small {
    margin-right: 10px;
    color: #009200;
    font-weight: bold;
  }

  @media (max-width: 632px) {
    flex-direction: column;
    & > div {
      flex-direction: column;
      margin-top: 10px;
    }

    & small {
      margin-bottom: 20px;
    }
  }
`;

export const StyledLogo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px;
  }
`;

export const StyledImage = styled.img`
  width: 375px;
  margin-left: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px;
  }
`;
