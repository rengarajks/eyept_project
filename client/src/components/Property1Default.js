import { useMemo } from "react";

const Property1Default = ({
  property1DefaultWidth,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  simplyExploreTheContainerFontSize,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      width: property1DefaultWidth,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultWidth,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  const simplyExploreTheContainerStyle = useMemo(() => {
    return {
      fontSize: simplyExploreTheContainerFontSize,
    };
  }, [simplyExploreTheContainerFontSize]);

  return (
    <div
      className="w-[1180px] h-[300px] text-center text-61xl text-gray-400 font-poppins"
      style={property1DefaultStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
        <div
          className="absolute w-full top-[0%] left-[0%] leading-[100px] font-semibold inline-block"
          style={simplyExploreTheContainerStyle}
        >
          <span>Simply explore the demo window to see the Fun Window in</span>
          <span className="text-white">{` `}</span>
          <span className="font-semibold !bg-clip-text [background:linear-gradient(90.03deg,_#f98888,_#e789e9_59%,_#845cf5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Action.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Property1Default;
