import {
  NavWrapper,
  NavContent,
  Logo,
  NavLinks,
  StyledNavLink,
} from './Navbar.styles';

export const Navbar = () => {
  return (
    <NavWrapper>
      <NavContent>
        <Logo>
          <StyledNavLink to="/" end>
            Santander
          </StyledNavLink>
        </Logo>

        <NavLinks>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>

          <StyledNavLink to="/contact">
            Contacto
          </StyledNavLink>
        </NavLinks>
      </NavContent>
    </NavWrapper>
  );
};
