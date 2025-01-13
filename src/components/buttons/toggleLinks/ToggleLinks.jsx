import { use } from 'react';
import { BsFillGrid3X3GapFill  } from "react-icons/bs";
import DataContext from "../../../context/DataContext";

const ToggleLinks = () => {

  const dataContext = use(DataContext);
  const isLinksActive = dataContext.data.linksActive;
  const scrolled = (dataContext.data.scroll.currentScroll / dataContext.data.scroll.scrollHeight) * 100;
  return (
  <button className={`boxShadow option toggleLinks ${scrolled >= 99 ? "d-none" : ""}`} style={{ "--bottomPos": "90px" }} onClick={
    (e) => {
      dataContext.updateData({...dataContext.data, button: {
        linksActive: !isLinksActive,
        src: e.currentTarget
      }})
    }
  }>
    <BsFillGrid3X3GapFill  />
  </button>
);
}
export default ToggleLinks;
