import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 95vh;
  width: 100vw;
  margin-right: 70px;
`;

const Header = styled.div`
  background-color: lightgray;
  height: 120px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderContainer = styled.div`
  flex: 1;
  text-align: left;
`;

const Name = styled.h1``;

const InvoiceNo = styled.h4``;

const AmountDue = styled.h3``;

const BillInfoContainer = styled.div`
  min-height: 170px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid lightgrey;
`;

const InfoContainer = styled.div`
  height: 100%;
  width: 300px;
  text-align: left;
`;

const BillInfo = styled.p``;

const Title = styled.p`
  font-weight: bold;
`;

const ItemInfoContainer = styled.div`
  min-height: 100px;
`;

const ItemTitleContainer = styled.div`
  border-bottom: 2px solid lightgrey;
  height: 40px;
  display: flex;
  align-items: center;
`;

const ItemContainer = styled.div`
  display: flex;
  border-bottom: 2px solid lightgrey;
`;

const ItemInfo = styled.div`
  text-align: left;
`;

const Item = styled.p``;

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
`;

const TotalWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  justify-content: end;
  border-bottom: 2px solid lightgrey;
`;

const Total = styled.p``;

const InvoiceModal = () => {
  const Invoice = useSelector((state) => state.invoiceData);
  const ItemVal = useSelector((state) => state.Item);

  return (
    <Container>
      <Header>
        <HeaderContainer>
          <Name>{Invoice.fromName}</Name>
          <InvoiceNo>Invoice no.{Invoice.id}</InvoiceNo>
        </HeaderContainer>
        <AmountDue>{Invoice.Total}</AmountDue>
      </Header>
      <BillInfoContainer>
        <InfoContainer>
          <Title>Billed to: </Title>
          <BillInfo>{Invoice.toName}</BillInfo>
          <BillInfo>{Invoice.toAddress}</BillInfo>
          <BillInfo>{Invoice.toEmail}</BillInfo>
        </InfoContainer>
        <InfoContainer>
          <Title>Billed from: </Title>
          <BillInfo>{Invoice.fromName}</BillInfo>
          <BillInfo>{Invoice.fromAddress}</BillInfo>
          <BillInfo>{Invoice.fromEmail}</BillInfo>
        </InfoContainer>
        <InfoContainer>
          <Title>Date of Issue: </Title>
          <BillInfo>{Invoice.dueDate}</BillInfo>
        </InfoContainer>
      </BillInfoContainer>
      <ItemInfoContainer>
        <ItemTitleContainer>
          <ItemInfo style={{ width: 50 }}>
            <Title>QTY</Title>
          </ItemInfo>
          <ItemInfo style={{ flex: 1 }}>
            <Title>DESCRIPTION</Title>
          </ItemInfo>
          <ItemInfo>
            <Title>PRICE</Title>
          </ItemInfo>
          <ItemInfo style={{ marginLeft: 10 }}>
            <Title>AMOUNT</Title>
          </ItemInfo>
        </ItemTitleContainer>
        {ItemVal.map((ele) => {
          return (
            <ItemContainer>
              <ItemInfo style={{ width: 50 }}>
                <Item>{ele.quantity}</Item>
              </ItemInfo>
              <ItemInfo style={{ flex: 1 }}>
                <Item>{ele.itemDescription}</Item>
              </ItemInfo>
              <ItemInfo>
                <Item>{ele.price}</Item>
              </ItemInfo>
              <ItemInfo style={{ marginLeft: 10 }}>
                <Item>{Invoice.subTotal}</Item>
              </ItemInfo>
            </ItemContainer>
          );
        })}
      </ItemInfoContainer>
      <TotalContainer>
        <TotalWrapper>
          <Total style={{ fontSize: 20, fontWeight: "bold" }}>
            Sub Total:{" "}
          </Total>
          <Total style={{ marginLeft: 10 }}>{Invoice.subTotal}</Total>
        </TotalWrapper>
        <TotalWrapper>
          <Total style={{ fontSize: 20, fontWeight: "bold" }}>Total: </Total>
          <Total style={{ marginLeft: 10 }}>{Invoice.total}</Total>
        </TotalWrapper>
      </TotalContainer>
    </Container>
  );
};

export default InvoiceModal;
