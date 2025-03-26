import React, { createContext, useState } from 'react'
let studentApi = createContext()
const Students = ({children}) => {
  let [studentinfo, setstduentinfo] = useState([{idno:'1001', name:'Rachak', age: '20', mother: 'Mayabini'}])
  return (
    <studentApi.Provider value={studentinfo}>{children}</studentApi.Provider>
  )
}

export {Students, studentApi}