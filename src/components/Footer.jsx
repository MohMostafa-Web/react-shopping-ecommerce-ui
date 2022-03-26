import styled from "styled-components";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  LocationOn,
  Call,
  MailOutline,
} from "@mui/icons-material";
import { Mobile } from "../responsive";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  & > div {
    flex: 1;
    min-width: 300px;
    padding: 20px;
  }
`;
const Left = styled.div``;
const Logo = styled.h2`
  font-size: 32px;
  text-transform: uppercase;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.ul`
  display: flex;
  align-items: center;
`;
const SocialIcon = styled.li`
  margin-right: 10px;
`;
const Link = styled.a`
  display: block;
  text-decoration: none;
  color: #${(props) => props.color};
  &:hover {
    opacity: 0.8;
  }
`;
const Center = styled.div`
  ${Mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  flex-basis: 50%;
  margin-bottom: 10px;
`;
const LinkItem = styled(Link)`
  color: #333;
  font-weight: 500;
`;
const Right = styled.div`
  ${Mobile({ backgroundColor: "#f5f5f5" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  & > svg {
    margin-right: 10px;
  }
`;
const Payment = styled.img``;
const CopyRight = styled.div`
  height: 40px;
  line-height: 20px;
  background-color: white;
  font-size: 12px;
  text-align: center;
  padding: 10px 0;
  a {
    text-decoration: none;
    color: #000;
    font-weight: 600;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const Footer = () => {
  return (
    <>
      <Container>
        <Left>
          <Logo>mo.</Logo>
          <Desc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
            provident nesciunt cum quisquam? Voluptate recusandae delectus
            maxime illum placeat ea facilis sunt! Obcaecati dolorum quia
            sapiente excepturi veniam nulla nesciunt.
          </Desc>
          <SocialContainer>
            <SocialIcon>
              <Link color="1877f2" href="https://facebook.com">
                <Facebook />
              </Link>
            </SocialIcon>
            <SocialIcon>
              <Link color="1da1f2" href="https://twitter.com">
                <Twitter />
              </Link>
            </SocialIcon>
            <SocialIcon>
              <Link color="5851db" href="https://instagram.com">
                <Instagram />
              </Link>
            </SocialIcon>
            <SocialIcon>
              <Link color="0077b5" href="https://linkedin.com">
                <LinkedIn />
              </Link>
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>
              <LinkItem href="#">Home</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="#">Cart</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="#">Man Fashion</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="#">Woman Fashion</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="#">Accessories</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="#">My Account</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="#">Order Tracking</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="#">Location</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="#">Wishlist</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="#">Terms</LinkItem>
            </ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <LocationOn /> 622 Dixie Path, South Tobinchester 98336
          </ContactItem>
          <ContactItem>
            <Call /> +1 234 56 78
          </ContactItem>
          <ContactItem>
            <MailOutline /> contact@mo.dev
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
      <CopyRight>
        Designed by{" "}
        <a
          href="https://www.youtube.com/c/LamaDev/about"
          target="_blank"
          rel="noreferrer"
        >
          Lama Dev
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/MohMostafa-Web"
          target="_blank"
          rel="noreferrer"
        >
          MohMostafa
        </a>
        .
      </CopyRight>
    </>
  );
};

export default Footer;
