import styled from "styled-components";

export const FlexContainer = styled.div`
    min-height:100px;
    overflow: hidden;
`;
export const FlexRowHeader = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    text-weight:bold;
`;
export const FlexRow = styled.div`
    min-height: 80vh;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    text-weight:bold;
`;
export const FlexCol = styled.div`
    flex:${props => props.size ? props.size : 1};
    flex-direction: column;
`;
export const SlickRow = styled.div`
    min-height: 80vh;
    width: 100%;
`;
export const SlickCard = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: flex-end;
    min-height: 85vh;
    justify-content: center;
    padding: 0 5%;
    backdrop-filter: brightness(0.5);
`;
export const SlickItem = styled.div`
    font-size:${props => props.size};
    padding: 10px 0;
    color:white;
    `;
export const SlickHeader = styled.div`
    font-size:${props => props.size};
    padding-top: 70px;
    color:white;
    `;
export const SlickPara = styled.div`
    font-size:${props => props.size};
    max-width: 450px;
    text-align: right;
    color:white;
    `;

export const Card = styled.div`
    margin: 10px 70px;
    padding: 40px;
    min-height: 20vh;
    box-shadow: 2px 5px 20px -3px #00000033;
    margin-bottom:40px;
`;