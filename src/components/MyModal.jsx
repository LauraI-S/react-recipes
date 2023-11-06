import React from "react";
import "./RecipeCards.css";
import { State } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MyModal({ recipe, handleClose, show }) {
  // console.log("chosenRecipe :>> ", recipe);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{recipe.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={recipe.image}
            alt={recipe.title}
            style={{ width: "auto", height: "auto" }}
          />
          <div>Dish Types: {recipe.dishTypes.join(", ")}</div>
          <div>Ready in: {recipe.readyInMinutes} minutes</div>
          <div>Ready in: {recipe.summary} minutes</div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>{" "}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;
