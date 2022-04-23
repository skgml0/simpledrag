import React from "react";
import styled from "styled-components";

export default function Draggable(props) {
  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    card.style.display = "block";
    e.target.appendChild(card);
  };
  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <FlexBox
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </FlexBox>
  );
}

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  background-color: aquamarine;
  padding: 15px;
`;
