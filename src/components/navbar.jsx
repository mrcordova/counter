import React from "react";


function Navbar(props) {
    const {totalCounters} = props;
    console.log('NavBar - Rendered');
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar{" "}
            <span style={{color: "black"}} className="badge badge-pill badge-secondary">
              {totalCounters}
            </span>
          </a>
        </div>
      </nav>
    );
  
}

export default Navbar;
