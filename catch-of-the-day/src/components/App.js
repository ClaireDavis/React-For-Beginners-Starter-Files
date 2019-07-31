import React, { useState } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

const App = () => {
  const [fishes, setFishes] = useState({});

  const addFish = event => {
    event.preventDefault();

    const {
      name,
      price,
      status,
      desc
    } = event.currentTarget.elements;

    const fish = {
      name: name.value,
      price: price.value,
      status: status.value,
      desc: desc.value
    };

    const fishesCopy = { ...fishes };

    fishesCopy[`fish${Date.now()}`] = fish;
    setFishes(fishesCopy)

    event.currentTarget.reset()
  };

  console.log(fishes);

  return (
    <div className="catch-of-the-day" >
      <div className="menu">
        <Header tagline="Fresh Seafood Market" />
      </div>
      <Order />
      <Inventory addFish={addFish} />
    </div >
  );
};

export default App;
