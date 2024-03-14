import React from 'react'
import ContainerHeaderEyePoint from '../components/ContainerHeaderEyePoint'
import StarsCanvas from '../components/StarBackground.tsx'
import { Link } from 'react-router-dom'
import './app.css'


function FunwindowCalib() {
  return (
    <div className="w-full bg-gray-200 h-[100vh] overflow-hidden text-left text-xs text-white font-inter">
      
      
      <StarsCanvas/>
      <ContainerHeaderEyePoint/>

      
      <div id="cursor"></div>

      <div className=' flex flex-col items-center mt-[25vh]  mx-[25%] p-12 py-40  bg-white/10  rounded-3xl'>

      <div className="relative bottom-[200px]  right-[30vh] text-[30px] font-medium font-lexend text-gainsboro">
        <span>FUN WIND</span>
        <span className="text-violet">O</span>
        <span>W</span>
      </div>
     

      <div className=" text-6xl leading-[25px] text-center flex items-center w-[845px] h-[87px]">
        <span className="w-full">
          <span>{`Online caliberations and `}</span>
          <span className="font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f98888,_#e789e9_60%,_#845cf5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            eye tracking
          </span>
        </span>
      </div>

      



      
      <Link to={'/funwindowfinal'} className='z-[20] text-white '>
      <div className="z-[20] mt-6 hover:bg-white hover:text-black hover:cursor-pointer cursor  rounded-[68.58px] box-border w-[full] h-[65px] flex flex-row items-center justify-start py-[9.601852416992188px] px-[43.89418029785156px] gap-[0px_5.49px] text-center text-mini border-[1.1px] border-solid border-white">
       
       
        <div className=" relative leading-[19.2px] font-semibold whitespace-pre-wrap">
        
          <div>
          <span className='inline-block'>       Start eye tracking</span>
          </div>
        </div>

        
      </div>

      </Link>

      
     

      </div>








      

      <div className="absolute bottom-[0] flex justify-between   bg-gray-500 w-full  opacity-50 overflow-hidden text-left text-xs text-whitesmoke font-inter">

<div className='p-4'>Copyright EyePoint © All rights reserved</div>

<div className='p-4'>
  <div>
    <span>Home Terms of Service Privacy Policy Docs</span>
  </div>
</div>

</div>


      
    </div>
  )
}

export default FunwindowCalib