"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
function ErrorPage() {
    return (<div className="error-wrapper">
      <h3>
        Oops, there doesn't seem to be anything here.. How did you get here?
      </h3>
      <h3>
        <react_router_dom_1.NavLink to="/">
          <button>Go back to Home</button>
        </react_router_dom_1.NavLink>
      </h3>
    </div>);
}
exports.default = ErrorPage;
