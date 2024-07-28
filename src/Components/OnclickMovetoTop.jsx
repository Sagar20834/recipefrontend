import React from "react";

const OnclickMovetoTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional: smooth scroll animation
  });
};

export default OnclickMovetoTop;
