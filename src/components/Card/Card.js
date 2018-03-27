import React from "react";
import "./Card.css";
export class Card extends React.Component {
  render() {
    const { cardData } = this.props;
    return (
      <div className="card-container">
        <div className="row">
          <div className="label">Name:</div>
          <div className="data">{cardData.name}</div>
        </div>
        <div className="row">
          <div className="label">Email:</div>
          <div className="data">{cardData.email}</div>
        </div>
        <div className="row">
          <div className="label">Contact No.:</div>
          <div className="data">{cardData.number}</div>
        </div>
        <div className="row">
          <div className="label">Address:</div>
          <div className="data">{cardData.address}</div>
        </div>
      </div>
    );
  }
}
