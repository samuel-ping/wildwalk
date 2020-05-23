import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import HamburgerIcon from "react-hamburger-menu";
import { FiLogIn as LoginIcon } from "react-icons/fi";
import "./TopMenu.css";

class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <div className="top-menu">
        <div className="topbar">
          <div className="menu-icon">
            <HamburgerIcon
              isOpen={this.state.menuOpen}
              menuClicked={this.handleMenuClick.bind(this)}
              color="white"
              animationDuration={0.2}
            />
          </div>
          <div className="logo">
            {this.props.isLogin ? "Login" : "Wild Walk"}
          </div>
        </div>
        <div id="menu" className={this.state.menuOpen ? "isopen" : undefined}>
          <NavLink to="/dashboard" className="menu-button">
            Dashboard
          </NavLink>
          <NavLink to="/collection" className="menu-button">
            Plant Collection
          </NavLink>
          <NavLink to="/login" className="menu-button" id="login">
            <div className="login-menu-button">
              Login
              <LoginIcon />
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default TopMenu;
