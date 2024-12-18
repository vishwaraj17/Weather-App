import React from "react";

const MeasureCard = ({ classes, value, measure }) => {
  return (
    <>
      <div
        className={`w-28 flex-grow xsm:w-full p-2 xsm:p-5 rounded-3xl flex flex-col gap-1 items-center justify-center ${classes}`}
      >
        <p className="text-sm">{measure}</p>
        <h3 className="font-medium text-lg">{value}</h3>
      </div>
    </>
  );
};

export default MeasureCard;
