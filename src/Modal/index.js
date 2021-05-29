import React from "react";
import getChild from "../Child";
import {
    Container,
    Touchable,
    Overlay,
    Card
} from "./styles.js";

const Modal = ({ style, props: originalProps, ...rest }) => {
    const props = {
        ...rest,
        ...originalProps,
    }

    const Child = getChild(props);

    if (!Child)
        return null;

    return (
        <Container style={ style }>
            <Touchable onPress={ props.closeModal }>
                <Overlay/>
            </Touchable>

            {(Child.props.card === true) ? (
                <Card>{ Child }</Card>
            ) : (
                Child
            )}
        </Container>
    )
}

export default Modal;
