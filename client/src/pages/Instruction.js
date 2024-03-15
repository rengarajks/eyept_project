import React from 'react'
import ContainerHeaderEyePoint from '../components/ContainerHeaderEyePoint'
import StarsCanvas from '../components/StarBackground.tsx'
import { Link } from 'react-router-dom'
import './app.css'
const Instruction = () => {
  return (
    <div className="w-full bg-gray-200 h-[100vh]  overflow-hidden text-left text-xs text-white font-inter">
      
      
      <StarsCanvas/>
      <ContainerHeaderEyePoint/>



      <div className="flex flex-col items-center pt-5 ">
      <main className="flex flex-col self-center px-20 py-20 mt-[13vh] w-full rounded-3xl border border-black border-solid bg-blend-normal max-w-[1302px]  max-md:px-5 max-md:max-w-full bg-slate-950 z-[20]">
        <h1 className="text-xl font-medium text-white uppercase max-md:mr-2.5 max-md:max-w-full">
          Instructions:
        </h1>
        <div className="mt-3 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <InstructionsContent />
            <CameraSetupImage />
          </div>
        </div>
      </main>

      <div className='flex z-[20] w-1/2 justify-between '>
      <div className='z-[10]'>
      <Link to={'/systemreq'} className='z-[20] text-white '>
      <div className="z-[20] mt-6 bg-white text-black hover:bg-black hover:text-white hover:cursor-pointer cursor  rounded-[68.58px] box-border w-[full] h-[65px] flex flex-row items-center justify-start py-[9.601852416992188px] px-[43.89418029785156px] gap-[0px_5.49px] text-center text-mini border-[1.1px] border-solid border-white">
       
       
        <div className=" relative leading-[19.2px] font-semibold whitespace-pre-wrap">
        
          <div>
          <span className='inline-block'>Back</span>
          </div>
        </div>

        
      </div>

      </Link>
      </div>


      <div className='z-[10]'>
      <Link to={'/funwindowfinal'} className='z-[20] text-white '>
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
  );
};

const InstructionsContent = () => {
  return (
    <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full bg-slate">
      <p className="text-base leading-5 text-white max-md:mt-10 max-md:max-w-full ">
        <ul class="list-disc" ><li> Position the camera at eye level to ensure a clear view of your
        face. </li>
        <li> Make sure the camera is directly facing you, without any
        obstructions.</li>
        <li> Choose a well-lit room with consistent lighting to avoid shadows
        or uneven illumination.</li>
        <li> Avoid sitting with your back to a window or bright light source
        to prevent backlighting issues.</li>
        <li> Ensure there are no reflective surfaces in the camera's view,
        such as mirrors or glossy surfaces.</li>
        <li> Keep your face visible and unobstructed throughout the
        proctoring session.</li>
        <li> Avoid covering your face with hands, objects, or clothing.</li>
        <li> Test the camera angle and lighting conditions before the
        proctoring session to ensure optimal visibility.</li>
        <li> If using an external webcam, securely attach it to your monitor
        or laptop to prevent it from moving during the session.</li>
        <li> Adjust the camera settings, if necessary, to enhance image
        clarity and quality.</li>
        <li> Lastly, follow any additional instructions provided by the
        service provider for optimal camera setup.</li>
        <br />
        <p>Following these guidelines will help ensure that your camera is
        set up correctly for effective Eye Tracking.</p>
     </ul> 
     </p>
    </section>
  );
};

const CameraSetupImage = () => {
  return (
    <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex gap-5 justify-between self-stretch pr-1.5 my-auto max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div
          className="shrink-0 max-w-full bg-zinc-300 bg-opacity-90 h-[369px] rounded-[50px] w-[551px]"
          aria-hidden="true"
        ></div>
      </div>
    </section>
  );
};

export default Instruction;