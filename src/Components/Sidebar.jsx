import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDiscount, addTax } from "../redux/Invoice/invoiceActions";

const ReviewHeading = styled.h3``;

const Select = styled.select`
  border: 1px solid black;
  margin: 10px 0px 10px 0px;
  height: 40px;
  width: 80%;
  background-color: #eef5ff;
  border-radius: 10px;
  font-size: large;
  text-align: center;
  cursor: pointer;
`;

const Option = styled.option``;

const ReviewInput = styled.input`
  width: 80%;
  height: 35px;
`;

const Span = styled.span`
  font-size: x-large;
  border: 1px solid;
  width: 20%;
`;

const ReviewInputWrapper = styled.div`
  width: 80%;
  display: flex;
`;

const ReviewContainer = styled.div`
  height: 400px;
  width: 300px;
  display: flex;
  font-size: small;
  flex-direction: column;
  align-items: flex-start;
`;

const Sidebar = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const dispatch = useDispatch();

  const handleTax = (e) => {
    const temp = e.target.value;
    dispatch(addTax(temp));
  };

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleDiscount = (e) => {
    const temp = e.target.value;
    dispatch(addDiscount(temp));
  };

  return (
    <ReviewContainer>
      <ReviewHeading>Currency:</ReviewHeading>
      <Select value={selectedValue} onChange={handleDropdownChange}>
        <Option value="option1">₹ INR (Indian Rupee)</Option>
        <Option value="option2">$ USD (United Stated Dollar)</Option>
      </Select>
      <ReviewHeading>Tax Rate:</ReviewHeading>
      <ReviewInputWrapper>
        <ReviewInput type="number" onChange={(e) => handleTax(e)} />
        <Span>%</Span>
      </ReviewInputWrapper>
      <ReviewHeading>Discount Rate:</ReviewHeading>
      <ReviewInputWrapper>
        <ReviewInput type="number" onChange={(e) => handleDiscount(e)} />
        <Span>%</Span>
      </ReviewInputWrapper>
    </ReviewContainer>
  );
};

export default Sidebar;
