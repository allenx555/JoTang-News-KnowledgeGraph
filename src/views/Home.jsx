import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Input, Carousel, Card } from "antd";
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
      <div class="container">
        <Header />
        <img src={logo} alt="logo" id="logo1" />
        <div class="content">
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
                title="Default size card"
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
              <Card title="Default size card" style={{ width: 460 }} id="card1">
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
          </div>
          <div id="morenews">
            <Card
              style={{ width: "100%" }}
              tabList={tabListNoTitle}
              activeTabKey={this.state.noTitleKey}
              onTabChange={key => {
                this.onTabChange(key, "noTitleKey");
              }}
            >
              {contentListNoTitle[this.state.noTitleKey]}
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
