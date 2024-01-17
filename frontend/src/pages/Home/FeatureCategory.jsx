import React from "react";
import shawl from "../../assets/images/feature/shawl.png";
import saree from "../../assets/images/feature/shree.png";
import Sanjabi from "../../assets/images/feature/panjabi.jpg";
import couple_set from "../../assets/images/feature/couple_set.png";
import kurti from "../../assets/images/feature/kurte.png";
import part from "../../assets/images/feature/urna.jpg";
const FeatureCategory = () => {
  return (
    <div className="feturecategroy-container mx-auto  w-full">
      {category.map((cat) => (
        <div key={cat.id} className="featurecategory-card mx-auto">
          <img className="max-h-[80px] rounded-md" src={cat.image} alt="" />
          <h4 className="featurecategory-title">{cat.title}</h4>
        </div>
      ))}
    </div>
  );
};
const category = [
  {
    id: 1,
    title: "Shawl",
    image: shawl,
  },
  {
    id: 2,
    title: "Saree",
    image: saree,
  },
  {
    id: 3,
    title: "Panjabi",
    image: Sanjabi,
  },
  {
    id: 4,
    title: "Couple set",
    image: couple_set,
  },
  {
    id: 5,
    title: "Kurti",
    image: kurti,
  },
  {
    id: 6,
    title: "Urna",
    image: part,
  },
];
export default FeatureCategory;
