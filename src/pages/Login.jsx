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
    url("https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")
      no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 400px;
  background-color: white;
  padding: 20px;
  ${ExtraSmall({ maxWidth: "90%" })}
`;
const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 24px;
  margin-bottom: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
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
const Link = styled.a`
  font-size: 12px;
  text-decoration: underline;
  text-transform: uppercase;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>sign in</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button type="submit">login</Button>
          <Link>do not remember the password</Link>
          <Link>create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
