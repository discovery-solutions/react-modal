import React, { useEffect } from "react";
import InternalModal from "./Modal/index.js";

global.octal_dev_modal_Context = React.createContext();

const modalReducer = (state, action) => {
    switch (action.type) {
        case "updateModal": {
            return {
                active: action.active,
                props: action.props
            }
        }
        default: {
            return new Error("Unhandled action type: " + action.type);
        }
    }
}

export const ModalProvider = ({ children, active = null, props = {}, onChange, ...rest }) => {
    const [ state, dispatch ] = React.useReducer(modalReducer, { active, props });

    global.octal_dev_modal_updateModal = (active, props = {}) => dispatch({ type: "updateModal", active, props });
    const closeModal = () => global.octal_dev_modal_updateModal(null);

    useEffect(() => {
        if (typeof onChange === "function")
            onChange({ active: state.active, props: state.props });
    }, [ state, onChange ]);

    return React.createElement(global.octal_dev_modal_Context.Provider, { value: { state, dispatch }},
        React.createElement(InternalModal, { ...state, ...rest, closeModal }, children)
    );
}

export const Modal = ({ name, component: Component }) => {
    return null;
}

export const showModal = (name, props) => {
    return global.octal_dev_modal_updateModal(name, props);
}
