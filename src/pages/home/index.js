import React ,{PureComponent} from 'react';
import {Button} from 'antd';
import './index.less';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state={
      count:1
    }
  }

  render() {
    const {count} = this.state;
    return (
      <div>
        <Button>{count}</Button>
      </div>
    );
  }
}