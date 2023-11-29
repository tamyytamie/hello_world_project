import React from "react";
import styled from 'styled-components';

const StyledComponent = styled.div`
background-color: lightblue;
padding: 10px;
border-radius: 5px;
cursor: pointer;
`;

const StyledComponentsExample = () => {
    return <StyledComponent>Styled with Styled Component.</StyledComponent>;
};

export default StyledComponentsExample;