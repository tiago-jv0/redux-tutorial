const personReducer = (state = {}, { type, payload }) => {
    if (type === 'UPDATE_PERSON') {
        return { name: payload };
    }

    if (type === 'ADD_PERSON') {
        return { ...state, ...payload };
    }

    return state;
};


export default personReducer