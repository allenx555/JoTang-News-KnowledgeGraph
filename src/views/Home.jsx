import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Input, Carousel, Card, Row, Col } from "antd";
import "../assets/home.scss";
import axios from "axios";
import testjson from "../static/test.json";

const Search = Input.Search;
const logo = "http://pic.555dreams.xin/images/2019/04/20/1.png";

export default class Home extends React.Component {
  state = {
    key: "tab1",
    noTitleKey: "app",
    content: testjson
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  /*componentDidMount() {
    const _this = this;
    axios.get("../static/test.json").then(function(response) {
      _this.setState({ content: response});
      console.log(JSON.stringify(response.data));
    });
  }
  */
  render() {
    return (
      <div className="container">
        <Header />
        <img src={logo} alt="logo" id="logo1" />
        <div className="content">
          <div id="newsinfo">
            <div id="pics">
              <Carousel autoplay>
                {this.state.content.pic.map(item => {
                  return (
                    <div>
                      <img
                        src={item.picurl}
                        alt={item.title}
                        className="largenews"
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
            <div id="search">
              <Search
                placeholder="欧债危机蔓延"
                onSearch={()=>{window.location.href="/knowledgegraph"}}
              />
              <Card title="Most Viewed" extra={<a href="#">More</a>} id="card2">
                {this.state.content.MostViewed.map(item => {
                  return (
                    <div className="ellipsis">
                      <a
                        href={item.url}
                        style={{ color: "rgba(0, 0, 0, 0.8)", "font-size": 14 }}
                      >
                        <u>{item.title}</u>
                      </a>
                    </div>
                  );
                })}
              </Card>
            </div>
            <div id="main">
              <Card
                title={this.state.content.Headline.title}
                style={{ width: 460 }}
                id="card1"
              >
                <p id="maincontent">{this.state.content.Headline.content}</p>
              </Card>
            </div>
          </div>
          <div id="morenews">
            <Row gutter={16} style={{ width: 1200 }}>
              <Col span={3}>
                <div id="head-title">Other News</div>
              </Col>
              {this.state.content.OtherNews.map(item => {
                return (
                  <Col span={3}>
                    <div className="ellipsis">
                      <img
                        src={item.picurl}
                        alt={item.title}
                        className="smallnews"
                      />
                      <p>{item.title}</p>
                    </div>
                  </Col>
                );
              })}
              <Col span={2}>
                <video src="test" controls="controls" />
              </Col>
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
