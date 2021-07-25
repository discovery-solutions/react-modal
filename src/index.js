import React, { useEffect } from "react";
import InternalModal from "./Modal/index.js";

global.discovery_solutions_modal_Context = React.createContext();

export const closeModal = () => {
    return global.discovery_solutions_modal_updateModal(null);
}

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

    global.discovery_solutions_modal_getState = () => state;
    global.discovery_solutions_modal_updateModal = (active, props = {}) => dispatch({ type: "updateModal", active, props });

    useEffect(() => {
        if (typeof onChange === "function")
            onChange({ active: state.active, props: state.props });
    }, [ state, onChange ]);

    return React.createElement(global.discovery_solutions_modal_Context.Provider, { value: { state, dispatch }},
        React.createElement(InternalModal, { ...state, ...rest, closeModal }, children)
    );
}

export const Modal = ({ name, component: Component }) => {
    return null;
}

export const showModal = (name, props) => {
    return global.discovery_solutions_modal_updateModal(name, props);
}

export const getModalState = () => {
    let context = {
        state: global.discovery_solutions_modal_getState(),
    }

    try {
        return [ context.state, global.discovery_solutions_modal_updateModal ];
    } catch (e) {
        return [ undefined, undefined ];
    }
}

export const useModalState = callback => {
    const context = React.useContext(global.discovery_solutions_modal_Context);

    if (context === undefined)
        throw new Error("useModalState must be used within a ModalProvider");

    try {
        return context.state;
    } catch (e) {
        console.log(e);
        return undefined;
    }
}
