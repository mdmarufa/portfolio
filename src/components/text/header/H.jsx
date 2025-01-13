import "./H.scss";

const H = ({children, colorize}) => {

  return (
    <h1 className={`h ${colorize ? "colorize" : ""}`}>{children}</h1>
  )
}

export default H;