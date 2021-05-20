import React from "react";
import getChild from "../Child";
import {
    Container,
    Overlay,
    Card
} from "./styles.js";

const Modal = ({ style, card, ...props }) => {
    const Child = getChild(props);

    if (!Child)
        return null;

    return (
        <Container style={ style }>
            <Overlay onPress={ props.closeModal }/>

            {(card === true) ? (
                <Card>{ Child }</Card>
            ) : (
                Child
            )}
        </Container>
    )
}

export default Modal;
