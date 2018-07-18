import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
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

export const Body = styled.div`
  flex: 1;
`;
