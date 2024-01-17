import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faFlagCheckered,
  faPeopleGroup,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import SummaryCard from "../../components/card/SummaryCard.jsx";
const Summary = () => {
  const summarys = [
    {
      _id: 1,
      title: "Anual Revinue",
      icon: (
        <>
          <FontAwesomeIcon className={"text-4xl"} icon={faChartLine} />
        </>
      ),
      count: 94,
      ext: "M+",
    },
    {
      _id: 2,
      title: "Connect Across People",
      icon: (
        <>
          <FontAwesomeIcon className={"text-4xl"} icon={faPeopleGroup} />
        </>
      ),
      count: 25,
      ext: "M+",
    },
    {
      _id: 3,
      title: "Country",
      icon: (
        <>
          <FontAwesomeIcon className={"text-4xl"} icon={faFlagCheckered} />
        </>
      ),
      count: 74,
      ext: "+",
    },
    {
      _id: 4,
      title: "Feedbacks",
      icon: (
        <>
          <FontAwesomeIcon className={"text-4xl"} icon={faStar} />
        </>
      ),
      count: 530,
      ext: "+",
    },
  ];
  return (
    <div className="container py-24 lg:py-28">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {summarys.map((summary) => (
          <SummaryCard key={summary._id} summary={summary} />
        ))}
      </div>
    </div>
  );
};

export default Summary;
