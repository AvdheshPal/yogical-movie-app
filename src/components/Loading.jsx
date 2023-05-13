import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${LoadingAnimation} 1s linear infinite;
`;

const Loading = () => {
  return (<>
    <Loader />
  </>);
};

export default Loading;
