import React from "react";
import "./RecipeCards.css";
import { useState } from "react";
import {
  useNavigate,
  useLocation,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import MyModal from "./MyModal";

function RecipeCard({ recipe, handleOpen }) {
  //boolean variable that defines if the modal is open or not (initially should be closed)
  //function to open de modal (changing the value of the previous variable to the oppiste)
  // function to close the modal (doing the opposite of the previous function)
  //which information needs to receive  the modal? : 1.info about the recipe. 2.the variable that defines if it should open or not. 3. the function to close it
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
