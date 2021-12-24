import "./BeneficiaryListFilterHead.css";
const InputConstants = ["Beneficiary ID", "Name", "Aadhar"];
interface NewBeneficiaryListFilterHeadType {
    onBeneficiaryIDChange: Function;
    onNameChange: Function;
    onAadharChange: Function;
}

function BeneficiaryListFilterHead({onBeneficiaryIDChange,onNameChange,onAadharChange}:NewBeneficiaryListFilterHeadType) {
  return (
    <div>
      <label htmlFor="">
         {InputConstants[0]}
        <input type="text" placeholder={InputConstants[0]} onChange={(event)=>onBeneficiaryIDChange(event)}/>
      </label>
      <label >
        {InputConstants[1]}
        <input type="text" placeholder={InputConstants[1]} onChange={(event)=>onNameChange(event)} />
      </label>
      <label placeholder={InputConstants[2]}>
        {InputConstants[2]}
        <input type="text" placeholder={InputConstants[2]} onChange={(event)=>onAadharChange(event)}/>
      </label>
    </div>
  );
}

export default BeneficiaryListFilterHead;
