import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px 15px;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => {
        return <Product key={item.id} {...item} />;
      })}
    </Container>
  );
};

export default Products;
