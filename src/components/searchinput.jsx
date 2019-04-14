import React from "react";
import { Input, Select, Button, Icon } from 'antd';
import jsonp from 'jsonp';
import querystring from 'querystring';
import classNames from 'classnames';
const Option = Select.Option;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(`http://suggest.taobao.com/sug?${str}`, (err, d) => {
      if (currentValue === value) {
        const result = d.result;
        const data = [];
        result.forEach((r) => {
          data.push({
            value: r[0],
            text: r[0],
          });
        });
        callback(data);
      }
    });
  }

  timeout = setTimeout(fake, 300);
}

const SearchInput = React.createClass({
  getInitialState() {
    return {
      data: [],
      value: '',
      focus: false,
    };
  },
  handleChange(value) {
    this.setState({ value });
    fetch(value, (data) => this.setState({ data }));
  },
  handleSubmit() {
    console.log('输入框内容是: ', this.state.value);
  },
  handleFocusBlur(e) {
    this.setState({
      focus: e.target === document.activeElement,
    });
  },
  render() {
    const btnCls = classNames({
      'ant-search-btn': true,
      'ant-search-btn-noempty': !!this.state.value.trim(),
    });
    const searchCls = classNames({
      'ant-search-input': true,
      'ant-search-input-focus': this.state.focus,
    });
    return (
      <Input.Group className={searchCls} style={this.props.style}>
        <Select
          combobox
          value={this.state.value}
          searchPlaceholder={this.props.placeholder}
          notFoundContent=""
          defaultActiveFirstOption={false}
          showArrow={false}
          filterOption={false}
          onChange={this.handleChange}
          onFocus={this.handleFocusBlur}
          onBlur={this.handleFocusBlur}>
          {this.state.data.map(d => <Option key={d.value}>{d.text}</Option>)}
        </Select>
        <div className="ant-input-group-wrap">
          <Button className={btnCls} onClick={this.handleSubmit}>
            <Icon type="search" />
          </Button>
        </div>
      </Input.Group>
    );
  },
});
