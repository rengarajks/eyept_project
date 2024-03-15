import React from 'react'
import ContainerHeaderEyePoint from '../components/ContainerHeaderEyePoint'
import StarsCanvas from '../components/StarBackground.tsx'
import { Link } from 'react-router-dom'
import './app.css'


function Systemreq() {
  return (
    <div className="w-full bg-gray-200 h-[100vh]  overflow-hidden text-left text-xs text-white font-inter">
      
      
      <StarsCanvas/>
      <ContainerHeaderEyePoint/>



      <div className="flex flex-col items-center pt-5 ">
      
      <main className="z-10 p-10 mt-16 max-w-full rounded-3xl border border-black border-solid bg-blend-normal w-[1086px] max-md:px-5 max-md:mt-10 bg-slate-950">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 p-4" >
          <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full px-2.5">
            <div className="text-base leading-8 text-white capitalize max-md:mt-10">
              <h2 className="text-xl font-medium">
                System Compatibility Check:
              </h2>
              <br />
              To use our eye tracking platform, make sure your system meets
              these specifications:
              <ul class="list-disc">
                <li>
                  Operating System: Windows 8 or higher / Mac OS X 10.9 or
                  newer.
                </li>
                <li>
                  Hardware: Laptop/desktop with at 8 GB RAM and i3 5th Gen 2.2
                  GHz processor or better.
                </li>
                <li>
                  Browser: Google Chrome (version 81 & above) or another
                  compatible browser.{" "}
                </li>
                <li>Internet Connection: At least 2 Mbps of stable speed.</li>
                <li>
                  No VPN or Proxy: Turn off any VPN or proxy services before eye
                  tracking.
                </li>
                <li>
                  Screensaver and Updates: Disable screensaver, Windows updates,
                  and antivirus while eye tracking.
                </li>
                <li>
                  Screen Dimensions: Allow us to collect your screen dimensions
                  for accurate eye tracking.
                </li>
              </ul>
            </div>
          </section>
          <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full px-2.5">
            <div className="flex flex-col text-base text-white max-md:mt-10 max-md:max-w-full">
              <div className="leading-8 capitalize max-md:max-w-full">
                {" "}
                <h2 className="text-xl font-medium">Camera Permissions:</h2>
                <br />
                To begin eye tracking, please allow access to your camera.
                <br />{" "}
                <h2 className="text-xl font-medium">Camera Quality Check:</h2>
                <br />
                Assess the webcam's quality:
                <ul class="list-disc">
                  <li>
                    Resolution: Ensure it's at least 720p for clear eye
                    tracking.
                  </li>
                  <li>Frame Rate: Aim for 30 fps or higher.</li>
                  <li>
                    Focus and Clarity: Adjust your camera settings for optimal
                    clarity if needed.
                  </li>
                </ul>
              </div>
              <div className="self-center mt-36 leading-5 w-[314px] max-md:mt-10">
                When you are ready, click next to begin your session.
              </div>
            </div>
          </section>
        </div>
      </main>

      
      
      <div className='flex z-[20] w-1/2 justify-between'>
      <div>
      <Link to={'/funwindowcalib'} className='z-[20] text-white '>
      <div className="z-[20] mt-6 bg-white text-black hover:bg-black hover:text-white hover:cursor-pointer cursor  rounded-[68.58px] box-border w-[full] h-[65px] flex flex-row items-center justify-start py-[9.601852416992188px] px-[43.89418029785156px] gap-[0px_5.49px] text-center text-mini border-[1.1px] border-solid border-white">
       
       
        <div className=" relative leading-[19.2px] font-semibold whitespace-pre-wrap">
        
          <div>
          <span className='inline-block'>Back</span>
          </div>
        </div>

        
      </div>

      </Link>
      </div>


      <div>
      <Link to={'/instruction'} className='z-[20] text-white '>
      <div className="z-[20] mt-6 hover:bg-white hover:text-black hover:cursor-pointer cursor  rounded-[68.58px] box-border w-[full] h-[65px] flex flex-row items-center justify-start py-[9.601852416992188px] px-[43.89418029785156px] gap-[0px_5.49px] text-center text-mini border-[1.1px] border-solid border-white">
       
       
        <div className=" relative leading-[19.2px] font-semibold whitespace-pre-wrap">
        
          <div>
          <span className='inline-block'>Next</span>
          </div>
        </div>

        
      </div>

      </Link>

      </div>
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

export default Systemreq;