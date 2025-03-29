import React, { createContext, useState } from 'react'
let studentApi = createContext()
const Students = ({children}) => {
  let studentinfo = [
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
      edureg: '111259329',
      program: 'Office Aplication (BTEB)',
      session: 'January-June',
      totalfee: '10000',
      totalpay: '5000',
      totaldue: '5000'
    },
    { idno:'1002',
      name:'Nalsim Dofo',
      fathername: 'Samanto Chambugong', 
      mothername: 'Nepali Dofo',
      presentaddress: 'Nalitabari, Sherpur, Mymensingh',
      permanentaddress: 'Nalitabari, Sherpur, Mymensingh',
      dateofbirth: '13-May-1998',
      gender: 'Male',
      nationality: 'Bangladeshi',
      nationalid: '8916708068',
      religion: 'Christian',
      selfmobile: '01700000771',
      parentmobile: '01700005922',
      edustatues: 'SSC',
      eduboard: 'Mymensingh',
      eduyear: '2013',
      eduroll: '205480',
      edureg: '111259011',
      program: 'Office Aplication (FDCTA)',
      session: 'July-December',
      totalfee: '10000',
      totalpay: '7000',
      totaldue: '3000'
    },
    { idno:'1003',
      name:'Mousumi Daru',
      fathername: 'Diresh Sku', 
      mothername: 'Mukti Daru',
      presentaddress: 'Nalitabari, Sherpur, Mymensingh',
      permanentaddress: 'Nalitabari, Sherpur, Mymensingh',
      dateofbirth: '07-Feb-1994',
      gender: 'Female',
      nationality: 'Bangladeshi',
      nationalid: '8916105206',
      religion: 'Christian',
      selfmobile: '01700200735',
      parentmobile: '01709230522',
      edustatues: 'HSC',
      eduboard: 'Mymensingh',
      eduyear: '2013',
      eduroll: '192032',
      edureg: '110159011',
      program: 'Website Design & Development',
      session: 'October-December',
      totalfee: '20000',
      totalpay: '1200',
      totaldue: '8000'
    },
    { idno:'1004',
      name:'Jahid Mia',
      fathername: 'Saiful Mia', 
      mothername: 'Sharifa Khatun',
      presentaddress: '1no C&B, Sreepur, Gazipur',
      permanentaddress: '1no C&B, Sreepur, Gazipur',
      dateofbirth: '07-Feb-1990',
      gender: 'Male',
      nationality: 'Bangladeshi',
      nationalid: '8916105206',
      religion: 'Islam',
      selfmobile: '01700204338',
      parentmobile: '01709223222',
      edustatues: 'Diploma',
      eduboard: 'Dhaka',
      eduyear: '2008',
      eduroll: '192025',
      edureg: '110152011',
      program: 'Website Design & Development',
      session: 'October-December',
      totalfee: '20000',
      totalpay: '1200',
      totaldue: '8000'
    }
  ]





























  return (
    <studentApi.Provider value={studentinfo}>{children}</studentApi.Provider>
  )
}

export {Students, studentApi}