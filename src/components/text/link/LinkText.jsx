import { use } from 'react';
import DataContext from '../../../context/DataContext';
import "./linkText.scss";

const linkText = ({title, cursor, hover}) => {

  const dataContext = use(DataContext)

  return (
    <span className={`textLink ${dataContext.data.theme.darkMode ? "t-d" : "t-w"} ${cursor} ${hover}`}>{title}</span>
  )

}

export default linkText;