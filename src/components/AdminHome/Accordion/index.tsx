import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Accordion.css";
type AccordionPropType = {
  iconname: string;
  name: string;
  childnames: string[];
};

function Accordion({ iconname, name, childnames }: AccordionPropType) {
  const [isActive, setisActive] = useState(false);
  const toggleAccordion = () => {
    setisActive((state) => !state);
  };

  const dropDownIcon = isActive ? (
    <i className="arrowIcon bi bi-chevron-up" role="img" />
  ) : (
    <i className="arrowIcon bi bi-chevron-down" role="img" />
  );
  return (
    <>
      <div onClick={toggleAccordion} className="Accordion__header">
        <i className={`${iconname}`} />
        <span>{name}</span>
        {dropDownIcon}
      </div>
      {/* {isActive && childnames.map((child)=><div className="Accordion_child">{child}</div> )} */}
      {isActive &&
        childnames.map((child) => (
          <NavLink to={`/${name}`} className="Accordion_child">
            {child}
          </NavLink>
        ))}
    </>
  );
}

export default Accordion;
