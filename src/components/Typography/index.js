import React from "react";
import styled from "styled-components";
import theme from "../../theme";

export const H1 = styled.h1`
  font-size: 30px;
  font-weight: 900;
  color: ${theme.primary};
`;

export const H2 = styled(props => <H1 {...props} />)`
  font-size: 25px;
  font-weight: 600;
`;

export const H3 = styled(props => <H1 {...props} />)`
  font-size: 18px;
  font-weight: 500;
`;

export const H4 = styled(props => <H1 {...props} />)`
  font-size: 15px;
`;
