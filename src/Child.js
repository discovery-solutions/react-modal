import React from "react";

const BaseModal = ({ active, props, children, closeModal }) => {
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


    const { component: Component, ...rest } = content?.props;
    let componentProps = { ...rest, closeModal };

    if (typeof Component === "function")
        return <Component { ...componentProps } />

    return React.cloneElement(content, componentProps);
}

export default BaseModal;
