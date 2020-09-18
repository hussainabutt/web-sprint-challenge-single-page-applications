import React from "react";

export default function Form(props) {
  const { disabled } = props;
  return (
    <div className="build-pizza">
      <form onSubmit={props.submit}>
        <h2>Build Your Pizza</h2>
        <section>
          <div className="form-heading">
            <h3>Enter Your Name</h3>
            <small>required</small>
          </div>
          <label htmlFor="name">Name: </label>
          <input
            value={props.pizzaOrder.name}
            onChange={props.onInputChange}
            id="name"
            name="name"
            type="text"
          />
        </section>
        <section>
          <div className="form-heading">
            <h3>Select a Size</h3>
            <small>required</small>
          </div>
          <label htmlFor="size">Size: </label>
          <select onChange={props.onInputChange} id="size" name="size">
            <option defaultValue value="small">
              Small
            </option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </section>
        <section>
          <div className="form-heading">
            <h3>Toppings</h3>
            <small>choose up to 4</small>
          </div>
          <label htmlFor="pepperoni">
            Pepperoni{" "}
            <input
              checked={props.pizzaOrder.pepperoni}
              onChange={props.onCheckboxChange}
              name="pepperoni"
              id="pepperoni"
              type="checkbox"
            />
          </label>
          <label htmlFor="olives">
            Olives{" "}
            <input
              checked={props.pizzaOrder.olives}
              onChange={props.onCheckboxChange}
              name="olives"
              id="olives"
              type="checkbox"
            />
          </label>
          <label htmlFor="ham">
            Ham{" "}
            <input
              checked={props.pizzaOrder.ham}
              onChange={props.onCheckboxChange}
              name="ham"
              id="ham"
              type="checkbox"
            />
          </label>
          <label htmlFor="onion">
            Onion{" "}
            <input
              checked={props.pizzaOrder.onion}
              onChange={props.onCheckboxChange}
              name="onion"
              id="onion"
              type="checkbox"
            />
          </label>
        </section>
        <section>
          <div className="form-heading">
            <h3>Anything Else?</h3>
          </div>
          <label htmlFor="specialInstructions">Special instructions: </label>
          <input
            value={props.pizzaOrder.specialInstructions}
            onChange={props.onInputChange}
            name="specialInstructions"
            id="specialInstructions"
            type="text"
          />
        </section>
        <div id="error" className="errors">
          {props.errors.name}
        </div>
        <button id="submit" disabled={disabled}>
          Add to Order
        </button>
      </form>
    </div>
  );
}
