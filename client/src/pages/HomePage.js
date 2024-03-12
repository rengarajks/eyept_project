import ContainerHeaderEyePoint from "../components/ContainerHeaderEyePoint";
import Default from "../components/Default";
import Property1Default from "../components/Property1Default";

const HomePage = () => {
  return (
    <div className="w-full relative bg-gray-200 h-[7000px] overflow-hidden text-center text-mini text-white font-poppins">
      <img
        className="absolute w-[calc(100%_+_52px)] top-[258px] right-[-71px] left-[19px] max-w-full overflow-hidden h-[720px] object-cover"
        alt=""
        src="/image@2x.png"
      />
      <img
        className="absolute top-[166px] left-[279px] w-[1440px] h-[810px] object-cover hidden"
        alt=""
        src="/divheroblackholemaskgroup@2x.png"
      />
      <div className="fixed  top-[px] left-[14px] rounded-31xl [background:linear-gradient(159.65deg,_#3d3d46,_#222228)] [backdrop-filter:blur(35px)] box-border w-[1252px] h-[62px] opacity-[0.2] mix-blend-normal border-[1px] border-solid border-black" />
      <ContainerHeaderEyePoint />
      <div className="absolute top-[232px] left-[266px] w-[783px] h-[184px] text-[40px]">
        <div className="absolute top-[37px] left-[128px] tracking-[0.11em] leading-[55px]">
          <p className="m-0">Precision Unveiled</p>
          <p className="m-0">
            <span className=" font-semibold !bg-clip-text [background:linear-gradient(90deg,_#f98888,_#e789e9_60%,_#845cf5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Eye Tracking
            </span>
            <span className="text-white"> Excellence</span>
          </p>
        </div>
      </div>
      <div className="absolute top-[386px] left-[256px] text-[11px] leading-[60px] text-left inline-block w-[841px]">
         An interactive application displaying real-time visualization of user’s
        gaze, enhancing user engagement and providing a unique interactive
        experience.
      </div>
      <div className="absolute top-[618px] left-[189px] rounded-t-41xl rounded-b-none bg-gray-200 box-border w-[912px] h-[497px]  text-left text-xl text-lightslategray border-t-[2px] border-solid border-violet border-r-[2px] border-l-[2px]">
        <div className="absolute top-[67px] left-[88px] w-[354px] h-12 mix-blend-normal text-whitesmoke font-inter">
          <div className="absolute top-[0px] left-[0px] w-[123px] h-6 flex flex-col items-start justify-start pt-0 pb-[7979.421875px] pr-[0.0001250000059371814px] pl-0 box-border mix-blend-normal">
            <b className="relative leading-[31.2px]">EYEPOINT</b>
          </div>
        </div>
        <div className="absolute top-[101px] left-[87px] text-mini leading-[20px] font-semibold">
          Track your screen with your eyes via webcam.
        </div>
        <div className="absolute top-[121px] left-[89px] text-[13px] leading-[28px] inline-block w-[721px] h-[183px]">
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
      <div className="absolute top-[1345px] left-[489px] text-23xl leading-[130px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f98888,_#e789e9_60%,_#845cf5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center justify-center w-[323px] h-[45px]">
        Key Features
      </div>
      <div className="absolute top-[1453px] left-[304px] w-[274px] h-[318px] text-left text-lg">
        <div className="absolute top-[35.1px] left-[0px] rounded-70xl shadow-[0px_4px_4px_#fff] box-border w-[348px] h-[320.7px] border-[1px] border-solid border-black" />
        <div className="absolute top-[122.6px] left-[26.5px] leading-[24px] font-semibold flex items-center w-[235.1px]">
          Advance Iris Tracking
        </div>
        <div className="absolute top-[177.2px] left-[25.9px] text-mini leading-[30px] font-light text-gray-300 flex items-center w-[242.2px] h-[114.6px]">
          AI Engine powers the eye tracking software to understand and respond
          to users' gaze behavior with accuracy.
        </div>
        <img
          className="absolute h-[22.01%] w-[25.55%] top-[11.01%] right-[64.6%] bottom-[66.98%] left-[9.85%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/neural-network.svg"
        />
      </div>
      <div className="absolute top-[1451px] left-[704px] w-[274px] h-80 text-left text-lg">
        <div className="absolute top-[37.4px] left-[0px] rounded-70xl shadow-[0px_4px_4px_#fff] box-border w-[348px] h-[320.7px] border-[1px] border-solid border-black" />
        <div className="absolute top-[104.9px] left-[27.5px] leading-[24px] font-semibold flex items-center w-[235.1px] h-[61.1px]">
          Real - time Gaze Mapping
        </div>
        <div className="absolute top-[179.5px] left-[25.9px] text-mini leading-[30px] font-light text-gray-300 flex items-center w-[232.8px] h-[114.6px]">
          Capable of calculating the exact point on the monitor being looked at
          within predefined x,y axis boundaries
        </div>
        <img
          className="absolute h-[21.88%] w-[25.55%] top-[9.38%] right-[64.23%] bottom-[68.75%] left-[10.22%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
        <Default
          itemNumber="02"
          showDiv={false}
          defaultWidth="130.1px"
          defaultHeight="75.6px"
          defaultPosition="absolute"
          defaultTop="265px"
          defaultLeft="217.9px"
        />
      </div>
      <div className="absolute top-[1865px] left-[304px] w-[274px] h-[322px] text-left text-lg">
        <div className="absolute top-[39.7px] left-[0px] rounded-70xl shadow-[0px_4px_4px_#fff] box-border w-[348px] h-[320.7px] border-[1px] border-solid border-black" />
        <div className="absolute top-[97.2px] left-[25.5px] leading-[24px] font-semibold flex items-center w-[235.1px] h-[61.1px]">
          Interactive Eye Movement Display
        </div>
        <div className="absolute top-[181.8px] left-[25.9px] text-mini leading-[30px] font-light text-gray-300 flex items-center w-[242.2px] h-[91.6px]">
          <span className="w-full">
            <p className="m-0">{`Provides an engaging and dynamic display feature for visualizing eye tracking in `}</p>
            <p className="m-0">real - time</p>
          </span>
        </div>
        <img
          className="absolute h-[21.74%] w-[25.55%] top-[8.39%] right-[64.96%] bottom-[69.88%] left-[9.49%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/neural-network.svg"
        />
      </div>
      <div className="absolute top-[1865px] left-[704px] w-[274px] h-[322px] text-left text-lg">
        <div className="absolute top-[38.9px] left-[0px] rounded-70xl shadow-[0px_4px_4px_#fff] box-border w-[348px] h-[320.7px] border-[1px] border-solid border-black" />
        <div className="absolute top-[95.4px] left-[25.5px] leading-[24px] font-semibold flex items-center w-[235.1px] h-[61.1px]">
          Cross-Platform Functionality
        </div>
        <div className="absolute top-[167px] left-[26px] text-mini leading-[30px] font-light text-gray-300 flex items-center w-[232.8px] h-[91.6px]">
          Ensures compatibility with various devices and operating systems,
          extending usability
        </div>
        <img
          className="absolute top-[25px] left-[26px] w-[70px] h-[70px] object-cover"
          alt=""
          src="/multiple-devices@2x.png"
        />
      </div>
      <b className="absolute top-[3616px] left-[170px] text-[32px] tracking-[0.02em] text-left">
        <span>{`“Unlock the possibilities with `}</span>
        <span className="text-yellowgreen">Precision</span>
        <span> Gaze Tracking”</span>
      </b>
      <img
        className="absolute top-[2683px] left-[507px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/webcam@2x.png"
      />
      <div className="absolute top-[2755px] left-[471px] tracking-[-0.02em] font-light font-rubik flex items-center justify-center w-[111px] h-[61px]">
        Webcam
      </div>
      <img
        className="absolute top-[2665px] left-[488px] rounded-3xs w-[90px] h-[90px]"
        alt=""
        src="/rectangle-85.svg"
      />
      <div className="absolute top-[2755px] left-[686px] tracking-[-0.02em] font-light font-rubik flex items-center justify-center w-[111px] h-[61px]">
        Internet
      </div>
      <img
        className="absolute top-[2665px] left-[697px] rounded-3xs w-[90px] h-[90px]"
        alt=""
        src="/rectangle-85.svg"
      />
      <img
        className="absolute top-[2683px] left-[717px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/internet@2x.png"
      />
      <div className="absolute top-[2962px] left-[330px] text-23xl leading-[130px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f98888,_#e789e9_60%,_#845cf5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center justify-center w-[631px]">
        Features
      </div>
      <div className="absolute top-[2484px] left-[319px] text-23xl leading-[130px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f98888,_#e789e9_60%,_#845cf5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center justify-center w-[631px]">
        System Requirements
      </div>
      <div className="absolute top-[3283px] left-[78px] leading-[24px] flex items-center justify-center w-[172px] h-[61px]">
        Real-time Gaze Visualization
      </div>
      <img
        className="absolute top-[3186px] left-[112px] rounded-3xs w-[90px] h-[90px]"
        alt=""
        src="/rectangle-85.svg"
      />
      <img
        className="absolute top-[3186px] left-[692px] rounded-3xs w-[90px] h-[90px]"
        alt=""
        src="/rectangle-85.svg"
      />
      <img
        className="absolute top-[3181px] left-[999px] rounded-3xs w-[90px] h-[90px]"
        alt=""
        src="/rectangle-85.svg"
      />
      <img
        className="absolute top-[3181px] left-[864px] rounded-3xs w-[90px] h-[90px]"
        alt=""
        src="/rectangle-85.svg"
      />
      <img
        className="absolute top-[3186px] left-[510px] rounded-3xs w-[90px] h-[90px]"
        alt=""
        src="/rectangle-85.svg"
      />
      <div className="absolute top-[3284px] left-[286px] leading-[24px] flex items-center justify-center w-[203px] h-[61px]">
        Pixel Highlighting Animation
      </div>
      <div className="absolute top-[3292px] left-[939px] leading-[24px] flex items-center justify-center w-[203px] h-[61px]">
        Compatibility with Different Screen Resolutions
      </div>
      <div className="absolute top-[3283px] left-[841px] leading-[24px] flex items-center justify-center w-[157px] h-[61px]">
        Free head movements
      </div>
      <div className="absolute top-[3284px] left-[644px] leading-[24px] flex items-center justify-center w-[203px] h-[61px]">
        User-Customizable Fun Window Themes
      </div>
      <div className="absolute top-[3296px] left-[475px] leading-[24px] flex items-center w-[157px] h-[61px]">
        <span className="w-full">
          <p className="m-0">Interactive Calibration Check</p>
        </span>
      </div>
      <img
        className="absolute top-[3186px] left-[340px] rounded-3xs w-[90px] h-[90px]"
        alt=""
        src="/rectangle-85.svg"
      />
      <img
        className="absolute top-[3201px] left-[132px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/look@2x.png"
      />
      <img
        className="absolute top-[3206px] left-[360px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/marker-pen@2x.png"
      />
      <img
        className="absolute top-[3206px] left-[528px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/my-location@2x.png"
      />
      <img
        className="absolute top-[3206px] left-[708px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/paint-roller@2x.png"
      />
      <img
        className="absolute top-[3196px] left-[882px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/human-head@2x.png"
      />
      <img
        className="absolute top-[3198px] left-[1019px] w-[50px] h-[50px] object-cover"
        alt=""
        src="/monitor@2x.png"
      />
      <div className="absolute top-[4079px] left-[309px] w-[744px] h-[837px] text-left text-6xl">
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
        <div className="absolute top-[127px] left-[-21px] w-[794px] h-[583px]">
          <div className="absolute top-[0px] left-[420px] w-[372px] flex flex-col items-start justify-start gap-[9px_0px]">
            <div className="w-[50px] relative h-[50px]">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(125.84deg,_#ff9898,_#8054ff)] w-[50px] h-[50px]" />
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
          <div className="absolute top-[173px] left-[0px] w-[370px] h-[164px] text-mini">
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
          <div className="absolute top-[351px] left-[422px] w-[372px] flex flex-col items-start justify-start gap-[9px_0px]">
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
          <div className="absolute top-[-190px] left-[104px] text-61xl font-black text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_#d16ba5,_#86a8e7_50.5%,_#5ffbf1_99.08%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]">
            How it Works
          </div>
        </div>
      </div>
      <div className="absolute top-[6223px] left-[220px] text-41xl leading-[130px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(180deg,_#f98888,_#845cf5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center justify-center w-[826px]">
        Embark on a journey of discovery in Eye Tracking Solutions with us!
      </div>
      <Property1Default
        property1DefaultWidth="886px"
        property1DefaultPosition="absolute"
        property1DefaultTop="5217px"
        property1DefaultLeft="190px"
        simplyExploreTheContainerFontSize="60px"
      />
      <img
        className="absolute top-[5624px] left-[339px] rounded-31xl w-[588px] h-[351px]"
        alt=""
        src="/video.svg"
      />
      <div className="absolute top-[6923px] left-[9px] bg-gray-500 w-[1200px] h-[70px] overflow-hidden text-left text-xs text-whitesmoke font-inter">
        <div className="absolute top-[38px] left-[782px] w-[141px] h-8 flex flex-row items-start justify-start py-0 pr-[1130px] pl-0 box-border mix-blend-normal">
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
            src="/link-flex.svg"
          />
        </div>
        <div className="absolute top-[19px] left-[935px] w-60 h-[46.8px] mix-blend-normal">
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
  );
};

export default HomePage;
