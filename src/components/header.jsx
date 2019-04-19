import React from "react";
import { Menu, Icon } from "antd";
import "../assets/header.scss";

const SubMenu = Menu.SubMenu;

export default class Header extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <div className="header">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <a
              href="#"
              rel="noopener noreferrer"
            >
              Home
            </a>
          </Menu.Item>
          <Menu.Item key="anlaysis" disabled>
            Analysis
          </Menu.Item>
          <Menu.Item key="us" id="menu5">
            <a
              href="https://jotang.party"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="team" />
              us
            </a>
          </Menu.Item>
          <Menu.Item key="support" disabled id="menu4">
            <Icon type="question-circle" />
            support
          </Menu.Item>
          <Menu.Item key="settings" disabled id="menu3">
            <Icon type="setting" />
            settings
          </Menu.Item>
          <SubMenu
            id="menu2"
            title={
              <span className="submenu-title-wrapper">
                <Icon type="appstore" />
                language
              </span>
            }
          >
            <Menu.Item key="setting:1">Chinese</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
