import React from 'react'
import logo from '../assets/logo.png'
import '../../src/App.css'
import Container from '../components/Container'
import { MdOutlineLocalPrintshop } from "react-icons/md";

const Report = () => {
  return (
    <div className="printArea">
      <MdOutlineLocalPrintshop onClick={()=> window.print()} className='printbtn absolute right-[5px] top-[20px]'/>
      <Container>
        <div className="printreport relative border-[1px] border-[#F00] p-[5px]">
          <div className="header">
            <div className="logo w-[20%] absolute top-[10px] left-[10px]">
              <img src={logo} alt="" className='h-[50px]'/>
            </div>
            <h1 className='instituteName text-[40px] font-bold text-center'>Famous Digital Computer & Training Academy</h1>
          </div>
          <div className="address">
            <h1 className='text-center'>Saiful Islam Super Market, 1 No. C&B Bazar (High School Road),</h1>
            <h1 className='text-center'>Sreepur, Gazipur-1740, Mobile: 01920-244968</h1>
          </div>
          <h2 className='text-center text-[40px] font-bold'>Admission Form</h2>
          <div className="details">
            <div className="py-[5px]">
              <label htmlFor="stdID" className='pr-[20px]'>ID No.</label>
              <input type="text" id='stdID' className='border-[1px] border-[#f00]'/>
            </div>
            <div className="py-[5px]">
              <label htmlFor="batchtime" className='pr-[20px]'>Batch Time: </label>
              <input type="text" id='batchtime' className='border-b-[1px] border-[#f00] border-dotted'/>
            </div>
            <div className="py-[5px]">
              <label htmlFor="date" className='pr-[20px]'>Date: </label>
              <input type="text" id='date' className='border-b-[1px] border-[#f00] border-dotted'/>
            </div>
            <div className="applicantsinfo flex flex-col gap-3 border-[1px] border-[#700] p-[5px]">
              <h1 className='text-[18px] font-bold w-full border-b-[5px] border-[#222]'>Applicant's Information</h1>
              <div className="w-full flex">
                <div className="lbl w-[15%]">
                  <label htmlFor="stdName">Name</label>
                </div>
                <div className="bx w-[85%]">
                  <input type="text" id='stdName' className='border-b-[1px] border-[#f00] border-dotted w-full px-[10px]'/>
                </div>
              </div>
              <div className="w-full flex">
                <div className="lbl w-[15%]">
                  <label htmlFor="stdFName">Father's Name</label>
                </div>
                <div className="bx w-[85%]">
                  <input type="text" id='stdFName' className='border-b-[1px] border-[#f00] border-dotted w-full px-[10px]'/>
                </div>
              </div>
              <div className="w-full flex">
                <div className="lbl w-[15%]">
                  <label htmlFor="stdMName">Mother's Name</label>
                </div>
                <div className="bx w-[85%]">
                  <input type="text" id='stdMName' className='border-b-[1px] border-[#f00] border-dotted w-full px-[10px]'/>
                </div>
              </div>
              <div className="w-full flex items-end">
                <div className="lbl w-[15%]">
                  <label htmlFor="stdPaddres">Pressent Address</label>
                </div>
                <div className="bx w-[85%]">
                  <input type="text" id='stdPaddres' className='border-b-[1px] border-[#f00] border-dotted w-full px-[10px]'/>
                </div>
              </div>
              <div className="w-full flex items-end">
                <div className="lbl w-[15%]">
                  <label htmlFor="stdPraddres">Permanent Address</label>
                </div>
                <div className="bx w-[85%]">
                  <input type="text" id='stdPraddres' className='border-b-[1px] border-[#f00] border-dotted w-full px-[10px]'/>
                </div>
              </div>
              <div className="w-full flex">
                <div className="lbl w-[15%]">
                  <label htmlFor="stdBirthDate">Date of Birth</label>
                </div>
                <div className="bx w-[20%]">
                  <input type="date" id='stdBirthDate' className='border-b-[1px] border-[#f00] border-dotted w-full px-[10px]'/>
                </div>
              </div>
              <div className="w-full flex">
                <div className="lbl w-[15%]">
                  <label htmlFor="abc">Gender</label>
                </div>
                <div className="bx w-[85%] flex gap-5">
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
              <div className="w-full flex">
                <div className="nationality flex w-1/2">
                  <div className="lbl w-[30%]">
                    <label htmlFor="stdNationality">Nationality</label>
                  </div>
                  <div className="bx w-[70%]">
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
                <div className="lbl w-[15%]">
                  <label htmlFor="stdNIDno">NID No.</label>
                </div>
                <div className="bx w-[85%]">
                  <input type="text" id='stdNIDno' className='border-b-[1px] border-[#f00] border-dotted w-full px-[10px]'/>
                </div>
              </div>
              <div className="w-full flex">
                <h1 className='w-[15%]'>Mobile No.</h1>
                <div className="mobilenumber flex w-[42.5%]">
                  <div className="lbl w-[10%]">
                    <label htmlFor="stdselfno">Self</label>
                  </div>
                  <div className="bx w-[90%]">
                    <input type="text" id='stdselfno' className='border-b-[1px] border-[#f00] border-dotted w-full px-[10px]'/>
                  </div>
                </div>
                <div className="parentNo flex w-[42.5%]">
                  <div className="lbl w-[25%]">
                    <label htmlFor="stdparentsno" className='w-full text-right block'>Parents</label>
                  </div>
                  <div className="bx w-[75%]">
                    <input type="text" id='stdparentsno' className='border-b-[1px] border-[#f00] border-dotted w-full px-[10px]'/>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-end">
                <div className="lbl w-[15%]">
                  <label htmlFor="stdEdu">Educational Qualification</label>
                </div>
                <div className="bx w-[85%]">
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
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Report