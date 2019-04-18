import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const PageNotFound = "https://i.loli.net/2018/11/14/5bec09142d118.gif";

export default class NotFound extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <img
            src={PageNotFound}
            style={{
              display: "block",
              margin: "auto",
              position: "relative"
            }}
          />
          <center>
            <Link to="/home">Return to Home Page</Link>
          </center>
        </div>
        <Footer />
      </div>
    )
  }
}
