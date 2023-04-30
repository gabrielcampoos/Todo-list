import React, { useState } from "react";
import { Tarefa } from "../../types";

import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Text,
} from "../Checkbox/styles";

import CardStyled from "./styles";

const Card: React.FC<Tarefa> = ({ id, titulo, criadoEm, valor }) => {
  // lógica
  const [checked, setChecked] = useState(false);

  function handleCheckboxChange() {
    setChecked(!checked);
  }

  return (
    <CardStyled>
      <strong>{titulo}</strong>
      <strong>R$ {valor}</strong>
      <CheckboxContainer onClick={handleCheckboxChange}>
        <HiddenCheckbox onChange={handleCheckboxChange} checked={checked} />
        <StyledCheckbox />
        <Text>Pago</Text>
      </CheckboxContainer>
      <small>{criadoEm}</small>
    </CardStyled>
  );
};

export default Card;
