import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
`;

export const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;

    display: flex;
    justify-content: center;
    align-items: center;

    animation: ${({ show }) => show ? fadeIn : fadeOut } 0.3s;
    animation-direction: forward;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.8;
    backdrop-filter: blur(3px);
    transition: all 0.3s;

    :hover {
        cursor: pointer;
    }
`;

export const Card = styled.div`
    padding: 20px;
    background: #FFF;
    border-radius: 8px;
    z-index: 1;
`;
