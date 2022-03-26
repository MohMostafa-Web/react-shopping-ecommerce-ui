import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { Mobile, ExtraSmall, Small } from "../responsive";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  max-width: 1200px;
  padding: 10px 15px;
  margin: 0 auto;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${ExtraSmall({
    width: "100%",
  })}
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  margin-right: 25px;
  cursor: pointer;
  ${Small({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  padding: 5px;
  display: flex;
  align-items: center;
`;
const Input = styled.input.attrs({ placeholder: "Search" })`
  border: none;
  &:focus {
    outline: none;
  }
  ${ExtraSmall({ width: "80px" })}
  ${Mobile({ width: "60px" })}
`;
const Center = styled.div``;
const Logo = styled.h1`
  ${ExtraSmall({ fontSize: "28px" })}
  a {
    color: #000;
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const MenuItem = styled.div`
  margin: 0 15px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  ${ExtraSmall({ margin: "0 8px", fontSize: "12px" })}
  & a {
    color: black;
    & svg {
      display: block;
    }
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>en</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to="/">mo.</Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/register">register</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login">sign in</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={2} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
