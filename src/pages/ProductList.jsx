import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Small, Mobile } from "../responsive";

const Container = styled.div`
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
`;
const Title = styled.h2`
  font-size: 32px;
  padding: 20px 10px;
`;
const FilterContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  ${Mobile({ flexDirection: "column", gap: "15px" })}
`;
const Filter = styled.div`
  ${Small({ display: "flex", flexDirection: "column", gap: "15px" })}
`;
const FilterText = styled.label`
  font-size: 20px;
  font-weight: 600;
`;
const Select = styled.select`
  padding: 5px;
  margin-left: 20px;
  ${Mobile({ marginLeft: "0" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Container>
        <Title>Products</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select defaultValue={"default"}>
              <Option disabled value="default">
                Color
              </Option>
              <Option value="white">White</Option>
              <Option value="black">Black</Option>
              <Option value="red">Red</Option>
              <Option value="blue">Blue</Option>
              <Option value="yellow">Yellow</Option>
              <Option value="green">Green</Option>
            </Select>
            <Select defaultValue={"default"}>
              <Option disabled value="default">
                Size
              </Option>
              <Option value="xs">XS</Option>
              <Option value="s">S</Option>
              <Option value="m">M</Option>
              <Option value="l">L</Option>
              <Option value="xl">XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select defaultValue={"default"}>
              <Option value="default">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </Container>
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductList;
