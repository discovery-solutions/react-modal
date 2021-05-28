import React from "react";
import getChild from "../Child";
import {
    Container,
    Touchable,
    Overlay,
    Card
} from "./styles.js";

const Modal = ({ style, card, ...rest }) => {
    const Child = getChild(rest);

    if (!Child)
        return null;

    const props = {
        ...rest,
        ...Child.props,
    }

    return (
        <Container style={ style }>
            <Touchable onPress={ props.closeModal }>
                <Overlay/>
            </Touchable>

            {(props.card === true) ? (
                <Card>{ Child }</Card>
            ) : (
                Child
            )}
        </Container>
    )
}

export default Modal;
