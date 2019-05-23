import React from "react";
import ReactEcharts from "echarts-for-react";
import { APIClient } from "../utils/client.js";

class KnowledgeGraph extends React.Component {
  getOtion(json) {
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
          data: json.nodes.map(function(node) {
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
          edges: json.edges.map(function(edge) {
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
    let code =
      "<ReactEcharts " +
      "    option={this.getOtion()} " +
      "    style={{height: '350px', width: '1000px'}}  " +
      "    className='react_for_echarts' />";
    return (
      <ReactEcharts
        option={this.getOtion()}
        style={{ height: "350px", width: "1000px" }}
        className="react_for_echarts"
      />
    );
  }
}

export default KnowledgeGraph;
