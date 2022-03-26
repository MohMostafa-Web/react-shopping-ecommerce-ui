import styled from "styled-components";
import { Send } from "@mui/icons-material";
import { ExtraSmall } from "../responsive";

const Container = styled.div`
  height: 60vh;
  padding: 0 15px;
  background-color: #fcf5f5;
  text-align: center;
  display: grid;
  place-content: center;
`;
const Title = styled.h2`
  font-size: 70px;
  margin-bottom: 20px;
  ${ExtraSmall({fontSize: "50px"})}
`;
const Desc = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${ExtraSmall({fontSize: "18px"})}
`;
const InputContainer = styled.div`
  height: 40px;
  display: flex;
  border: 1px solid lightgrey;
`;
const Input = styled.input`
  flex: 1;
  padding-left: 20px;
  font-size: 16px;
  border: none;
  caret-color: teal;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  width: 40px;
  background-color: teal;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input type="email" placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
