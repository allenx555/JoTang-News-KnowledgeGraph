import React from "react";
import { APIClient } from "../utils/client.js";
import { Card } from "antd";
import "../assets/knowledgegraph.scss";
import Header from "../components/header";
import Footer from "../components/footer";

export default class KnowledgeGraph extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div id="card1">
          <Card title="Card Title">
            <Card.Grid style={{ width: "500px", height: "500px" }}>
              Content
            </Card.Grid>
            <Card.Grid style={{ width: "350px", height: "80px" }}>
              Content
            </Card.Grid>
            <Card.Grid style={{ width: "350px", height: "80px" }}>
              Content
            </Card.Grid>
            <Card.Grid style={{ width: "350px", height: "80px" }}>
              Content
            </Card.Grid>
            <Card.Grid style={{ width: "350px", height: "80px" }}>
              Content
            </Card.Grid>
            <Card.Grid style={{ width: "350px", height: "180px" }}>
              Content
            </Card.Grid>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }
}
