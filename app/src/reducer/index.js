const initialState = {
    loading: false,
    dog: 'https://images.dog.ceo/breeds/hound-plott/hhh_plott002.JPG'
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOADING': return { ...state, loading: true };
        case 'NEW_DOG': return { ...state, loading: false, dog: action.payload };
        default: return state;
    }
};

export default reducer ;