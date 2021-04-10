import styled from 'styled-components';

export const FlexContainer = styled.div`
  min-height: 100px;
  overflow: hidden;
`;
export const FlexRowHeader = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;
export const FlexRow = styled.div`
  min-height: 80vh;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  text-weight: bold;
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
  padding: 10px 0;
  color: white;
`;
export const SlickHeader = styled.div`
  font-size: ${(props) => props.size};
  font-weight: 500;
  padding-top: 70px;
  color: white;
`;
export const SlickPara = styled.div`
  font-size: ${(props) => props.size};
  max-width: 450px;
  text-align: right;
  color: white;
`;

export const Card = styled.div`
  margin: 15px 20%;
  padding: 30px;
  min-height: 20vh;
  box-shadow: 2px 5px 20px -3px #00000033;
  margin-bottom: 40px;
`;

export const ServiceContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 70%;
  margin: auto;
  margin-top: 120px;
`;

export const ServiceLink = styled.div`
  flex: 1;
  flex-direction: column;
  min-height: 135px;
  min-width: 230px;
  max-width: 230px;
  padding: 35px 0;
  text-align: center;
  box-shadow: 0 4px 4px 0 #0000003d;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 6px;
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
`;

export const ServiceInfoHead = styled.div`
  width: 100%;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`;
export const Divider = styled.div`
  width: 50%;
  border: 5px solid #373a40;
  border-radius: 20px;
  margin: 30px auto;
  background: #373a40;
`;
export const ServiceInfoBody = styled.div`
  width: 100%;
  font-size: 22px;
`;
