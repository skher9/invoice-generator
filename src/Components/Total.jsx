import React from "react";
import styled from "styled-components";

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
  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <Title>Sub Total:</Title>
          <Title>Discount:</Title>
          <Title>Tax:</Title>
        </TitleContainer>
        <ValueContainer>
          <Actualvalue>{68451}</Actualvalue>
          <Actualvalue>{"10%"}</Actualvalue>
          <Actualvalue>{543}</Actualvalue>
        </ValueContainer>
      </Wrapper>
      <TotalContainer>
        <TitleContainer>
          <Title>Total</Title>
        </TitleContainer>
        <ValueContainer>
          <Actualvalue>{53415354}</Actualvalue>
        </ValueContainer>
      </TotalContainer>
    </Container>
  );
};

export default Total;
