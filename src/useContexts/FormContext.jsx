import React, { createContext, useState } from 'react'

export const formContext = createContext()

function FormContextProvider({children}) {
    const [formData , setFormData] = useState([{id : 1 , number : '' , password : ''}])
  return (
         <formContext.Provider value={{formData , setFormData}}>
            {children}
         </formContext.Provider>
  )
}

export default FormContextProvider