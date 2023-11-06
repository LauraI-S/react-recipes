import React from "react";

function MySearch({ handleInputChange, inputText }) {
  return <input type="text" value={inputText} onChange={handleInputChange} />;
}

export default MySearch;
