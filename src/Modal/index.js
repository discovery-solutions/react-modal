import React from "react";
import {
    Container,
    Overlay,
    Card
} from "./styles";

const Modal = ({ active, show, data, children, closeModal }) => {
    let content = null;

    if (typeof active !== "string")
        return null;

    if (Array.isArray(children)) {
        // eslint-disable-next-line
        for (let child of children)
            if (child.props.name === active)
                content = child;
    } else {
        if (children.props.name === active)
            content = children;
    }

    if (!content)
        return null;

    return (
        <Container show={ true }>
            <Overlay onClick={ closeModal } />

            <Card>
                { React.cloneElement(content, { ...data, closeModal }) }
            </Card>
        </Container>
    )
}

export default Modal;
