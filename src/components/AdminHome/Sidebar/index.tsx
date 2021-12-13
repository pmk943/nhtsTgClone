import {
  BENEFICIARYLIST_CHILDS,
  HEALTHINFORMATION_CHILDS,
  REGISTRATION_CHILDS,
  SERVICES_CHILDS,
  UPDATEBENEFICIARYSTATUS_CHILDS,
} from "../../../utils/constants";
import Accordion from "../Accordion";
import './sidebar.css'

function Sidebar() {
  return (
    <div className="Sidebar__container">
      <div>
        <i className="bi bi-speedometer2">DashBoard</i>
      </div>
      <div className="Accordion__container">
        <Accordion
          iconname="bi bi-card-list"
          name="Registration"
          childnames={REGISTRATION_CHILDS}
        />
        <Accordion
          iconname="bi bi-table"
          name="Beneficiary List"
          childnames={BENEFICIARYLIST_CHILDS}
        />
        <Accordion
          iconname="bi bi-person-lines-fill"
          name="Services"
          childnames={SERVICES_CHILDS}
        />
        <Accordion
          iconname="bi bi-file-medical"
          name="Health information"
          childnames={HEALTHINFORMATION_CHILDS}
        />
        <Accordion
          iconname="bi bi-arrow-bar-up"
          name="Update Beneficiary Status"
          childnames={UPDATEBENEFICIARYSTATUS_CHILDS}
        />
      </div>
    </div>

      
  );
}

export default Sidebar;
