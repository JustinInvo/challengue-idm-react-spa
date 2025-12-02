import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.12);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: ${({ theme }) => theme.spacings.m};
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacings.s};
`;

export const Description = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacings.m};
`;

export const CTAButton = styled(Link)`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: ${({ theme }) => theme.colors.secondaryOrange};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 500;
  text-align: center;

  &:hover {
    opacity: 0.9;
  }
`;
