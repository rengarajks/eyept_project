import React from 'react'
import ContainerHeaderEyePoint from '../components/ContainerHeaderEyePoint'
import StarsCanvas from '../components/StarBackground.tsx'
import { Link } from 'react-router-dom'

function Funwindow() {
  return (
<div className="w-full bg-gray-200 h-[100vh] overflow-hidden text-left text-xs text-white font-inter">
      
      
      <StarsCanvas/>
      <ContainerHeaderEyePoint/>

      <div className=' flex flex-col items-center mt-[35vh]'>
      <div className="text-[65px] font-semibold text-gainsboro z-[20]">
        FUN WINDOW
      </div>


      

      <div className="text-6xl leading-[70px] font-semibold font-poppins text-center inline-block w-[1146px] z-[20]">
        <span className="font-bold  text-[#F98888]">{`Eye Tracking `}</span>
        <span>Revolutionized</span>
      </div>


      
      <Link to={'/funwindowcalib'} className='z-[20] text-white '>
      <div className="z-[20] mt-6 hover:bg-white hover:text-black hover:cursor-pointer cursor  rounded-[68.58px] box-border w-[200px] h-[65px] flex flex-row items-center justify-start py-[9.601852416992188px] px-[43.89418029785156px] gap-[0px_5.49px] text-center text-mini border-[1.1px] border-solid border-white">
       
       
        <div className=" relative leading-[19.2px] font-semibold whitespace-pre-wrap">
        
          <div>
          <span className='inline-block'>       Try Now</span>
          </div>
        </div>

        
      </div>

      </Link>

      
      <div className="leading-[60px] font-poppins inline-block w-[925px] mt-14 z-[20]">
         An interactive application displaying real-time visualization of user’s
        gaze, enhancing user engagement and providing a unique interactive
        experience.
      </div>

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

export default Funwindow