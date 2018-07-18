import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Body = styled(Wrapper)`
  flex: 1;
`;

export const TaskListWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export const TaskMenu = styled.div`
  background: green;
`;

export const TableWrapper = styled.div`
  flex: 1;
`;


export const TaskDetailsWrapper = styled.div`
  flex: 1;
  display: flex;
  background: #efefef;
  overflow-x: hidden;
`;

export const Sidebar = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #0e0e0e;
  display: flex;
  flex-direction: column;
  align-content: center;
  z-index: 1;
  box-shadow: -7px 0px 23px 4px #000000,
  @media (max-width: 480px): {
    display: none;
  }
`;

export const NoTaskWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
