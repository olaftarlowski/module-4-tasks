import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../Task2";
import { UserFormWrapper, ListsWrapper } from "../Task4/main-styling";
import FullList from "./FullList";
import Summary from "./Summary";

const INCOMES_DATA = [
  {
    id: uuidv4(),
    operationType: "income",
    name: "wyplata",
    amount: "1429",
    category: "business",
  },
  {
    id: uuidv4(),
    operationType: "income",
    name: "znalezione",
    amount: "20",
    category: "private",
  },
];

const EXPENSES_DATA = [
  {
    id: uuidv4(),
    operationType: "expenses",
    name: "drzwi",
    amount: "429",
    category: "basic",
  },
  {
    id: uuidv4(),
    operationType: "expenses",
    name: "biurko",
    amount: "249",
    category: "private",
  },
  {
    id: uuidv4(),
    operationType: "expenses",
    name: "lamap",
    amount: "13",
    category: "private",
  },
];

const getLocalStorage = (dataOption) => {
  let list = localStorage.getItem(dataOption);
  if (list) {
    return (list = JSON.parse(localStorage.getItem(dataOption)));
  } else {
    return [];
  }
};

const Main = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [incomesData, setIncomesData] = useState(getLocalStorage("incomeList"));
  const [expensesData, setExpensesData] = useState(
    getLocalStorage("expenseList")
  );
  const [incomesSummary, setIncomesSummary] = useState(0);
  const [expensesSummary, setExpensesSummary] = useState(0);

  const countTotalAmount = (arr) =>
    arr.reduce(
      (previousValue, currentValue) =>
        previousValue + Number(currentValue.amount),
      0
    );

  useEffect(() => {
    localStorage.setItem("incomeList", JSON.stringify(incomesData));
    localStorage.setItem("expenseList", JSON.stringify(expensesData));

    setIncomesSummary(countTotalAmount(incomesData).toFixed(2));
    setExpensesSummary(countTotalAmount(expensesData).toFixed(2));
  }, [incomesData, expensesData]);

  const submitFormHandler = (data) => {
    const newItem = data;
    newItem.id = uuidv4();

    const updateData = (prevState) => {
      return [...prevState, newItem];
    };

    if (data.operationType === "income") {
      setIncomesData(updateData);
    } else {
      setExpensesData(updateData);
    }
    reset({ operationType: "", name: "", amount: "" });
  };

  const selectOptions = ["basic", "private", "business"];

  const deleteDataItemHandler = (targetItem) => {
    const updateArr = (currentList) => {
      const updatedList = currentList.filter(
        (item) => item.id !== targetItem.id
      );
      return updatedList;
    };
    if (targetItem.operationType === "income") {
      setIncomesData(updateArr);
    } else {
      setExpensesData(updateArr);
    }
  };

  return (
    <div>
      <UserFormWrapper>
        <form onSubmit={handleSubmit(submitFormHandler)}>
          <div className="form__radios">
            <label htmlFor="income">Income</label>
            <input
              {...register("operationType", { required: true })}
              type="radio"
              value="income"
              id="income"
            />
            <label htmlFor="expenses">Expenses</label>
            <input
              {...register("operationType", { required: true })}
              type="radio"
              value="expenses"
              id="expenses"
            />
          </div>
          {errors.operationType && (
            <ErrorMessage>
              <br />
              Choose an option
            </ErrorMessage>
          )}
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="name"
            {...register("name", { required: true, min: 2, maxLength: 30 })}
          />
          {errors.name && (
            <ErrorMessage>Name input can't be empty.</ErrorMessage>
          )}

          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            step=".01"
            type="number"
            placeholder="amount"
            {...register("amount", { required: true, min: 0 })}
          />
          {errors.amount && <ErrorMessage>Enter a valid number.</ErrorMessage>}

          <label htmlFor="category">Category</label>
          <select id="category" {...register("category", { required: true })}>
            {selectOptions.map((elem) => {
              return (
                <option key={elem} value={elem}>
                  {elem}
                </option>
              );
            })}
          </select>

          <button type="submit">Submit</button>
        </form>
      </UserFormWrapper>
      <Summary incomeAmount={incomesSummary} expenseAmount={expensesSummary} />
      <ListsWrapper>
        <FullList data={incomesData} deleteItem={deleteDataItemHandler} />
        <FullList data={expensesData} deleteItem={deleteDataItemHandler} />
      </ListsWrapper>
    </div>
  );
};

export default Main;
