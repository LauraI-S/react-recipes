import React from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { recipeName } = useParams();
  //console.log("param :>> ", param);

  return (
    <div>
      <h2>see more info about {recipeName}</h2>
    </div>
  );
}

export default Details;
//create another fetch to display the whole recipe?
