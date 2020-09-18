import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be longer than 2 characters"),
  // pepperoni: Yup.bool().optional(),
  // ham: Yup.bool().optional(),
  // olives: Yup.bool().optional(),
  // onion: Yup.bool().optional(),
  size: Yup.string().required("Size is required"),
  specialInstructions: Yup.string(),
});

export default formSchema;
