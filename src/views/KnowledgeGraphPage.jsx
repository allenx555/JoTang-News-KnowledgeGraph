import React from "react";
import { Card } from "antd";
import "../assets/knowledgegraph.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import ReactEcharts from "echarts-for-react";
import data1 from "../static/data1.json";

var categories = [
  {
    name: "主体"
  },
  {
    name: "主要影响"
  },
  {
    name: "次要影响"
  }
];
export default class KnowledgeGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reason: "",
      result: "",
      time: "",
      adress: "",
      actor: "",
      content: ""
    };
  }
  getOption() {
    let option = {
      title: {
        text: ""
      },
      tooltip: {
        formatter: function(params) {
          return params.name + (params.value ? " : " + params.value : "");
        }
      },
      animationDurationUpdate: 1500,
      animationEasingUpdate: "quinticInOut",

      toolbox: {
        feature: {
          restore: {}
        }
      },
      legend: {
        show: true,
        data: categories
      },
      series: [
        {
          type: "graph",
          layout: "force",
          roam: true,
          hoverAnimation: true,
          focusNodeAdjacency: true,
          draggable: true,
          symbolSize: 33,
          force: {
            repulsion: 200,
            edgeLength: 100
          },
          itemStyle: {
            normal: {
              borderColor: "#fff",
              borderWidth: 1,
              shadowBlur: 10,
              shadowColor: "rgba(0, 0, 0, 0.3)"
            }
          },
          lineStyle: {
            width: 0.5,
            curveness: 0.3,
            opacity: 0.8
          },
          label: {
            emphasis: {
              position: "right",
              show: true
            }
          },
          emphasis: {
            itemStyle: {
              borderWidth: 3
            },
            lineStyle: {
              color: "gray",
              width: 3
            }
          },
          data: data1.data,
          links: data1.links,
          categories: categories
        }
      ]
    };
    return option;
  }

  onChartClick = {
    click: this.onByModelClick.bind(this)
  };
  onByModelClick(params) {
    console.log("onByModelClick: e=", params);
    if (params.dataType === "edge") {
      console.log(data1.context_dict[params.data.source][params.data.target].time);
      this.setState({
        reason: params.data.source,
        result: params.data.target,
        time: data1.context_dict[params.data.source][params.data.target].time,
        adress: data1.context_dict[params.data.source][params.data.target].adress,
        actor: data1.context_dict[params.data.source][params.data.target].actor,
        content: data1.context_dict[params.data.source][params.data.target].content
      });
    }
  }
  render() {
    return (
      <div>
        <Header />
        <div id="card1">
          <Card title="知识图谱">
            <Card.Grid
              style={{ width: "500px", height: "500px", overflow: "hidden" }}
            >
              <ReactEcharts
                option={this.getOption()}
                notMerge={true}
                lazyUpdate={true}
                style={{ width: "100%", height: "100%" }}
                onEvents={this.onChartClick}
              />
            </Card.Grid>
            <Card.Grid style={{ width: "350px", height: "50px" }}>
              Reason：{this.state.reason}
              <div className="reson-content pad" id="reson" />
            </Card.Grid>
            <Card.Grid style={{ width: "350px", height: "50px" }}>
              Result：{this.state.result}
              <div className="reslut-content pad " id="result" />
            </Card.Grid>
            <Card.Grid style={{ width: "350px", height: "50px" }}>
              Time：{this.state.time}
              <div className="time-content pad " id="time" />
            </Card.Grid>
            <Card.Grid style={{ width: "350px", height: "50px" }}>
              Location：{this.state.adress}
              <div className="place-content pad " id="adress" />
            </Card.Grid>
            <Card.Grid style={{ width: "350px", height: "50px" }}>
              Participant：{this.state.actor}
              <div className="actor-content pad " id="actor" />
            </Card.Grid>
            <Card.Grid
              style={{ width: "350px", height: "250px", overflow: "hidden" }}
            >
              Content：
              {this.state.content}
              <div className="enevt-content pad " id="content" />
            </Card.Grid>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }
}
