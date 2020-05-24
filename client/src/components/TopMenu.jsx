import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HamburgerIcon from "react-hamburger-menu";
import { IoMdPaw as PawIcon } from "react-icons/io";
import {
  BsListUl as DashboardIcon,
  BsListCheck as CollectionIcon,
} from "react-icons/bs";
import { FaBinoculars as DiscoveryIcon } from "react-icons/fa";
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
          <div className="toggle-menu-icon">
            <HamburgerIcon
              isOpen={this.state.menuOpen}
              menuClicked={this.handleMenuClick.bind(this)}
              color="white"
              animationDuration={0.2}
            />
          </div>
          <div className="logo">
            {this.props.isLogin ? (
              "Login"
            ) : (
              <div>
                Wild Walk
                <PawIcon />
              </div>
            )}
          </div>
        </div>
        <div id="menu" className={this.state.menuOpen ? "isopen" : undefined}>
          <NavLink to="/dashboard" className="menu-button">
            <div className="menu-icon">
              <DashboardIcon />
            </div>
            <div className="menu-text">Species to Find</div>
          </NavLink>
          <NavLink to="/collection" className="menu-button">
            <div className="menu-icon">
              <CollectionIcon />
            </div>
            <div className="menu-text">Species Collection</div>
          </NavLink>
          <NavLink to="/add-photo" className="menu-button" id="photo">
            <div className="menu-icon">
              <DiscoveryIcon />
            </div>
            <div className="menu-text">Add a Discovery!</div>
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
