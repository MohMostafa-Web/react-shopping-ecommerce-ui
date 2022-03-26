import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { ExtraSmall } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px 15px;
  ${ExtraSmall({ flexDirection: "column", padding: "0" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => {
        return <CategoryItem key={item.id} {...item} />;
      })}
    </Container>
  );
};

export default Categories;
