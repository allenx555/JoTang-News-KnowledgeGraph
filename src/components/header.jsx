import React from "react";
import { Menu, Icon } from "antd";

const SubMenu = Menu.SubMenu;

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header1">
          <img src="#" />
          <a herf="#">Home |</a>
          <a herf="#"> Analaysis</a>
        </div>
        <div className="header2">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <Icon type="appstore" />
                  language
                </span>
              }
            >
              <Menu.Item key="setting:1">Chinese</Menu.Item>
            </SubMenu>
            <Menu.Item key="settings" disabled>
              <Icon type="setting" />
              settings
            </Menu.Item>
            <Menu.Item key="support" disabled>
              <Icon type="question-circle" />
              support
            </Menu.Item>
            <Menu.Item key="us">
              <a
                href="https://jotang.party"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon type="team" />
                us
              </a>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}
