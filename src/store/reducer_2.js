const initialState = {
    add: false,
    sections: [
    ]
}
const reducer_2 = (state = initialState, action) => {
    let newState = { ...state };
    if (action.type === "addSection2") {
        return {
            ...state,
            add: false,
            sections: state.sections.concat({ section: action.value || '' })
        }
    }
    if (action.type === "updateAdd2") {
        return {
            ...state,
            sections: state.sections,
            add: action.value
        }
    }
    return newState;
}

export default reducer_2;