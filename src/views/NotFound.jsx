import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import "../assets/notfound.scss"

const PageNotFound = "https://i.loli.net/2018/11/14/5bec09142d118.gif";

export default class NotFound extends React.Component {
  render() {
    return (
      <div class="container">
        <Header />
        <div class="content">
          <img
            src={PageNotFound}
            alt="NotFound"
            style={{
              display: "block",
              margin: "auto",
              position: "relative"
            }}
          />
        </div>
        <Footer />
      </div>
    )
  }
}
