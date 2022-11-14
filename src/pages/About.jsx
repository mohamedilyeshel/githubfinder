import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-neutral-content text-neutral p-16 rounded-lg">
      <h1 className="text-5xl font-bold pb-5">About Us</h1>
      <p className="text-xl  pb-5">
        React application to interact with the github API
      </p>
      <Link to="/" className="btn">
        Back to Home page
      </Link>
    </div>
  );
}

export default About;
