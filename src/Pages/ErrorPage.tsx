import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="error-wrapper">
      <h3>
        Oops, there doesn't seem to be anything here.. How did you get here?
      </h3>
      <h3>
        <NavLink to="/">
          <button>Go back to Home</button>
        </NavLink>
      </h3>
    </div>
  );
}
