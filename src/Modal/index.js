import React from "react";
import styles from "./styles/index.js";

const Modal = ({ active, show, data, children, closeModal, style }) => {
    let content = null;
    const {
        Container,
        Overlay,
        Card
    } = styles;

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

    const Component = content?.props?.component;

    return (
        <Container show style={ style }>
            <Overlay onClick={ closeModal } />

            {(typeof Component === "function") ? (
                <Component closeModal={ closeModal } { ...data } />
            ) : (
                React.cloneElement(content, { ...data, closeModal })
            )}
        </Container>
    )
}

export default Modal;
