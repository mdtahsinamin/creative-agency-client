import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AgencyUser } from "../../../App";
import agencyLogo from "../../../images/logos/logo.png";
import "./NavigationBar.css";
import jwt_decode from "jwt-decode";
import { Nav, Navbar } from "react-bootstrap";
const NavigationBar = () => {
  const [loginUser, setLoginUser] = useContext(AgencyUser);

  const history = useHistory();

  const handleChange = () => {
    history.push("/login");
  };

  const handleLogoutUser = () => {
    setLoginUser({});
    sessionStorage.clear();
    setIsAdmin(false);
  };

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const loginUserEmail = loginUser.email || loginUser.currentEmail;

    fetch("https://creative-agency-server-2ogx.vercel.app/isAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ loginUserEmail }),
    })
      .then((response) => response.json())
      .then((data) => setIsAdmin(data));
  }, []);

  let currentName = "";
  let currentEmail = "";

  if (!loginUser.email && sessionStorage.getItem("token")) {
    const token = sessionStorage.getItem("token");
    if (token) {
      const decodedToken = jwt_decode(token);
      currentName = decodedToken.name;
      currentEmail = decodedToken.email;
    }
  }

  const linkStyle = {
    fontSize: "18px",
  };

  return (
    <div className="container">
      <Navbar bg="" expand="lg">
        <Link to="/" className="navbar-brand">
          <img className="agencyLogo" src={agencyLogo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="mt-5 pt-3">
          <Nav className="ml-auto">
            <Link style={linkStyle} className="nav-link mr-4" to="/home">
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link style={linkStyle} className="nav-link mr-4" to="/portfolios">
              Our Portfolio
            </Link>
            <Link style={linkStyle} className="nav-link mr-4" to="/ourTeam">
              Our Team
            </Link>
            <Link style={linkStyle} className="nav-link mr-4" to="/contactUs">
              Contact Us
            </Link>
            {isAdmin && (
              <Link className="nav-link mr-4" to="/serviceList">
                Admin Dashboard
              </Link>
            )}
            {!(loginUser.email || loginUser.currentEmail || currentEmail) && (
              <button onClick={handleChange} className="login-btn mr-4 mt-1">
                Login
              </button>
            )}
            {(loginUser.email || loginUser.currentEmail || currentEmail) && (
              <button
                onClick={handleLogoutUser}
                className="login-btn mr-4 mt-1"
              >
                Logout
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
