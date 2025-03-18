import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/slice/commonSlice";
import { Button, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const forms = useSelector((state) => state.common.forms);
  const dispatch = useDispatch();

  // Handle input change and update Redux state
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    
    const updatedForms = forms.map((form, i) =>
      i === index ? { ...form, [name]: value } : form
    );

    dispatch(setData(updatedForms));
  };

  // Add a new form dynamically
  const addForm = () => {
    const newForm = { id: forms.length + 1, number: "", password: "" };
    dispatch(setData([...forms, newForm]))
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log(forms, "Submitted Data");
  };

  return (
    <div className="ms-4">
      <h1 className="text-center p-3">React Form with Redux</h1>
      
      <div>
        <Button onClick={addForm}>Create</Button>
      </div>

      <div className="col-12 mt-5">
        <div className="col-6">
          {forms.map((form, index) => (
            <div key={form.id}>
              <h6 className="mt-3">Form {form.id}</h6>
              <Form>
                <FormControl
                  type="number"
                  name="number"
                  value={form.number}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Enter mobile number"
                  className="mt-3 w-50"
                />

                <FormControl
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Enter password"
                  className="mt-3 w-50"
                />
              </Form>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2">
        <Button onClick={handleSubmit} type="submit">Submit</Button>
      </div>
    </div>
  );
}

export default Login;
