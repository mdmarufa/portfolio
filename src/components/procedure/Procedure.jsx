import DetailsHourly from "../detailses/DetailsHourly";
import DetailsMilstone from "../detailses/DetailsMilstone";
import DetailsProjectComplete from "../detailses/DetailsProjectComplete.jsx";
import ProcedureHeader from "./Header";

import "./prodecure.scss";

const Procedure = () => {

  return (
    <div className="procedure">
    <ProcedureHeader /> 
    <DetailsHourly />
    <DetailsMilstone />
    <DetailsProjectComplete />
  </div>
  )
}

export default Procedure;