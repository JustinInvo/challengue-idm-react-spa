import { products } from '../data/products';
import { HomeContainer, Title, Subtitle, ProductsGrid } from '../styles/pages/Home.styles';
import { ProductCard } from '../components/productCard/ProductCard';

export const Home = () => {
  return (
    <>
      <HomeContainer>
        <Title>Productos Bancarios</Title>
        <Subtitle>
          Explora nuestros productos y encuentra la opción ideal para ti.
        </Subtitle>

        <ProductsGrid>
          {products.map(prod => (
            <ProductCard
              key={prod.id}
              id={prod.id}
              title={prod.title}
              imgUrl={prod.imgUrl}
              shortDescription={prod.shortDescription}
              ctaText={prod.ctaText}
            />
          ))}
        </ProductsGrid>
      </HomeContainer>
    </>
  );
};
