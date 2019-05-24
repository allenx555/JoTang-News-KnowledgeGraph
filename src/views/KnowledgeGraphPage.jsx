import React from "react";
import { APIClient } from "../utils/client.js";
import { Card } from "antd";
import "../assets/knowledgegraph.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import ReactEcharts from "echarts-for-react";
import testJson from "../static/npmdepgraph.json";

export default class KnowledgeGraph extends React.Component {
  getOtion() {
    const option = {
      title: {
        text: "NPM Dependencies"
      },
      animationDurationUpdate: 1500,
      animationEasingUpdate: "quinticInOut",
      series: [
        {
          type: "graph",
          layout: "none",
          // progressiveThreshold: 700,
          data: testJson.nodes.map(function(node) {
            return {
              x: node.x,
              y: node.y,
              id: node.id,
              name: node.label,
              symbolSize: node.size,
              itemStyle: {
                normal: {
                  color: node.color
                }
              }
            };
          }),
          edges: testJson.edges.map(function(edge) {
            return {
              source: edge.sourceID,
              target: edge.targetID
            };
          }),
          label: {
            emphasis: {
              position: "right",
              show: true
            }
          },
          roam: true,
          focusNodeAdjacency: true,
          lineStyle: {
            normal: {
              width: 0.5,
              curveness: 0.3,
              opacity: 0.7
            }
          }
        }
      ]
    };
    return option;
  }
  render() {
    return (
      <div>
        <Header />
        <div id="card1">
          <Card title="Card Title">
            <Card.Grid
              style={{ width: "500px", height: "500px", overflow: "hidden" }}
            >
              <ReactEcharts
                option={this.getOtion()}
                style={{ height: "500px", width: "500px" }}
                className="knowledgegraph"
              />
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
