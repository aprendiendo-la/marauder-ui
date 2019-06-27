import React from "react";
import styled from "styled-components";
import theme from "../../theme";

export const H1 = styled.h1`
  font-size: 30px;
  font-weight: 900;
  color: ${theme.dark};
`;

export const H2 = styled(props => <H1 {...props} />)`
  font-size: 25px;
  font-weight: 600;
`;

export const H3 = styled(props => <H1 {...props} />)`
  font-size: 18px;
`;

export const H4 = styled(props => <H1 {...props} />)`
  font-size: 15px;
`;

export const H5 = styled(props => <H1 {...props} />)`
  font-size: 13px;
  font-weight: 500;
`;

export const Paragraph = styled.p`
  font-size: 13px;
`;
