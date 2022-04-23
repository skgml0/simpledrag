import React from "react";
import styled from "styled-components";

export default function Box(props) {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
  };
  const dragOver = (e) => {
    e.stopPropagation();
  };
  return (
    <Card
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.children}
    </Card>
  );
}
const Card = styled.div`
  padding: 15px 25px;
  background-color: azure;
  cursor: pointer;
  margin-bottom: 15px;
`;
