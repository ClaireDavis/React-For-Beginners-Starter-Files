import React from "react";
import AddFishForm from "./AddFishForm";

const Inventory = ({ addFish }) => {
  return (
    <div className="inventory">
      <h3>Inventory</h3>
      <AddFishForm addFish={addFish} />
    </div>
  );
};

export default Inventory;
