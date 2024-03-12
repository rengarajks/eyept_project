import { useCallback } from "react";

const ContainerHeaderEyePoint = () => {
  const onFunWindowTextClick = useCallback(() => {
    // Please sync "Fun window page" to the project
  }, []);

  const onOnlineTestTextClick = useCallback(() => {
    // Please sync "Online test page" to the project
  }, []);

  return (
    <div className=" fixed z-40 top-[10px] left-[36px] w-full h-[52px] overflow-hidden text-left text-7xs text-white font-inter">
      <div className="absolute top-[13.5px] left-[31px] bg-gray-500 w-[103px] h-[25px] overflow-hidden">
        <div className="absolute top-[17px] left-[1px] tracking-[0.04em] font-extralight inline-block w-[94px]">
          Eye Tracking Technology
        </div>
        <b className="absolute top-[0px] left-[0px] text-sm inline-block font-lexend w-[91px]">
          <span>EYEP</span>
          <span className="text-violet">O</span>
          <span>INT</span>
        </b>
      </div>
      <div className="absolute top-[14px] left-[445px] flex flex-row items-center justify-start gap-[0px_21px] text-center text-3xs font-poppins">
        <b
          className="w-[85px] relative inline-block shrink-0 cursor-pointer"
          onClick={onFunWindowTextClick}
        >
          Fun Window
        </b>
        <b
          className="w-[78px] relative inline-block shrink-0 cursor-pointer"
          onClick={onOnlineTestTextClick}
        >
          Online Test
        </b>
        <b className="relative leading-[24px]">Home</b>
        <b className="w-12 relative leading-[24px] inline-block shrink-0">
          Contact
        </b>
        <b className="w-[39px] relative leading-[24px] flex items-center justify-center shrink-0">
          About
        </b>
      </div>
      <div className="absolute top-[3px] left-[997px] bg-gray-500 w-[221px] h-[46px] overflow-hidden">
        <div className="absolute top-[4px] left-[140px] w-[34px] flex flex-row items-start justify-start p-2.5 box-border">
          <img className="w-5 relative h-5" alt="" src="/vector.svg" />
        </div>
      </div>
    </div>
  );
};

export default ContainerHeaderEyePoint;
