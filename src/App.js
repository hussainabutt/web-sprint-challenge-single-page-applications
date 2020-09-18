import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import Header from "./Header";
import Home from "./Home";
import Form from "./Form";
import formschema from "./Validation/FormSchema";

const App = () => {
  const [pizzaOrder, setPizzaOrder] = useState({
    name: "",
    size: "small",
    toppings: {
      pepperoni: false,
      ham: false,
      olives: false,
      onion: false,
    },
    specialInstructions: "",
  });

  const [disabled, setDisabled] = useState(true);

  const [errors, setErrors] = useState({});
  const checkboxChange = (name, isChecked) => {
    setPizzaOrder({
      ...pizzaOrder,
      toppings: {
        ...pizzaOrder.toppings,
        [name]: isChecked,
      },
    });
  };
  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;
    checkboxChange(name, checked);
  };
  const onInputChange = (e) => {
    e.persist();
    let name = e.target.name;
    let value = e.target.value;
    Yup.reach(formschema, name)
      .validate(value)
      .then((valid) => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
    setPizzaOrder({
      ...pizzaOrder,
      [name]: value,
    });
  };
  const submitOrder = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/pizza", pizzaOrder)
      .then((data) => {
        console.log(data);
        setPizzaOrder({
          name: "",
          size: "small",
          pepperoni: false,
          ham: false,
          olives: false,
          onion: false,
          specialInstructions: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    formschema.isValid(pizzaOrder).then((valid) => {
      setDisabled(!valid);
    });
  }, [pizzaOrder]);
  return (
    <>
      <Header />
      <Router>
        <Route exact path="/" component={Home} />
        <Form
          disabled={disabled}
          errors={errors}
          submit={submitOrder}
          pizzaOrder={pizzaOrder}
          onInputChange={onInputChange}
          onCheckboxChange={onCheckboxChange}
        />
      </Router>
    </>
  );
};
export default App;
