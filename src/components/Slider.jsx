import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { sliderItems } from "../data";
import { Small, Medium } from "../responsive";

const Container = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${Small({ display: "none" })}
`;
const Arrow = styled.div`
  width: 40px;
  height: 40px;
  line-height: 40px;
  background-color: #ddd;
  border-radius: 50%;
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.5;
  z-index: 2;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  & > svg {
    height: 100%;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
  display: flex;
  align-items: center;
  transition: all 1.3s ease-in-out;
  transform: translateX(-${(props) => props.slideIndex * 100}%);
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  ${Medium({ flex: "2" })}
`;
const Img = styled.img`
  max-width: 100%;
  object-fit: contain;
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  text-transform: uppercase;
`;
const Title = styled.h2`
  font-size: 70px;
  ${Medium({ fontSize: "42px" })}
`;
const Desc = styled.p`
  max-width: 600px;
  line-height: 1.6;
  margin: 50px 0;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 3px;
  ${Medium({ fontSize: "16px" })}
`;
const Button = styled.button`
  background-color: transparent;
  padding: 10px;
  font-size: 20px;
  text-transform: inherit;
  border: 2px solid #ccc;
  transition: all 0.3s linear;
  cursor: pointer;
  ${Medium({ fontSize: "16px" })}
  &:hover {
    border-color: #333;
  }
`;

const Slider = () => {
  const [index, setIndex] = useState(0);

  const naviagte = useNavigate();

  const handleClick = (dir) => {
    if (dir === "left") {
      setIndex(index > 0 ? index - 1 : sliderItems.length - 1);
    }
    if (dir === "right") {
      setIndex(index < 2 ? index + 1 : 0);
    }
  };

  return (
    <Container>
      {/* left button */}
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined fontSize="large" />
      </Arrow>
      {/* slider */}
      <Wrapper>
        {sliderItems.map((slide) => {
          const { id, img, title, desc, bg } = slide;
          return (
            /* single slide */
            <Slide key={id} bg={bg} slideIndex={index}>
              <ImgContainer>
                <Img src={img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
                <Button onClick={() => naviagte("/products")}>show now</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      {/* right button */}
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined fontSize="large" />
      </Arrow>
    </Container>
  );
};

export default Slider;
