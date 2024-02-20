import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { addItem } from "../redux/Invoice/invoiceActions";

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

const Item = ({ id }) => {
  const [itemData, setItemData] = useState({
    id: id,
    quantity: 0,
    price: 0,
    itemName: "",
    itemDescription: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      console.log(itemData);
      dispatch(addItem(itemData));
    }
  };

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
            type="text"
            name="itemName"
            required
            style={{ marginTop: 10, width: "80%", height: 25 }}
            placeholder="Item name"
            value={itemData.itemName}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <Input
            type="text"
            name="itemDescription"
            required
            style={{ marginTop: 10, width: "80%", height: 25 }}
            placeholder="Item description"
            value={itemData.itemDescription}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e)}
          />
        </InputContainer>
        <Input
          type="number"
          name="quantity"
          required
          style={{ width: 40, height: 25, marginTop: 10, marginLeft: 10 }}
          value={itemData.quantity}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyDown(e)}
        ></Input>
        <Input
          type="number"
          name="price"
          required
          style={{ width: 60, height: 25, marginTop: 10, marginLeft: 25 }}
          value={itemData.price}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyDown(e)}
        ></Input>
        <Button>
          <DeleteForeverOutlinedIcon />
        </Button>
      </ItemContainer>
    </Container>
  );
};

export default Item;
