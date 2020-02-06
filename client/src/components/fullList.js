import React, { Component } from 'react';

class FullList extends Component {
  render() {
    return (
      <div>
        <h1>Full list of freezer items</h1>
        <ul>
          {this.props.freezerData.map(item => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FullList;
