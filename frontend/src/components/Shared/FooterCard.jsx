import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FooterCard = ({ items, title }) => {
  return (
    <div>
      <h4 className="footer-subtitle">{title}</h4>
      <ul className="footer-item-ul">
        {items.map((item) => (
          <li key={item.id}>
            <button className="footer-social-btn">
              <FontAwesomeIcon className="mr-1" icon={faArrowRight} />
              <span className="footer-item">{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterCard;
