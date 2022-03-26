import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { ExtraSmall, Small } from "../responsive";

const Container = styled.div`
  max-width: 1200px;
  padding: 20px 15px;
  margin: 0 auto;
`;
const Title = styled.h2`
  font-weight: 300;
  font-size: 32px;
  text-transform: uppercase;
  text-align: center;
`;
const Top = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Small({ flexDirection: "column", gap: "20px" })}
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  border: ${(props) => (props.type === "outlined" ? "2px solid teal" : "none")};
`;
const TopTexts = styled.div`
  ${Small({ display: "none" })}
`;
const TopText = styled.span`
  margin: 0 10px;
  text-decoration: underline;
  cursor: pointer;
`;
const Bottom = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  ${Small({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  padding: 20px;
  display: flex;
  ${ExtraSmall({ flexDirection: "column", padding: "20px 0" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${ExtraSmall({ flexDirection: "column", alignItems: "center" })}
`;
const Image = styled.img`
  width: 200px;
  object-fit: contain;
  ${Small({ marginBottom: "20px" })}
`;
const Details = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 0.5;
  display: grid;
  place-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & > svg {
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
const ProductAmount = styled.span`
  padding: 5px;
  font-size: 24px;
  ${Small({ padding: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  text-align: center;
`;
const Hr = styled.hr`
  height: 1px;
  background-color: #eee;
  margin: 0 20px;
  border: none;
`;
const Summary = styled.div`
  flex: 1;
  min-width: 265px;
  max-width: 400px;
  height: fit-content;
  padding: 20px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  ${Small({ width: "90%", margin: "0 auto" })}
`;
const SummaryTitle = styled.h3`
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 200;
  ${Small({ textAlign: "center" })}
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "bold"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  text-transform: uppercase;
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const Cart = () => {
  const naviagte = useNavigate();

  return (
    <>
      <Navbar />
      <Announcement />
      <Container>
        <Title>your bag</Title>
        <Top>
          <TopButton type="outlined" onClick={() => naviagte("/products")}>
            continue shopping
          </TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Whishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">checkout now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://m.media-amazon.com/images/I/71goVAq0HxL._AC_UY575_.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> KVOVZO MEN'S RUNNING SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 44
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 50</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://m.media-amazon.com/images/I/91nvtZCc70S._AC_SX425._SX._UX._SY._UY_.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> GILDAN MEN'S FLEECE SWEATSHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="#c8c7cf" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80.00</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
