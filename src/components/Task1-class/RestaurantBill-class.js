import React, { Component } from "react";

import styled from "styled-components";

const RestBillWrapper = styled.div`
  border: 2px solid steelblue;
  width: 300px;
  height: auto;
  padding: 36px;

  form {
    display: flex;
    flex-direction: column;
  }
`;

class RestaurantBill extends Component {
  state = {
    tipOptions: [5, 10, 15, 20],
    valueVAT: 25,
    convertedPrice: 0,
    inputValue: 0,
    selectValue: 5,
    isPriceConverted: false,
  };
  constructor(props) {
    super(props);

    this.inputHandler = this.inputHandler.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
    this.submitFormHandler = this.submitFormHandler.bind(this);
  }

  inputHandler = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  selectHandler = (e) => {
    this.setState({ selectValue: e.target.value });
  };
  submitFormHandler = (e) => {
    e.preventDefault();
    if (Number(this.state.inputValue) === 0) {
      alert("please fill input or the value can't be 0");
      return;
    }
    const inputPrice = Number(this.state.inputValue);
    const tax = Number(`1.${this.state.valueVAT}`);
    const tip = (this.state.inputValue * this.state.selectValue) / 100;

    const totalPrice = (inputPrice + tip) * tax;
    this.setState({ convertedPrice: totalPrice.toFixed(2) });
    this.setState({ isPriceConverted: (e) => !e });
  };

  render() {
    const summaryContent = (
      <div>
        <h2>Total bill:</h2>
        <p>{this.state.convertedPrice}</p>
      </div>
    );

    return (
      <RestBillWrapper>
        {this.state.isPriceConverted ? (
          summaryContent
        ) : (
          <form onSubmit={this.submitFormHandler}>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              step=".01"
              onChange={this.inputHandler}
            />

            <label htmlFor="tip">Tip</label>
            <select name="tip" onChange={this.selectHandler}>
              {this.state.tipOptions.map((elem, index) => (
                <option key={index} value={elem}>
                  {elem}%
                </option>
              ))}
            </select>
            <p>Tax: {this.state.valueVAT}</p>
            <button type="submit">Summary</button>
          </form>
        )}
      </RestBillWrapper>
    );
  }
}

export default RestaurantBill;
