import styled from "styled-components";
import { ExtraSmall } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 500px;
  background-color: white;
  padding: 20px;
  ${ExtraSmall({maxWidth: "90%"})}
`;
const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 24px;
  margin-bottom: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
`;
const Input = styled.input`
  flex: 1;
  padding: 10px;
`;
const Agreement = styled.span`
  margin: 20px 0;
  font-size: 12px;
`;
const Button = styled.button`
  width: 40%;
  background-color: teal;
  color: #fff;
  padding: 15px 20px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>create an account</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>privacy policy</b>
          </Agreement>
          <Button type="submit">create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
