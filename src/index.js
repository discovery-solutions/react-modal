import React from "react";
import Modal from "./Modal/index.js";

global.ModalContext = React.createContext();

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

    global.OctalDev_updateModal = (active, data = {}) => dispatch({ type: "updateModal", active, data });
    const closeModal = () => global.OctalDev_updateModal(null);

    return React.createElement(global.ModalContext.Provider, { value: { state, dispatch }},
        React.createElement(Modal, { ...state, ...rest, closeModal }, children)
    );
}

export const showModal = (name, data) => {
    return global.OctalDev_updateModal(name, data);
}
