import React from "react";

const Loader: React.FC = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h1>Map Loading...</h1>
    </div>
  );
};

export default Loader;
