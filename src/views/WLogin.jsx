import React, { useState } from "react"
import { Button, Form, FormControl } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { useDispatch, useSelector } from "react-redux"
import { setData } from "../redux/slice/commonSlice"

function WLogin() {
  const forms = useSelector((state) => state.common.forms)
  const dispatch = useDispatch()

  const [errors, setErrors] = useState(forms.map(() => ({ numberError: false, passwordError: false })))

  const addForm = () => {
    dispatch(setData([...forms, { id: forms.length + 1, number: "", password: "" }]))
    setErrors([...errors, { numberError: false, passwordError: false }])
  }

  const handleChange = (index, e) => {
    const { name, value } = e.target
    const updatedForms = forms.map((form, i) =>
      i === index ? { ...form, [name]: value } : form
    )

    dispatch(setData(updatedForms))

    setErrors((prevErrors) =>
      prevErrors.map((err, i) =>
        i === index ? { ...err, [`${name}Error`]: false } : err
      )
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let newErrors = forms.map(() => ({ numberError: false, passwordError: false }))

    let isValid = true

    forms.forEach((form, index) => {
      if (form.number.trim() === "") {
        newErrors[index].numberError = true
        isValid = false;
      }

      if (form.password.trim() === "") {
        newErrors[index].passwordError = true
        isValid = false
      }
    });

    setErrors(newErrors)

    if (isValid) {
      console.log("Submitted Data:", forms)
      localStorage.setItem('formData' , forms)
    }
  };

  const handleBlur = (index, field) => {
    if (!forms[index][field].trim()) {
      setErrors((prevErrors) =>
        prevErrors.map((err, i) =>
          i === index ? { ...err, [`${field}Error`]: true } : err
        )
      )
    }
  }

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
                  type="text"
                  name="number"
                  value={form.number}
                  onChange={(e) => handleChange(index, e)}
                  onBlur={() => handleBlur(index, "number")}
                  placeholder="Enter mobile number"
                  className="mt-3 w-50"
                />
                {errors[index]?.numberError && <div className="text-danger">Please enter a number</div>}

                <FormControl
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={(e) => handleChange(index, e)}
                  onBlur={() => handleBlur(index, "password")}
                  placeholder="Enter password"
                  className="mt-3 w-50"
                />
                {errors[index]?.passwordError && <div className="text-danger">Please enter a password</div>}
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

export default WLogin;
