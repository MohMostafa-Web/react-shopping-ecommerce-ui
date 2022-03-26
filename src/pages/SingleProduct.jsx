import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { Mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${Mobile({ flexDirection: "column", padding: "10px" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Img = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${Mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${Mobile({ padding: "10px" })}
`;
const Title = styled.h2`
  font-weight: 200;
  font-size: 2rem;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  ${Mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.h3`
  margin-right: 10px;
  font-weight: 300;
  font-size: 20px;
`;
const FilterColor = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  margin-right: 5px;
  border: 2px solid #fff;
  outline: 1px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: outline-color 0.2s ease-in-out;
  &:hover,
  &.active {
    outline: 1px solid #000;
  }
`;
const FilterSize = styled.select`
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  ${Mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  & > svg {
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid teal;
  border-radius: 10px;
  margin: 0 5px;
`;
const Button = styled.button`
  background-color: white;
  padding: 15px;
  text-transform: uppercase;
  font-weight: 500;
  border: 2px solid teal;
  cursor: pointer;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const SingleProduct = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Img src="https://i.ibb.co/S6qMxwr/jeans.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis
            harum officia, quas eveniet laboriosam, error velit, vitae corporis
            aperiam iusto saepe a doloribus. Pariatur eum nihil, accusamus
            perferendis nam ullam voluptatem inventore. Quae modi, consequuntur
            in tenetur nam dignissimos?
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor className="active" color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove fontSize="small" />
              <Amount>1</Amount>
              <Add fontSize="small" />
            </AmountContainer>
            <Button>add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
