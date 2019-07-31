import React from "react";

const AddFishForm = ({ addFish }) => {
  return (
    <form className="fish-edit" onSubmit={addFish}>
      <input type="text" name="name" placehodler="Name" />
      <input type="text" name="price" placehodler="price" />
      <select name="status">
        <option value="available">Fresh</option>
        <option value="unavailable">Sold out</option>
      </select>
      <textarea name="desc" cols="30" rows="10" />
      <button type="submit">"Add</button>
    </form>
  );
}

export default AddFishForm;
