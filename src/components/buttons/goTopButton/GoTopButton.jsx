import { FaAngleUp } from "react-icons/fa6";
import DataContext from "../../../context/DataContext";
import { use } from "react";
import gotToTop from "../../../handlers/goToTopHandler";

const GoTopButton = () => {

  const sv = use(DataContext).data.scroll.currentScroll > 250;

  return (
    <button
      className={`boxShadow option goTopBtn ${sv ? "" : "hide"}`}
      style={{ "--bottomPos": "90px" }}
      onClick={gotToTop}
    >
      <FaAngleUp />
    </button>
  );
};

export default GoTopButton;
