import { useParams } from "react-router-dom";
import { products } from "../data/products";

import {
  Wrapper,
  Card,
  ProductImage,
  Title,
  ShortDescription,
  LongDescription,
  CategoryTag,
  BackButton,
} from "../styles/pages/ProductDetail.styles";

export const ProductDetail = () => {
  const { id } = useParams();

  // Buscar producto por id
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <Wrapper><h2>Producto no encontrado</h2></Wrapper>;
  }

  return (
    <Wrapper>
      <Card>
        <ProductImage src={product.imgUrl} alt={product.title} />

        <CategoryTag>{product.category}</CategoryTag>

        <Title>{product.title}</Title>

        <ShortDescription>{product.shortDescription}</ShortDescription>

        <LongDescription>{product.longDescription}</LongDescription>

        <BackButton to="/">← Volver al Home</BackButton>
      </Card>
    </Wrapper>
  );
};
