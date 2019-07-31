import React from "react";
import { getFunName } from "../helpers"

const StorePicker = ({ history }) => {
  const goToApp = (event) => {
    event.preventDefault();

    const { funName } = event.currentTarget.elements;

    history.push(`/store/${funName.value}`);
  };

  return (
    <form className="store-selector" onSubmit={goToApp}>
      <h2> Please e nter a store </h2>
      <input
        type="text"
        required placeholder="store name"
        name="funName"
        defaultValue={getFunName()}
        onChange={(event) => console.log(event.target)}
      />
      <button type="submit">Visit store</button>
    </form>
  );
};


export default StorePicker;
