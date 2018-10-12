import React, { Component } from 'react';

class InfoItem extends Component {
  render() {
    return (
      <div className="info-row">
        <i className={this.props.data.icon}></i>
        <span>{this.props.data.text}</span>
      </div>
    );
  }
}

export default InfoItem
