import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../assets/searchresult.scss";
import { Input, List } from "antd";

const Search = Input.Search;
const data = ["1", "2", "3", "4", "5"];
export default class SearchResult extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div id="searchresult">
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            enterButton
          />
          <List
            header={<div>SearchResult</div>}
            footer={<div>More..</div>}
            bordered
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
            id="searchlist"
          />
        </div>
        <Footer />
      </div>
    );
  }
}
