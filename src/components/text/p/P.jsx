import "./p.scss";

const P = ({bold, children, colorize, m}) => {
  return <p className={`p ${bold ? "semiBold" : ""} ${colorize ? "colorize" : ""}`} style={{marginLeft: `${m}px`}}>{children}</p>;
};

export default P;