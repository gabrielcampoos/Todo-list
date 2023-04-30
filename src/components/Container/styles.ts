import styled from "styled-components";

// interface ContainerProps {
// 	disabled?: boolean;
// }

// dai é só adicionar esse tipo ao lado do CSSProperties
// & ContainerProps
const Container = styled.main<React.CSSProperties>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.width};

  @media (max-width: 800px) {
    width: 80%;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  @media (max-width: 500px) {
    width: 90%;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  @media (max-width: 390px) {
    width: 100%;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

export default Container;

/* background-color: ${(props) => (props.disabled ? 'red' : 'green')}; */
