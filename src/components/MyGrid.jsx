import React from "react";
import { Container, Row } from "react-bootstrap";
import RecipeCard from "./RecipeCard";

function MyGrid({ recipes, handleOpen }) {
  return (
    <>
      <Container>
        <Row>
          {recipes &&
            recipes.map((recipe, index) => {
              return (
                <RecipeCard
                  recipe={recipe}
                  index={index}
                  handleOpen={handleOpen}
                />
              );
            })}
        </Row>
      </Container>
    </>
  );
}

export default MyGrid;
