import { useMemo } from "react";

const Default = ({
  itemNumber,
  showDiv,
  defaultWidth,
  defaultHeight,
  defaultPosition,
  defaultTop,
  defaultLeft,
}) => {
  const defaultStyle = useMemo(() => {
    return {
      width: defaultWidth,
      height: defaultHeight,
      position: defaultPosition,
      top: defaultTop,
      left: defaultLeft,
    };
  }, [defaultWidth, defaultHeight, defaultPosition, defaultTop, defaultLeft]);

  return (
    <div
      className="w-[166px] h-[99px] text-left text-101xl font-kadwa"
      style={defaultStyle}
    >
      {showDiv && (
        <div className="absolute h-full w-full top-[0%] left-[0%] leading-[30px] text-transparent !bg-clip-text [background:linear-gradient(180deg,_rgba(140,_149,_159,_0.5),_rgba(83,_83,_93,_0.5))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center">
          {itemNumber}
        </div>
      )}
    </div>
  );
};

export default Default;
