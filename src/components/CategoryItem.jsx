import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ExtraSmall, Small, Medium } from "../responsive";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  position: relative;
  ${ExtraSmall({ flex: "none", height: "20vh", marginBottom: "12px" })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 20px;
`;
const Title = styled.h2`
  color: white;
  font-size: 32px;
  ${Medium({ fontSize: "25px" })}
  ${Small({ fontSize: "18px" })}
  ${ExtraSmall({ fontSize: "25px" })}
`;
const Button = styled.button`
  color: grey;
  padding: 10px;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`;

const CategoryItem = ({ img, title }) => {
  const naviagte = useNavigate();

  return (
    <Container>
      <Image src={img} alt="img" />
      <Info>
        <Title>{title}</Title>
        <Button onClick={() => naviagte("/products")}>shop now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
