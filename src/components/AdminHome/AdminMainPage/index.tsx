import { scryRenderedDOMComponentsWithTag } from "react-dom/test-utils";
import { CARDCONTENTS } from "../../../utils/constants";
import Card from "../../common/card";
import "./AdminMainPage.css";

const cardcomponents = CARDCONTENTS.map((card) => (
  <Card
    src={card.src}
    name={card.name}
    number={card.number}
    bgcolor={card.bgcolor}
  ></Card>
));
function AdminMainPage() {
  return (
    <div className="card__container">{cardcomponents}</div>
    // <div className="parent">
    //     yellow Parent
    //     <div className="c1">Red Child</div>
    //     <div className="c2">Greeen Child</div>
    //     <div className="c3">Blue Child</div>
    //     <textarea className="ta" name="check"  cols={30} rows={10}>Hey..</textarea>
    // </div>
  );
}

export default AdminMainPage;
