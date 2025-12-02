// src/pages/home/Home.styles.ts
import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: ${({ theme }) => theme.spacings.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacings.m};
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacings.xl};
`;

export const ProductsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacings.l};
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;
