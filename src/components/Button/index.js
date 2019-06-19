import styled from "styled-components";
import theme from "../../theme";

export default styled.button`
  padding: 10px 28px;
  background: ${theme.primary};
  color: white;
  border-radius: 50px;
  border: 0;
  cursor: pointer;

  :hover {
    background: ${theme.primaryLight};
  }

  :active {
    background: ${theme.primary};
  }
`;
