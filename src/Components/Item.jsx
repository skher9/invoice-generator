import React from "react";
import styled from "styled-components";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const Container = styled.div`
  margin-top: 25px;
  width: 100%;
  height: 100px;
`;

const Header = styled.div`
  display: flex;
  text-align: start;
  border-bottom: 2px solid #b0a695;
`;

const Heading = styled.h3``;

const ItemContainer = styled.div`
  display: flex;
  text-align: start;
`;

const Input = styled.input`
  background-color: #eef5ff;
  border-radius: 5px;
  border: none;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 20px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid;
  background-color: #bf3131;
  color: White;
`;

const Item = () => {
  return (
    <Container>
      <Header>
        <Heading style={{ flex: 1 }}>ITEM</Heading>
        <Heading>QTY</Heading>
        <Heading style={{ marginLeft: 25 }}>PRICE/RATE</Heading>
        <Heading style={{ marginLeft: 10, marginRight: 10 }}>ACTION</Heading>
      </Header>
      <ItemContainer>
        <InputContainer style={{ flex: 1 }}>
          <Input
            style={{ marginTop: 10, width: "80%", height: 25 }}
            placeholder="Item name"
          />
          <Input
            style={{ marginTop: 10, width: "80%", height: 25 }}
            placeholder="Item description"
          />
        </InputContainer>
        <Input
          style={{ width: 40, height: 25, marginTop: 10, marginLeft: 10 }}
        ></Input>
        <Input
          style={{ width: 60, height: 25, marginTop: 10, marginLeft: 25 }}
        ></Input>
        <Button>
          <DeleteForeverOutlinedIcon />
        </Button>
      </ItemContainer>
    </Container>
  );
};

export default Item;
