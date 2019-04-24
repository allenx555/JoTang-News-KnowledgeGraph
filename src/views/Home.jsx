import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Input } from "antd";
import "../assets/home.scss"

const Search = Input.Search;
const logo = "http://pic.555dreams.xin/images/2019/04/20/1.png";
export default class Home extends React.Component {
  render() {
    return (
      <div class="container">
        <Header />
        <img src={logo} alt="logo" id="logo1"/>
        <div class="content">
          <div id="newsinfo">
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
          </div>
          <div id="newsdetail" />
          <div id="morenews" />
        </div>
        <Footer />
      </div>
    );
  }
}
