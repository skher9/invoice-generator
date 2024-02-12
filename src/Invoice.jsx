import React, { useState } from "react";
import styled from "styled-components";
import Item from "./Components/Item";
import Total from "./Components/Total";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: small;
  color: #3d3b40;
`;

const InvoiceContainer = styled.div`
  flex: 1 1 50%;
  background-color: white;
  border: 1px solid grey;
  border-radius: 20px;
  min-height: 900px;
  max-width: 900px;
  margin-left: 70px;
  margin-top: 70px;
  margin-bottom: 70px;
  margin-right: 20px;
`;

const DateContainer = styled.div`
  border-bottom: 2px solid #b0a695;
  margin: 10px 35px 0px 35px;
  height: 100px;
  display: flex;
`;

const Input = styled.input`
  background-color: #eef5ff;
  border-radius: 5px;
  border: none;
`;

const DateDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InvoiceDiv = styled.div`
  margin-right: 10px;
`;

const CurrentDate = styled.h3``;

const DueDate = styled.h3``;

const InvoiceNumber = styled.h3``;

const BillContainer = styled.div`
  border-bottom: 2px solid #b0a695;
  margin: 10px 35px 0px 35px;
  height: 200px;
  display: flex;
`;

const Bill = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BillHeading = styled.h3``;

const ItemContainer = styled.div`
  border-bottom: 2px solid #b0a695;
  margin: 0px 35px 0px 35px;
  height: 170px;
  overflow-y: scroll;
`;

const TotalContainer = styled.div`
  border-bottom: 2px solid #b0a695;
  margin: 10px 35px 0px 35px;
  height: 250px;
  display: flex;
`;

const AddButton = styled.button`
  height: 40px;
  width: 80px;
  margin-top: 10px;
  background-color: #40a2e3;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

const TotalDiv = styled.div`
  height: 200px;
  width: 80%;
  margin-top: 30px;
  margin-left: 10%;
  align-self: flex-end;
`;

const NotesContainer = styled.div`
  margin: 10px 35px 0px 35px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Note = styled.h3``;

const NoteArea = styled.textarea`
  min-height: 30px;
  background-color: #eef5ff;
`;

///////////////////////////////////////////////

const ReviewContainer = styled.div`
  flex: 1 1 20%;
  border: 1px solid;
  height: 200px;
  width: 250px;
  margin-top: 70px;
  margin-left: 60px;
  margin-right: 100px;
`;

const ReviewButton = styled.button`
  margin: 20px;
  height: 40px;
  width: 250px;
  background-color: #40a2e3;
  border: none;
  font-size: large;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

const Invoice = () => {
  const [itemList, setItemList] = useState([]);
  const [count, setCount] = useState(1);

  const renderComponents = () => {
    const components = [];
    for (let i = 0; i < count; i++) {
      components.push(<Item key={i} />);
    }
    return components;
  };

  const handleAddItemClick = (e) => {
    setCount(count + 1);
  };

  return (
    <Container>
      <InvoiceContainer>
        <DateContainer>
          <DateDiv>
            <CurrentDate>Current Date:</CurrentDate>
            <DueDate>
              Due Date: <Input style={{ height: 25 }} type="date" />
            </DueDate>
          </DateDiv>
          <InvoiceDiv>
            <InvoiceNumber>
              Invoice: <Input style={{ width: 50, height: 20 }} type="number" />
            </InvoiceNumber>
          </InvoiceDiv>
        </DateContainer>
        <BillContainer>
          <Bill>
            <BillHeading>Bill to:</BillHeading>
            <Input
              style={{ height: 30, width: "90%" }}
              placeholder="Who is this invoice to?"
            />
            <Input
              style={{ height: 30, marginTop: 15, width: "90%" }}
              placeholder="Email address"
            />
            <Input
              style={{ height: 30, marginTop: 15, width: "90%" }}
              placeholder="Billing address"
            />
          </Bill>
          <Bill>
            <BillHeading>Bill from:</BillHeading>
            <Input
              style={{ height: 30, width: "90%" }}
              placeholder="Who is this invoice from?"
            />
            <Input
              style={{ height: 30, marginTop: 15, width: "90%" }}
              placeholder="Email address"
            />
            <Input
              style={{ height: 30, marginTop: 15, width: "90%" }}
              placeholder="Billing address"
            />
          </Bill>
        </BillContainer>
        <ItemContainer>{renderComponents()}</ItemContainer>
        <TotalContainer>
          <AddButton onClick={(e) => handleAddItemClick()}>Add Item</AddButton>
          <TotalDiv>
            <Total />
          </TotalDiv>
        </TotalContainer>
        <NotesContainer>
          <Note>Note:</Note>
          <NoteArea
            style={{ width: "100%" }}
            placeholder="Thanks for your Business!!"
          />
        </NotesContainer>
      </InvoiceContainer>
      <ReviewContainer>
        <ReviewButton>Review Invoice</ReviewButton>
      </ReviewContainer>
    </Container>
  );
};

export default Invoice;
