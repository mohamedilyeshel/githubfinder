import "../style/pagenotfound.css";
import { TbError404 } from "react-icons/tb";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div className="notFoundContainer">
      <TbError404 className="notFoundIcon" />
      <Link to="/" className="btn btn-primary">
        Back to Home page
      </Link>
    </div>
  );
}

export default Notfound;
