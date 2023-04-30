import styled from "styled-components";

const CardStyled = styled.div`
  height: min-content;
  width: 50%;
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  border-radius: ${(props) => props.theme.borderRadius.md};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;

  @media (max-width: 800px) {
    width: 80%;
  }

  /* &:hover {
	} */

  @media (max-width: 800px) {
    width: 80%;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  @media (max-width: 500px) {
    width: 80%;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

export default CardStyled;
