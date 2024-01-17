import React from "react";
import CountUp from "react-countup";

const SummaryCard = ({ summary }) => {
  const { title, icon, count, ext } = summary;
  return (
    <div className="py-6 px-4 rounded-lg bg-btn shadow-3xl text-center cursor-pointer">
      <div className="stat">
        <div className="text-primary">{icon}</div>
        <div className="text-base font-medium py-4">
          <CountUp
            start={0}
            end={count}
            duration={2.75}
            separator=" "
            decimal=","
          />
          {ext && ext}
        </div>
        <div className="text-xl font-medium">{title}</div>
      </div>
    </div>
  );
};

export default SummaryCard;
