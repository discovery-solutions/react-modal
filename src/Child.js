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

    const Component = content?.props?.component;

    if (typeof Component === "function")
        return <Component closeModal={ closeModal } { ...props } />

    return React.cloneElement(content, { ...props, closeModal });
}

export default BaseModal;
