const initialState = {
    add: false,
    sections: [
        { section: "Component1 sectin1" },
        { section: "Component1 sectin2" },
        { section: "Component1 sectin3" },
        { section: "Component1 sectin4" },
    ]
}
const reducer_1 = (state = initialState, action) => {
    let newState = { ...state };
    if (action.type === "addSection1") {
        return {
            ...state,
            add: false,
            sections: state.sections.concat({ section: action.value || '' })
        }
    }
    if (action.type === "updateAdd1") {
        return {
            ...state,
            sections: state.sections,
            add: action.value
        }
    }
    return newState;
}

export default reducer_1;