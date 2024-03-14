
import ContainerHeaderEyePoint from "../components/ContainerHeaderEyePoint";
import StarsCanvas from '../components/StarBackground.tsx'

import Footer from '../components/Footer'

import React, { useEffect } from 'react'
import '../pages/app.css'
import '../global.css'


const Funwindowfinalpage = () => {

  useEffect(()=>{

    const cursor = document.getElementById('cursor');

  // Function to move the cursor to the specified coordinates
  function moveCursor(x, y) {
    cursor.style.transform = `translate(${x}px, ${y}px)`;
  }

  // Function to continuously update the cursor position
  function animateCursor() {
    // Example: Move cursor in a circle
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const radius = 100;
    const angle = Date.now() / 1000; // Adjust speed of movement

    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;

    moveCursor(x, y);

    // Request next frame
    requestAnimationFrame(animateCursor);
  }

  // Start the animation loop
  animateCursor();

  },[])
  return (

    <>
    <div className=" flex flex-col h-full w-full " >
    <video
      autoPlay
      muted
      loop
      className=" absolute top-[-0px]  h-full w-full left-0 z-[1] object-cover "
    >
      <source src="/blackhole.webm" type="video/webm" />
    </video>
  
  </div>
    <div className="w-full relative bg-gray-200 h-[6300px] overflow-hidden text-center text-mini text-white font-poppins">

   


      


     
      <ContainerHeaderEyePoint />
      

      

      <div className="flex flex-col relative top-[30vh] text-[50px] z-20  ">
        
          <p className="m-0 ">Precision Unveiled</p>
          <p className="m-0">
            <span className=" font-semibold !bg-clip-text [background:linear-gradient(90deg,_#f98888,_#e789e9_60%,_#845cf5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Eye Tracking
            </span>
            <span className="text-white"> Excellence</span>
          </p>
          
        </div>

        <div id="cursor" className="z-[40]"></div>
    


      
      <div className="relative top-[320px]  text-[11px] leading-[60px] inline-block z-40 ">
         An interactive application displaying real-time visualization of user’s
        gaze, enhancing user engagement and providing a unique interactive
        experience.
      </div>



      <div className="z-[10] absolute top-[740px] p-14 px-28 rounded-t-41xl rounded-b-none  box-border mx-80 h-[397px]  text-left text-xl text-lightslategray border-t-[2px] border-solid border-violet border-r-[2px] border-l-[2px]  ">
        
        <div className="  mix-blend-normal text-whitesmoke font-inter">
         
            <b className=" leading-[31.2px]">EYEPOINT</b>
          </div>
      

        <div className="text-mini leading-[20px] font-semibold">
          Track your screen with your eyes via webcam.
        </div>
        <div className="text-[13px] leading-[28px] inline-block   h-[183px] ">
          EyePoint is an advanced eye-tracking software that revolutionizes user
          interaction byenabling precise mapping of a user's gaze onto a
          computer monitor. Utilizing cutting-edge Al algorithms, EyePoint is
          adept at real-time iris tracking, even with standard webcams, making
          it a cost-effective alternative to more expensive systems. Its
          adaptability to various camera setups and lighting conditions,
          combined with an intuitive web-based calibration tool, ensures ease of
          use and consistent performance across diverse user environments. The
          'Fun Window’ feature enhances user engagement with real-time gaze
          visualization, while robust data security measures safeguard user
          privacy. Designed for cross-platform compatibility, EyePoint's
          versatile applications range from enhancing userexperience in
          interactive learning to providing insights in user behavior research.
          Itsunique blend of precision, affordability, and user-centric design
          positions EyePoint as atransformative tool in the eye-tracking
          technology landscape, making advanced gaze tracking accessible for a
          wide array of applications.
        </div>
      </div>



      


      <div className="">

        
      <div className="z-[10] relative top-[1200px]  text-23xl leading-[130px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f98888,_#e789e9_60%,_#845cf5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] ">
        
        <div>
        Key Features
        </div>
      </div>


      <div className="z-[10] relative top-[1253px] left-[2%] px-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg: xl:grid-cols-2  2xl:grid-cols-4 2xl:gap-4 2xl:mr-80    xl:gap-20 lg:gap-20 md:gap-20 sm:gap-20 xl:left-[10%] lg:left-[10%] md:left-[5%] sm:left-[20%]">










      <div className="  w-[274px] h-[318px] text-left text-lg rounded-70xl shadow-[0px_4px_4px_#fff] box-border w-[348px] h-[320.7px] border-[1px] border-solid border-black p-8 pt-20   hover:opacity-90 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500  hover:transition hover:duration-[1s] hover:ease-in-out">

         <img className="relative w-[30%] h-[40%] bottom-[48%] right-[0] max-w-full overflow-hidden max-h-full" alt="" src="/neural-network.svg"/>


          <div className="relative bottom-[40%]">
           <div className=" left-[26.5px] leading-[24px] font-semibold flex items-center w-[235.1px]">
             Advance Iris Tracking
              </div>

  
  
           <div className=" left-[25.9px] text-mini leading-[30px] font-light text-gray-300 flex items-center w-[242.2px] mt-6 h-[114.6px]">
           AI Engine powers the eye tracking software to understand and respond
          to users' gaze behavior with accuracy.
           </div> </div>
      

           </div>







           <div className="  w-[274px] h-[318px] text-left text-lg rounded-70xl shadow-[0px_4px_4px_#fff] box-border w-[348px] h-[320.7px] border-[1px] border-solid border-black p-8 pt-20   hover:opacity-90 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500  hover:transition hover:duration-[1s] hover:ease-in-out">

         <img className="relative w-[30%] h-[40%] bottom-[48%] right-[0] max-w-full overflow-hidden max-h-full" alt="" src="/vector.svg"/>


          <div className="relative bottom-[40%]">
           <div className=" left-[26.5px] leading-[24px] font-semibold flex items-center w-[235.1px]">
           Real - time Gaze Mapping
              </div>

  
  
           <div className=" left-[25.9px] text-mini leading-[30px] font-light text-gray-300 flex items-center w-[242.2px] mt-6 h-[114.6px]">
           Capable of calculating the exact point on the monitor being looked at
          within predefined x,y axis boundaries
           </div> </div>
      

           </div>









           <div className="  w-[274px] h-[318px] text-left text-lg rounded-70xl shadow-[0px_4px_4px_#fff] box-border w-[348px] h-[320.7px] border-[1px] border-solid border-black p-8 pt-20   hover:opacity-90 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500  hover:transition hover:duration-[1s] hover:ease-in-out">

<img className="relative w-[30%] h-[40%] bottom-[48%] right-[0] max-w-full overflow-hidden max-h-full" alt="" src="/neural-network.svg"/>


 <div className="relative bottom-[40%]">
  <div className=" left-[26.5px] leading-[24px] font-semibold flex items-center w-[235.1px]">
  Interactive Eye Movement Display
     </div>



  <div className=" left-[25.9px] text-mini leading-[30px] font-light text-gray-300 flex items-center w-[242.2px] mt-6 h-[114.6px]">
  Provides an engaging and dynamic display feature for visualizing eye tracking in 
real - time
  </div> </div>


  </div>















  <div className="  w-[274px] h-[318px] text-left text-lg rounded-70xl shadow-[0px_4px_4px_#fff] box-border w-[348px] h-[320.7px] border-[1px] border-solid border-black p-8 pt-20   hover:opacity-90 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500  hover:transition hover:duration-[1s] hover:ease-in-out">

<img className="relative w-[30%] h-[40%] bottom-[48%] right-[0] max-w-full overflow-hidden max-h-full" alt="" src="/multiple-devices@2x.png"/>


 <div className="relative bottom-[40%]">
  <div className=" left-[26.5px] leading-[24px] font-semibold flex items-center w-[235.1px]">
  Cross-Platform Functionality
     </div>



  <div className=" left-[25.9px] text-mini leading-[30px] font-light text-gray-300 flex items-center w-[242.2px] mt-6 h-[114.6px]">
  Ensures compatibility with various devices and operating systems,
          extending usability
  </div> </div>


  </div>



















          
      </div>


      



      



      
      





      </div>











      <div className="absolute top-[2600px]  w-full flex justify-between items-center z-[10] ">
      
      <div className="mx-[50vh] opacity-100 hover:opacity-50">
      <b className="  text-[34px]">
        <span>{`“Unlock the possibilities with `}</span>
        <span className="text-yellowgreen">Precision</span>
        <span> Gaze Tracking”</span>
      </b>
      </div>
      </div>



      


      


      

 
      
      <div className="absolute top-[3079px] 2xl:left-[65vh] xl:left-[50vh] lg:left-[30vh]  md:left-[15vh] w-[744px] h-[837px] text-left text-6xl">
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/q97c536f9png@2x.png"
        />
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/divlazybackgroundimagemaskgroup@2x.png"
        />
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/divlazybackgroundimagemaskgroup@2x.png"
        />
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/divlazybackgroundimagemaskgroup@2x.png"
        />
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/divlazybackgroundimagemaskgroup@2x.png"
        />
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/divlazybackgroundimagemaskgroup@2x.png"
        />
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/divlazybackgroundimagemaskgroup@2x.png"
        />


        <div className="absolute top-[127px] left-[-21px] w-[794px] h-[583px] opacity-100  z-[10]">

          <div className="hover:opacity-50 absolute top-[0px] left-[420px] w-[372px] flex flex-col items-start justify-start gap-[9px_0px]">
            <div className="w-[50px] relative h-[50px]">
              <div className=" absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(125.84deg,_#ff9898,_#8054ff)] w-[50px] h-[50px]" />
              <div className="absolute top-[20px] left-[calc(50%_-_5.4px)] leading-[20px] font-black flex items-center w-2.5 h-2.5">
                1
              </div>
            </div>
            <div className="relative text-xl font-medium">
              Capture Gaze Data
            </div>
            <div className="self-stretch relative text-mini font-light">
              Employs cutting-edge algorithms for precise, real-time tracking of
              iris movement.
            </div>
          </div>


          <div className="hover:opacity-50 absolute top-[173px] left-[0px] w-[370px] h-[164px] text-mini">
            <div className="absolute top-[95px] left-[0px] font-light text-center inline-block w-[370px]">
              The collected data is processed by advanced algorithms and
              software to interpret the user's gaze behavior.
            </div>
            <div className="absolute top-[59px] left-[191px] text-xl font-medium">
              Data Processing
            </div>
            <div className="absolute top-[0px] left-[305px] w-[50px] h-[50px] text-6xl">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(125.84deg,_#ff9898,_#8054ff)] w-[50px] h-[50px]" />
              <div className="absolute top-[15px] left-[calc(50%_-_7.4px)] leading-[20px] font-black flex items-center w-[15px]">
                2
              </div>
            </div>
          </div>



          <div className="hover:opacity-50 absolute top-[351px] left-[422px] w-[372px] flex flex-col items-start justify-start gap-[9px_0px]">
            <div className="w-[50px] relative h-[50px]">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(125.84deg,_#ff9898,_#8054ff)] w-[50px] h-[50px]" />
              <div className="absolute top-[15px] left-[calc(50%_-_7.4px)] leading-[20px] font-black">
                3
              </div>
            </div>
            <div className="relative text-xl font-medium">Visualization</div>
            <div className="self-stretch relative text-mini font-light">
              Provides an engaging and dynamic display feature for visualizing
              eye-tracking in real-time.
            </div>
          </div>
          <img
            className="absolute top-[14px] left-[383px] w-[13px] h-[569px]"
            alt=""
            src="/group-218.svg"
          />
          <div className="absolute top-[-190px] left-[104px] text-61xl font-bold  !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_#d16ba5,_#86a8e7_50.5%,_#5ffbf1_99.08%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] ">
            How it Works
          </div>
        </div>
      </div>

      <div className="z-[10] relative top-[4600px]   p-12 xl:px-82 hover:opacity-50">
      <div className="xl:w-1/2 2xl:w-1/2 lg:ml-[10vh] xl:ml-[50vh] 2xl:ml-[50vh] text-41xl leading-[130px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(180deg,_#f98888,_#845cf5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] ">
        Embark on a journey of discovery in Eye Tracking Solutions with us!
      </div>

      </div>
      


      <div className=" relative top-[3500px]  text-23xl leading-[130px] font-semibold  z-[10]">
        
        <div >
        <span className="opacity-25 hover:opacity-100 ">Simply explore the demo window to see the Fun Window in  </span>

        <span className="font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f98888,_#e789e9_60%,_#845cf5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] "> Action.</span>
        </div>
      </div>
      
      
      <Footer/>
      
     
    </div>

    
    <StarsCanvas/>
    </>

  );
};

export default Funwindowfinalpage;
