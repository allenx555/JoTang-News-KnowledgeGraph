import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Input, Carousel, Card, Row, Col } from "antd";
import "../assets/home.scss";

const Search = Input.Search;
const logo = "http://pic.555dreams.xin/images/2019/04/20/1.png";

const tabListNoTitle = [
  {
    key: "article",
    tab: "article"
  },
  {
    key: "app",
    tab: "app"
  },
  {
    key: "project",
    tab: "project"
  }
];

const contentListNoTitle = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>
};

export default class Home extends React.Component {
  state = {
    key: "tab1",
    noTitleKey: "app"
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <img src={logo} alt="logo" id="logo1" />
        <div className="content">
          <div id="newsinfo">
            <div id="pics">
              <Carousel autoplay>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
              </Carousel>
            </div>
            <div id="search">
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 300 }}
              />
              <Card
                title="Most Viewed"
                extra={<a href="#">More</a>}
                style={{ width: 300 }}
                id="card2"
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
            <div id="main">
              <Card title="Headline" style={{ width: 460 }} id="card1">
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
          </div>
          <div id="morenews">
            <Row gutter={16} style={{ width: 1200 }}>
              <Col span={3}><div id="head-title">Other News</div></Col>
              <Col span={5} title="Card title">
                <Card style={{ height: 150 }}>Card content</Card>
              </Col>
              <Col span={4}>
                <Card style={{ height: 150 }}>Card content</Card>
              </Col>
              <Col span={4}>
                <Card style={{ height: 150 }}>Card content</Card>
              </Col>
              <Col span={4}>
                <Card style={{ height: 150 }}>Card content</Card>
              </Col>
              <Col span={4}>
                <Card style={{ height: 150 }}>Card content</Card>
              </Col>
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
