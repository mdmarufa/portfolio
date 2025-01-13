import "./primaryBtn.scss";
import LinkText from '../../text/link/LinkText'

const PrimaryBtn = ({title, fill, shadow}) => {

  return (
    <div className={`primaryBtn ${fill ? "fill" : ""} ${shadow ? "shadow" : ""}`}>
      <LinkText title={title} />
    </div>
  )
}

export default PrimaryBtn
