import styled, { css } from "styled-components/primitives";
import { Platform } from "react-primitives";

// export const fadeIn = keyframes`
//   from {
//       opacity: 0;
//   }
//   to {
//       opacity: 1;
//   }
// `;
//
// export const fadeOut = keyframes`
//     from {
//         opacity: 1;
//     }
//     to {
//         opacity: 0;
//     }
// `;

export const Container = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Overlay = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.8;

    ${ Platform.select({
        web: css`
            backdrop-filter: blur(3px);
            transition: all 0.3s;
            cursor: pointer;
        `,
        ios: {},
        android: {}
    }) }
`;

export const Card = styled.View`
    padding: 20px;
    background: #FFF;
    border-radius: 8px;
    z-index: 1;
`;
