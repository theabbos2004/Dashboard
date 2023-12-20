import { Link } from "react-router-dom";
function Button({
  children,
  onClick=()=>{},
  type,
  link="",
  sxd={
    fontSize: "1.2rem",
    margin:"0 0",
    padding: "0.8rem 1rem",
    display:"flex",
    justifyContent: "center",
    cursor: "pointer",
    width:"",
    height:"",
    border: "0.25rem solid var(--color-white)",
    borderRadius:"1rem",
    backgroundColor:"transparent",
    color:"var(--color-white)",
    type:"",
    fontFamily: "sans-serif"
  },
  sx
}) {
  return (
    <button
      style={{...sxd,...sx}}
      onClick={(e) => {
        e.preventDefault()
        onClick()}}
      type={type}
    >
      <Link to={link} style={{width:"100%",height:"100%",color:sx?.color?sx.color:sxd.color}}>
        {children}
      </Link>
    </button>
  );
}
export default Button;
