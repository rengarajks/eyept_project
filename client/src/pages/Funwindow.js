import React from 'react'
import ContainerHeaderEyePoint from '../components/ContainerHeaderEyePoint'
import StarsCanvas from '../components/StarBackground.tsx'

function Funwindow() {
  return (
<div className="w-full bg-gray-200 h-[100vh] overflow-hidden text-left text-xs text-white font-inter">
      
      
      <StarsCanvas/>
      <ContainerHeaderEyePoint/>
      <div className="absolute top-[499px] left-[178px] leading-[60px] font-poppins inline-block w-[925px]">
         An interactive application displaying real-time visualization of user’s
        gaze, enhancing user engagement and providing a unique interactive
        experience.
      </div>
      <div className="absolute top-[238px] left-[60vh] text-[65px] font-semibold text-gainsboro ">
        FUN WINDOW
      </div>

      <div className="absolute top-[317px] left-[95px] text-6xl leading-[70px] font-semibold font-poppins text-center inline-block w-[1146px]">
        <span className="font-bold  !bg-clip-text [background:linear-gradient(90.06deg,_#f98888,_#e789e9_62.42%,_#845cf5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`Eye Tracking `}</span>
        <span>Revolutionized</span>
      </div>


      <div className="absolute hover:bg-white hover:text-black hover:cursor-pointer cursor top-[397px] left-[540px] rounded-[68.58px] box-border w-[200px] h-[65px] flex flex-row items-center justify-start py-[9.601852416992188px] px-[43.89418029785156px] gap-[0px_5.49px] text-center text-mini border-[1.1px] border-solid border-white">
       
       
        <div className=" relative leading-[19.2px] font-semibold whitespace-pre-wrap">
        
          <div>
          <span>       Try Now</span>
          </div>
        </div>
      </div>


      <div className="absolute top-[639px] left-[9px] bg-gray-500 w-[1271px] h-[70px] overflow-hidden text-whitesmoke">
        <div className="absolute top-[38px] left-[870px] w-[141px] h-8 flex flex-row items-start justify-start py-0 pr-[1130px] pl-0 box-border mix-blend-normal">
          <div className="w-[47px] rounded box-border h-8 flex flex-col items-center justify-center mix-blend-normal border-r-[1px] border-solid border-gray-100">
            <img
              className="w-[22px] relative h-[22px] overflow-hidden shrink-0 mix-blend-normal"
              alt=""
              src="/icon.svg"
            />
          </div>
          <img
            className="w-[47px] relative rounded h-8 mix-blend-normal"
            alt=""
            src="/link-flex.svg"
          />
          <img
            className="w-[47px] relative rounded h-8 mix-blend-normal"
            alt=""
            src="/link-flex1.svg"
          />
        </div>
        <div className="absolute top-[19px] left-[1011px] w-60 h-[46.8px] mix-blend-normal">
          <div className="absolute top-[30.4px] left-[149.9px] rounded w-[90px] flex flex-col items-start justify-center mix-blend-normal">
            <div className="relative leading-[15.4px] opacity-[0.36]">
              Privacy Policy
            </div>
          </div>
          <div className="absolute top-[30.4px] left-[9.1px] rounded w-[109px] flex flex-col items-start justify-center mix-blend-normal">
            <div className="relative leading-[15.4px] opacity-[0.36]">
              Terms of Service
            </div>
          </div>
          <div className="absolute top-[-1px] left-[207px] rounded w-[33px] flex flex-col items-start justify-center mix-blend-normal">
            <div className="relative leading-[15.4px] opacity-[0.36]">Docs</div>
          </div>
          <div className="absolute top-[-1px] left-[104.3px] rounded w-[71px] flex flex-col items-start justify-center mix-blend-normal">
            <div className="relative leading-[15.4px] opacity-[0.36]">
              Changelog
            </div>
          </div>
          <div className="absolute top-[-1px] left-[34.5px] rounded w-[38px] flex flex-col items-start justify-center mix-blend-normal">
            <div className="relative leading-[15.4px] opacity-[0.36]">Home</div>
          </div>
        </div>
        <div className="absolute top-[37px] left-[7px] leading-[20px] font-poppins text-white whitespace-pre-wrap opacity-[0.36]">
          Copyright EyePoint © All rights reserved.
        </div>
      </div>
    </div>
 
  )
}

export default Funwindow