import styled from "styled-components";

const CheckboxContainer = styled.div`
  width: 120px;
  height: 35px;
  padding-left: 5px;
  margin: 0px 4px;
  border-radius: 5px;

  //   background-color: ${(props) => (props.onClick ? "#97C160" : "#E5E5E5")};

  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    width: 40%;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  @media (max-width: 500px) {
    width: 40%;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  @media (max-width: 390px) {
    width: 40%;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

const Text = styled.label`
  margin-left: 10px;
  font-size: 20px;

  @media (max-width: 800px) {
    width: 40%;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  @media (max-width: 500px) {
    width: 40%;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  @media (max-width: 390px) {
    width: 40%;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

const StyledCheckbox = styled.label``;

const HiddenCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: filter 0.2s ease 0s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 800px) {
    width: 40%;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  @media (max-width: 500px) {
    width: 40%;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  @media (max-width: 390px) {
    width: 40%;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

export { HiddenCheckbox, CheckboxContainer, StyledCheckbox, Text };
