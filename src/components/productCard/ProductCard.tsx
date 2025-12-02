import React from 'react';
import { Card, Image, Content, Title, Description, CTAButton } from './ProductCard.styles';

interface ProductCardProps {
  id: string;
  imgUrl: string;
  title: string;
  shortDescription: string;
  ctaText: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id, imgUrl, title, shortDescription, ctaText
}) => {
  return (
    <Card>
      <Image src={imgUrl} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{shortDescription}</Description>
        <CTAButton to={`/product/${id}`}>{ctaText}</CTAButton>
      </Content>
    </Card>
  );
};
