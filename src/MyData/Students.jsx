import React, { createContext, useState } from 'react'
let studentApi = createContext()
const Students = ({children}) => {
  let [studentinfo, setstduentinfo] = useState([
    { idno:'1001',
      name:'Rachak Dio',
      fathername: 'Boitrish Marak', 
      mothername: 'Mayabini Dio',
      presentaddress: 'Nalitabari, Sherpur, Mymensingh',
      permanentaddress: 'Nalitabari, Sherpur, Mymensingh',
      dateofbirth: '10-Aug-1995',
      gender: 'Male',
      nationality: 'Bangladeshi',
      nationalid: '8916707058',
      religion: 'Christian',
      selfmobile: '01700000001',
      parentmobile: '01700000002',
      edustatues: 'HSC',
      eduboard: 'Mymensingh',
      eduyear: '2015',
      eduroll: '205879',
      edureg: '111259329'
    }
  ])





























  return (
    <studentApi.Provider value={studentinfo}>{children}</studentApi.Provider>
  )
}

export {Students, studentApi}