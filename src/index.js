import React from "react";
import InternalModal from "./Modal/index.js";

global.octal_dev_modal_Context = React.createContext();

const modalReducer = (state, action) => {
    switch (action.type) {
        case "updateModal": {
            return {
                active: action.active,
                data: action.data
            }
        }
        default: {
            return new Error("Unhandled action type: " + action.type);
        }
    }
}

export const ModalProvider = ({ children, active = null, data = {}, ...rest }) => {
    const [ state, dispatch ] = React.useReducer(modalReducer, { active, data });

    global.octal_dev_modal_updateModal = (active, data = {}) => dispatch({ type: "updateModal", active, data });
    const closeModal = () => global.octal_dev_modal_updateModal(null);

    return React.createElement(global.octal_dev_modal_Context.Provider, { value: { state, dispatch }},
        React.createElement(InternalModal, { ...state, ...rest, closeModal }, children)
    );
}

export const Modal = ({ name, component: Component }) => {
    return null;
}

export const showModal = (name, data) => {
    return global.octal_dev_modal_updateModal(name, data);
}
