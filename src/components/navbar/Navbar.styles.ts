import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { darken } from 'polished';

export const NavWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacings.s} 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: ${({ theme }) => theme.spacings.l};
  width: 100vw;
`;

export const NavContent = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacings.m};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 1px;

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.l};
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  padding: ${({ theme }) => theme.spacings.s} 0;
  transition: color 0.3s ease-in-out;

  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:hover:not(.active) {
    color: ${darken(0.1, '#ffffff')};
  }
`;
