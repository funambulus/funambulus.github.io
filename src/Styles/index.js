import styled from "styled-components";

export const FlexContainer = styled.div`
    min-height:100px;
`;

export const FlexRowHeader = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    text-weight:bold;
`;

export const FlexCol = styled.div`
    flex:1;
    flex-direction: column;
`;