import styled from "styled-components";

export const FlexContainer = styled.div`
  min-height: 100px;
  overflow: hidden;
`;
export const FlexRowHeader = styled.div`
  min-height: 100px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;
export const FlexRow = styled.div`
  //   min-height: 80vh;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
export const FlexCol = styled.div`
  flex: ${(props) => (props.size ? props.size : 1)};
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
  padding: 0 12%;
  backdrop-filter: brightness(0.5);
`;
export const SlickItem = styled.div`
  font-size: ${(props) => props.size};
  padding: 16px 0;
  color: white;
  justify-content: center;
`;
export const SlickHeader = styled.div`
  font-size: ${(props) => props.size};
  font-weight: 500;
  padding-top: 70px;
  color: white;
  text-align: right;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
export const SlickPara = styled.div`
  font-size: ${(props) => props.size};
  max-width: 480px;
  text-align: right;
  color: #e8e8e8;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const Card = styled.div`
  margin: 15px 20%;
  padding: 30px;
  min-height: 25vh;
  box-shadow: ${(props) =>
    props.noShadow ? "none" : "2px 5px 20px -3px #00000033"};
  border-radius: 5px;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 0 8px;
    min-height: 136px;
    width: 70%;
    margin: 12px auto !important;
    flex-direction: column-reverse;
  }
  @media (max-width: 380px) {
    width: 84%;
  }
`;
export const ServiceContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 85%;
  margin: 0px auto;
  margin-top: 120px;
`;
export const ServiceLink = styled.div`
  flex: 1;
  flex-direction: column;
  min-height: 135px;
  min-width: 24%;
  max-width: 24%;
  padding: 24px 0;
  text-align: center;
  background: #686d76;
  // box-shadow: 0 4px 4px 0 #0000003d;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 4px 4px 1px #00000060;
  }
`;
export const ServicesInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  min-height: 40%;
  justify-content: flex-end;
  align-items: flex-start;
  @media (max-width: 768px) {
    margin-top: 24px;
  }
`;
export const ServiceInfoHead = styled.div`
  width: 100%;
  font-size: 3vw;
  font-weight: bold;
  text-align: center;
  color: #373a40;
  padding: 0 8px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Divider = styled.div`
  width: 70%;
  border: 2px solid #373a40;
  border-radius: 20px;
  margin: 30px auto;
  background: #373a40;
`;

export const ServiceInfoBody = styled.div`
  width: 70%;
  margin: 0 auto;
  font-size: 1.2vw;
`;
