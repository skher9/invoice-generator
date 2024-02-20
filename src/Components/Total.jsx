import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addSubTotal, addTotal } from "../redux/Invoice/invoiceActions";

const Container = styled.div`
  margin-left: 35%;
  width: 60%;
`;

const Wrapper = styled.div`
  border-bottom: 2px solid #b0a695;
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: small;
`;

const TitleContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

const ValueContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
`;

const Title = styled.h3``;

const Actualvalue = styled.p`
  font-size: larger;
`;

const TotalContainer = styled.div`
  height: 40px;
  display: flex;
`;

const Total = () => {
  const ItemData = useSelector((state) => state.Item);
  const Data = useSelector((state) => state.invoiceData);

  const dispatch = useDispatch();

  const calcSubTotal = () => {
    let SubTotal = 0;
    ItemData.forEach((ele) => {
      let price = parseInt(ele.price);
      let quantity = parseInt(ele.quantity);
      SubTotal = SubTotal + price * quantity;
    });
    dispatch(addSubTotal(SubTotal));
    return SubTotal;
  };

  function calculateTotal() {
    const subTotal = calcSubTotal();

    const taxAmount = subTotal * (Data.taxRate / 100);

    const discountAmount = subTotal * (Data.discountRate / 100);

    const totalBeforeTax = subTotal - discountAmount;

    const totalAfterTax = totalBeforeTax + taxAmount;
    dispatch(addTotal(totalAfterTax.toFixed(2)));
    return totalAfterTax.toFixed(2);
  }

  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <Title>Sub Total:</Title>
          <Title>Discount:</Title>
          <Title>Tax:</Title>
        </TitleContainer>
        <ValueContainer>
          <Actualvalue>{calcSubTotal()}</Actualvalue>
          <Actualvalue>{Data.discountRate}</Actualvalue>
          <Actualvalue>{Data.taxRate}</Actualvalue>
        </ValueContainer>
      </Wrapper>
      <TotalContainer>
        <TitleContainer>
          <Title>Total</Title>
        </TitleContainer>
        <ValueContainer>
          <Actualvalue>{calculateTotal()}</Actualvalue>
        </ValueContainer>
      </TotalContainer>
    </Container>
  );
};

export default Total;
