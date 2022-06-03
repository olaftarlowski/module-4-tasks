import React, { useState } from "react";
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

const RestaurantBill = () => {
  const [tipOptions] = useState([5, 10, 15, 20]);
  const [valueVAT] = useState(25);
  const [convertedPrice, setConvertedPrice] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [selectValue, setSelectValue] = useState(tipOptions[0]);
  const [isPriceConverted, setIsPriceConverted] = useState(false);

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };
  const selectHandler = (e) => {
    setSelectValue(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (Number(inputValue) === 0) {
      alert("please fill input or the value can't be 0");
      return;
    }
    const inputPrice = Number(inputValue);
    const tax = Number(`1.${valueVAT}`);
    const tip = (inputValue * selectValue) / 100;

    const totalPrice = (inputPrice + tip) * tax;
    setConvertedPrice(totalPrice.toFixed(2));
    setIsPriceConverted((e) => !e);
  };

  const summaryContent = (
    <div>
      <h2>Total bill:</h2>
      <p>{convertedPrice}</p>
    </div>
  );

  return (
    <RestBillWrapper>
      {isPriceConverted ? (
        summaryContent
      ) : (
        <form onSubmit={submitFormHandler}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            step=".01"
            onChange={inputHandler}
          />

          <label htmlFor="tip">Tip</label>
          <select name="tip" onChange={selectHandler}>
            {tipOptions.map((elem, index) => (
              <option key={index} value={elem}>
                {elem}%
              </option>
            ))}
          </select>
          <p>Tax: {valueVAT}</p>
          <button type="submit">Summary</button>
        </form>
      )}
    </RestBillWrapper>
  );
};

export default RestaurantBill;
