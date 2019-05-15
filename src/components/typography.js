import React from "react";
import styled from "styled-components";

export const H1 = styled.h1`
    font-size: 30px;
    color: red;
`;

export const H2 = styled(props => <H1 {...props} />)`
    font-size: 24px;
`;

export const H3 = styled(props => <H1 {...props} />)`
    font-size: 18px;
`;

export const H4 = styled(props => <H1 {...props} />)`
    font-size: 15px;
    color: green;
`;