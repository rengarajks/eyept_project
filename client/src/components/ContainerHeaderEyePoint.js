import {Link} from 'react-router-dom'

const ContainerHeaderEyePoint = () => {
 


  return (
    <>
    

    <div className="fixed z-20 right-[10px] left-[2px] top-[14px] rounded-31xl [background:linear-gradient(159.65deg,_#3d3d46,_#222228)] [backdrop-filter:blur(35px)] box-border w-[1252px] h-[62px] opacity-[0.2] mix-blend-normal border-[1px] border-solid border-black xl:w-full " />

    <div className="flex justify-between items-center fixed z-40 top-[0] mt-4 w-full h-[52px] overflow-hidden  text-7xs text-white font-inter     ">
      
      
     

     <div className='p-6'>
     <Link to={'/'} className='text-white'>
     <div className=" w-[103px] " >
       
        <b className="text-sm inline-block font-lexend ]">
          <span>EYEP</span>
          <span className="text-violet">O</span>
          <span>INT</span>
        </b>

        <div className="inline-block">
          Eye Tracking Technology
        </div>
      </div>

     </Link>
     </div>




      <div className="flex flex-row items-center justify-start gap-[0px_26px] text-center text-3xs font-poppins   ">
        
        <Link to={'/funwindow'} className='text-white'>
        <b className="inline-block shrink-0 cursor-pointer">
          Fun Window
        </b>
        </Link>


        <Link to={'/onlinetest'} className='text-white'>
        <b className="inline-block shrink-0 cursor-pointer">
          Online Test
        </b>
        </Link>
        
        <b className="relative leading-[24px]">Home</b>
        <b className=" leading-[24px] inline-block shrink-0">
          Contact
        </b>
        <b className="leading-[24px] flex items-center justify-center shrink-0">
          About
        </b>
      </div>


      
      
        <div className=" flex flex-row items-start justify-start p-12 box-border">
          <img className="w-5 relative h-5" alt="" src="/vector.svg" />
        </div>
      


    </div>
    </>
  );
};

export default ContainerHeaderEyePoint;
