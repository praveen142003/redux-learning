import React, { useState } from 'react'
import { Button, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Login2() {
  
  const [data , setData] = useState([{id : 1 , number : '' , password : ''}])

    const handleChange = (index, e) => {
      const { name, value } = e.target;
      
      const updatedForms = data.map((form, i) =>
        i === index ? { ...form, [name]: value } : form
      );
           setData(updatedForms)
    };

    console.log(data)
  
    const addForm = () => {
         setData([...data , {id : data.length +1 , number : '' , password :''}])
    };

    const handleSubmit = () => {
      console.log(data, "Submitted Data");
    };
  return (
    <div className="ms-4">
    <h1 className="text-center p-3">React Form </h1>
    
    <div>
      <Button onClick={addForm}>Create</Button>
    </div>

    <div className="col-12 mt-5">
      <div className="col-6">
        {data.map((form, index) => (
          <div key={form.id}>
            <h6 className="mt-3">Form {form.id}</h6>
            <Form>
              <FormControl
                type="number"
                name="number"
                value={data.number}
                onChange={(e) => handleChange(index, e)}
                placeholder="Enter mobile number"
                className="mt-3 w-50"
              />

              <FormControl
                type="password"
                name="password"
                value={data.password}
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
  )
}

export default Login2
