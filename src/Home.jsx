import React, { useRef, useState } from "react";
import styled from "styled-components";
import Invoice from "./Components/Invoice";
import Sidebar from "./Components/Sidebar";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import InvoiceModal from "./Components/InvoiceModal";

const Container = styled.div`
  margin-left: 70px;
  display: flex;
  flex-wrap: wrap;
`;

const InvoiceBox = styled.div``;

const SideBarBox = styled.div``;

const ReviewButtonContainer = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 70px;
`;

const ReviewButton = styled.button`
  margin: 10px 0px 10px 0px;
  height: 40px;
  width: 80%;
  background-color: #40a2e3;
  border: none;
  font-size: large;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

const Home = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const pdfRef = useRef();

  const downloadPDF = () => {
    setPopupOpen(true);

    const input = pdfRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4", true);

      const pdfWidth = pdf.internal.pageSize.getWidth();

      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = canvas.width;

      const imgHeight = canvas.height;

      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

      const imgX = (pdfWidth - imgWidth * ratio) / 2;

      const imgY = 30;

      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );

      pdf.save("invoice.pdf");
    });
  };

  return (
    <Container>
      <InvoiceBox>
        <Invoice />
      </InvoiceBox>
      <SideBarBox>
        <ReviewButtonContainer onClick={() => downloadPDF()}>
          <ReviewButton>Review Invoice</ReviewButton>
        </ReviewButtonContainer>
        <Sidebar />
      </SideBarBox>
      {isPopupOpen && <InvoiceModal ref={pdfRef} />}
    </Container>
  );
};

export default Home;
