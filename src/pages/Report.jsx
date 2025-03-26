import React, { useContext, useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png'
import '../../src/App.css'
import Container from '../components/Container'
import { MdOutlineLocalPrintshop } from "react-icons/md";
import { studentApi } from '../MyData/Students';

const Report = () => {
  let info = useContext(studentApi)  
  let [targetStudent, setTargetStudent] = useState([])
  console.log(targetStudent);
  
  let handleID = (e)=>{
    setTargetStudent(info.filter((i)=>i.idno === e.target.value))
  }
  return (
    <>
      <MdOutlineLocalPrintshop onClick={()=> window.print()} className='printbtn sticky left-[100%] top-0 z-[999]'/>
      <div className="printArea p-[5px]">
        <Container>
          <div className="printreport relative border-[1px] border-[#F00] p-[5px]">
            <div className="titleinfo">
              <div className="header">
                <div className="logo w-[20%] absolute top-[10px] left-[10px]">
                  <img src={logo} alt="" className='h-[50px]'/>
                </div>
                <h1 className='instituteName text-[40px] font-bold text-center'>Famous Digital Computer & Training Academy</h1>
              </div>
              <div className="address relative">
                <h1 className='text-center'>Saiful Islam Super Market, 1 No. C&B Bazar (High School Road),</h1>
                <h1 className='text-center'>Sreepur, Gazipur-1740, Mobile: 01920-244968</h1>
                <h2 className='addmissionform text-center text-[40px] font-bold absolute right-[50%] translate-x-[50%] bottom-[-75px]'>Admission Form</h2>
              </div>
            </div>
            <div className="details">
              <div className="topinf0">
                <div className="py-[5px]">
                  <label htmlFor="stdID" className='pr-[20px]'>ID No.</label>
                  <input type="text" id='stdID' className='border-[1px] border-[#f00]' onChange={handleID}/>
                </div>
                <div className="py-[5px]">
                  <label htmlFor="batchtime" className='pr-[20px]'>Batch Time: </label>
                  <input type="text" id='batchtime' className='border-b-[1px] border-[#f00] border-dotted'/>
                </div>
                <div className="py-[5px]">
                  <label htmlFor="date" className='pr-[20px]'>Date: </label>
                  <input type="date" id='date' className='border-b-[1px] border-[#f00] border-dotted'/>
                </div>
              </div>
              <div className="applicantsinfo flex flex-col gap-1 border-[1px] border-[#700] p-[5px]">
                <h1 className='text-[18px] font-bold w-full underline'>Applicant's Information</h1>
                <div className="w-full flex">
                  <div className="lbl w-[20%]">
                    <label htmlFor="stdName">Name</label>
                  </div>
                  <div className="bx w-[80%]">
                    <input type="text" id='stdName' className='border-b-[1px] border-[#f00] border-dotted w-full px-[10px]'/>
                  </div>
                </div>
                <div className="w-full flex">
                  <div className="lbl w-[20%]">
                    <label htmlFor="stdFName">Father's Name</label>
                  </div>
                  <div className="bx w-[80%]">
                    <input type="text" id='stdFName' className='border-b-[1px] border-[#f00] border-dotted w-full px-[10px]'/>
                  </div>
                </div>
                <div className="w-full flex">
                  <div className="lbl w-[20%]">
                    <label htmlFor="stdMName">Mother's Name</label>
                  </div>
                  <div className="bx w-[80%]">
                    <input type="text" id='stdMName' className='border-b-[1px] border-[#f00] border-dotted w-full px-[10px]'/>
                  </div>
                </div>
                <div className="w-full flex items-end">
                  <div className="lbl w-[20%]">
                    <label htmlFor="stdPaddres">Pressent Address</label>
                  </div>
                  <div className="bx w-[80%]">
                    <input type="text" id='stdPaddres' className='border-b-[1px] border-[#f00] border-dotted w-full px-[10px]'/>
                  </div>
                </div>
                <div className="w-full flex items-end">
                  <div className="lbl w-[20%]">
                    <label htmlFor="stdPraddres">Permanent Address</label>
                  </div>
                  <div className="bx w-[80%]">
                    <input type="text" id='stdPraddres' className='border-b-[1px] border-[#f00] border-dotted w-full px-[10px]'/>
                  </div>
                </div>
                <div className="w-full flex">
                  <div className="w-1/2 flex">
                    <div className="lbl w-[45%]">
                      <label htmlFor="stdBirthDate">Date of Birth</label>
                    </div>
                    <div className="bx w-[50%]">
                      <input type="date" id='stdBirthDate' className='border-b-[1px] border-[#f00] border-dotted w-full px-[10px]'/>
                    </div>
                  </div>
                  <div className="w-1/2 flex gap-5">
                    <div className="lbl">
                      <label htmlFor="abc" className='text-center'>Gender : </label>
                    </div>
                    <div className="bx flex gap-5">
                      <div className="flex items-center gap-2">
                        <label htmlFor="bmale">Male</label>
                        <input type="radio" name="color" value="red" id='bmale'/>
                      </div>
                      <div className="flex items-center gap-2">
                        <label htmlFor="bfemale">Female</label>
                        <input type="radio" name="color" value="red" id='bfemale'/>
                      </div>
                      <div className="flex items-center gap-2">
                        <label htmlFor="bothers">Others</label>
                        <input type="radio" name="color" value="red" id='bothers'/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex">
                  <div className="nationality flex w-1/2">
                    <div className="lbl w-[40%]">
                      <label htmlFor="stdNationality">Nationality</label>
                    </div>
                    <div className="bx w-[60%]">
                      <input type="text" id='stdNationality' className='border-b-[1px] border-[#f00] border-dotted w-full px-[10px]'/>
                    </div>
                  </div>
                  <div className="Relagion flex w-1/2">
                    <div className="lbl w-[25%]">
                      <label htmlFor="stdReligion" className='w-full text-right block'>Religion</label>
                    </div>
                    <div className="bx w-[75%]">
                      <input type="text" id='stdReligion' className='border-b-[1px] border-[#f00] border-dotted w-full px-[10px]'/>
                    </div>
                  </div>
                </div>
                <div className="w-full flex">
                  <div className="lbl w-[20%]">
                    <label htmlFor="stdNIDno">NID No.</label>
                  </div>
                  <div className="bx w-[80%]">
                    <input type="text" id='stdNIDno' className='border-b-[1px] border-[#f00] border-dotted w-full px-[10px]'/>
                  </div>
                </div>
                <div className="w-full flex">
                  <h1 className='w-[20%]'>Mobile No.</h1>
                  <div className="mobilenumber flex w-[40%]">
                    <div className="lbl w-[10%]">
                      <label htmlFor="stdselfno">Self</label>
                    </div>
                    <div className="bx w-[90%]">
                      <input type="text" id='stdselfno' className='border-b-[1px] border-[#f00] border-dotted w-full px-[10px]'/>
                    </div>
                  </div>
                  <div className="parentNo flex w-[40%]">
                    <div className="lbl w-[25%]">
                      <label htmlFor="stdparentsno" className='w-full text-right block'>Parents</label>
                    </div>
                    <div className="bx w-[75%]">
                      <input type="text" id='stdparentsno' className='border-b-[1px] border-[#f00] border-dotted w-full px-[10px]'/>
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-end">
                  <div className="lbl w-[20%]">
                    <label htmlFor="stdEdu">Educational Qualification</label>
                  </div>
                  <div className="bx w-[80%]">
                    <input type="text" id='stdEdu' className='border-b-[1px] border-[#f00] border-dotted w-full px-[10px]'/>
                  </div>
                </div>
                <div className="w-full flex">
                  <div className="Exam flex w-1/4">
                    <label htmlFor="Examname">Board</label>
                    <input type="text" id='Examname' className='border-b-[1px] border-[#f00] border-dotted w-[60%] px-[10px]'/>
                  </div>
                  <div className="ExamYear flex w-1/4">
                    <label htmlFor="Examyear">Exam Year</label>
                    <input type="text" id='Examyear' className='border-b-[1px] border-[#f00] border-dotted w-[40%] px-[10px]'/>
                  </div>
                  <div className="ExamRoll flex w-1/4">
                    <label htmlFor="ExamRoll">Roll</label>
                    <input type="text" id='ExamRoll' className='border-b-[1px] border-[#f00] border-dotted w-[60%] px-[10px]'/>
                  </div>
                  <div className="ExamReg flex w-1/4">
                    <label htmlFor="ExamReg">Reg. No.</label>
                    <input type="text" id='ExamReg' className='border-b-[1px] border-[#f00] border-dotted w-[60%] px-[10px]'/>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 border-[1px] border-[#700] p-[5px] mt-[5px]">
                <h1 className='text-[18px] font-bold w-full underline'>Name of Program (Select any One)</h1>
                <div className="pl-[50px] flex">
                  <div className="w-1/2">
                    <div className="oabteb">
                      <input type="checkbox" id='oabteb' />
                      <label htmlFor="oabteb" className='pl-[10px]'>Office Application (BTEB)</label>
                    </div>
                    <div className="oafdcta">
                      <input type="checkbox" id='oafdcta' />
                      <label htmlFor="oafdcta" className='pl-[10px]'>Office Application (FDCTA)</label>
                    </div>
                    <div className="spokenenglish">
                      <input type="checkbox" id='spokenenglish' />
                      <label htmlFor="spokenenglish" className='pl-[10px]'>Spoken English</label>
                    </div>
                    <div className="hardwareandnetwork">
                      <input type="checkbox" id='hardwareandnetwork' />
                      <label htmlFor="hardwareandnetwork" className='pl-[10px]'>Hardware and Networking</label>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="graphicsdesign">
                      <input type="checkbox" id='graphicsdesign' />
                      <label htmlFor="graphicsdesign" className='pl-[10px]'>Graphics Design</label>
                    </div>
                    <div className="websitedesign">
                      <input type="checkbox" id='websitedesign' />
                      <label htmlFor="websitedesign" className='pl-[10px]'>Website Design & Development</label>
                    </div>
                    <div className="digitalmarketing">
                      <input type="checkbox" id='digitalmarketing' />
                      <label htmlFor="digitalmarketing" className='pl-[10px]'>Digital Marketing</label>
                    </div>
                    <div className="mobileservicing">
                      <input type="checkbox" id='mobileservicing' />
                      <label htmlFor="mobileservicing" className='pl-[10px]'>Mobile Phone Servicing</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="session flex flex-col gap-1 border-[1px] border-[#700] p-[5px] mt-[5px]">
                <h1 className='text-[18px] font-bold w-full underline'>Session Preference (Please select any one)</h1>
                <div className="flex pl-[50px]">
                  <div className="w-1/3">
                    <div className="">
                      <input type="checkbox" id='jantojun' />
                      <label htmlFor="jantojun" className='pl-[10px]'>January - June</label>
                    </div>
                    <div className="">
                      <input type="checkbox" id='jultodec' />
                      <label htmlFor="jultodec" className='pl-[10px]'>July - December</label>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <div className="">
                      <input type="checkbox" id='specialone' />
                      <label htmlFor="specialone" className='pl-[10px]'>Special - 01 Month</label>
                    </div>
                    <div className="">
                      <input type="checkbox" id='jantomar' />
                      <label htmlFor="jantomar" className='pl-[10px]'>January - March</label>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <div className="">
                      <input type="checkbox" id='jultosep' />
                      <label htmlFor="jultosep" className='pl-[10px]'>July - September</label>
                    </div>
                    <div className="">
                      <input type="checkbox" id='octtodec' />
                      <label htmlFor="octtodec" className='pl-[10px]'>October - December</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="payment py-[10px] flex">
                <div className="w-1/3 flex">
                  <label htmlFor="totalfee">Total Course Fee</label>
                  <input type="number" id='totalfee' className='pl-[10px] text-right border-b-[1px] border-[#f00] border-dotted w-[75px]'/>
                </div>
                <div className="w-1/3 flex">
                  <label htmlFor="firstpay">First Pay</label>
                  <input type="number" id='firstpay' className='pl-[10px] text-right border-b-[1px] border-[#f00] border-dotted w-[75px]'/>
                </div>
                <div className="w-1/3 flex">
                  <label htmlFor="duefee">Total Course Fee</label>
                  <input type="number" id='duefee' className='pl-[10px] text-right border-b-[1px] border-[#f00] border-dotted w-[75px]'/>
                </div>
              </div>
              <div className="declaration">
                <p className='text-[15px]'>I hereby apply for admission to the above program in Famous Digital Computer & Training Academy.</p>
                <p>I agree to abide by all the rules and regulations of the institute</p>
              </div>
              <div className="signature flex">
                <div className="w-1/3 flex flex-col justify-center items-center px-[20px]">
                  <input type="text"  className='border-b-[1px] border-dotted border-[#f00] w-full py-[10px]'/>
                  <p>(Signature of the Applicant)</p>
                </div>
                <div className="w-1/3 flex flex-col justify-center items-center px-[20px]">
                  <input type="text"  className='border-b-[1px] border-dotted border-[#f00] w-full py-[10px]'/>
                  <p>(Signature of the Applicant)</p>
                </div>
                <div className="w-1/3 flex flex-col justify-center items-center px-[20px]">
                  <input type="text"  className='border-b-[1px] border-dotted border-[#f00] w-full py-[10px]'/>
                  <p>(Signature of the Applicant)</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Report