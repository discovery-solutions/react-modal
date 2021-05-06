import styled from "styled-components/native";

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

export const Overlay = styled.TouchableOpacity.attrs(props => ({
    onPress: props.onClick,
}))`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.8;
`;

export const Card = styled.View`
    z-index: 1;
`;
