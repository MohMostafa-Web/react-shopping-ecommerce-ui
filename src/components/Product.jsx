import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

const Info = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  opacity: 0;
  z-index: 3;
  transition: opacity 0.5s ease;
`;
const Container = styled.div`
  width: 250px;
  height: 350px;
  background-color: #f5fbfd;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 75%;
  object-fit: contain;
  z-index: 2;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  display: grid;
  place-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ img }) => {
  return (
    <Container>
      <Circle />
      <Image src={img} alt="img" />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
