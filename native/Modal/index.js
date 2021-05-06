import React from "react";
import getChild from "../../src/Child";
import {
    Container,
    Overlay,
    Card
} from "./styles";

const Modal = ({ style, ...props }) => {
    const Child = getChild(props);

    if (!Child)
        return null;

    console.log(Child);

    return (
        <Container show style={ style }>
            <Overlay onClick={ props.closeModal } />

            <Card>{ Child }</Card>
        </Container>
    )
}

export default Modal;
