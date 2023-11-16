import React from "react";
import "./RecipeCards.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import MyModal from "./MyModal";

function RecipeCard({ recipe, handleOpen }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [chosenRecipe, setChosenRecipe] = useState(null);

  return (
    <Col>
      <ul>
        <div>
          <div className="flip-card" key={recipe.id}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
              <div className="flip-card-back">
                <Link to={`${recipe.title}`}>
                  <h3>{recipe.title}</h3>
                  <p>Ready in {recipe.readyInMinutes} minutes</p>
                </Link>

                <Button variant="secondary" onClick={handleShow}>
                  more info
                </Button>

                <MyModal
                  recipe={recipe}
                  handleClose={handleClose}
                  show={show}
                />
              </div>
            </div>
          </div>
        </div>
      </ul>
    </Col>
  );
}

export default RecipeCard;
