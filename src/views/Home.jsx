import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import searchinput from "../components/searchinput";

const logo = "http://pic.555dreams.xin/images/2019/04/20/1.png";
export default class Home extends React.Component {
  render() {
    return (
      <div class="container">
        <Header />
        <img src={logo} alt="logo"/>
        <div class="content">
          <div id="newsinfo" />
          <div id="newsdetail" />
          <div id="morenews" />
        </div>
        <Footer />
      </div>
    );
  }
}
