// src/pages/product/ProductDetail.styles.ts

import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacings.l};
`;

export const Card = styled.article`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacings.l};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: ${({ theme }) => theme.spacings.m};
`;

export const CategoryTag = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.3rem 0.7rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 0.9rem;
  margin-bottom: ${({ theme }) => theme.spacings.s};
`;

export const Title = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacings.m};
`;

export const ShortDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1rem;
  margin-bottom: ${({ theme }) => theme.spacings.m};
`;

export const LongDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacings.xl};
`;

export const BackButton = styled(Link)`
  display: inline-block;
  padding: 0.7rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`;
