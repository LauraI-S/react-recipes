import React from "react";

function isUserAuth(user) {
  const userStatus = user ? true : false;
  return userStatus;
}

export { isUserAuth };
